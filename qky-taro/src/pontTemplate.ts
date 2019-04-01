import { CodeGenerator, Interface, Mod, BaseClass } from 'pont-engine';
import * as pont from 'pont-engine';

export default class MyGenerator extends CodeGenerator {
  /** 获取某个基类的类型定义代码 */
  getBaseClassInDeclaration(base: BaseClass) {
    return `class ${base.name} {
      ${base.properties
        .map(prop => {
          // 替换 defs. 不使用 defs 命名空间
          let propertyCode = prop.toPropertyCode(true).replace(/defs\./g, '');
          // 如果属性是范型参考，则属性为必选
          // 例如 data?: T0 , creditCustomerConsumptionDailyVo?: CreditManagerV2.AggregateAllTransactionDetailsWithinDimensions[]
          if (prop.dataType.reference) {
            propertyCode = propertyCode.replace(/\?/, '');
          }
          return propertyCode;
        })
        .join('\n')}
    }
    `;
  }

  /** 获取所有基类的类型定义代码，一个 namespace */
  getBaseClassesInDeclaration() {
    const content = `namespace ${this.dataSource.name || 'defs'} {
      ${this.dataSource.baseClasses
        .map(
          base => `
        export ${this.getBaseClassInDeclaration(base)}
      `
        )
        .join('\n')}
    }
    `;

    return content;
  }

  /** 获取接口内容的类型定义代码 */
  getInterfaceContentInDeclaration(inter: Interface) {
    let bodyParams = inter.getBodyParamsCode();
    if (bodyParams.includes('defs.')) {
      bodyParams = bodyParams.replace(/defs\./g, '');
    }
    const paramsCode = inter.getParamsCode();
    const isEmptyParams = paramsCode.replace(/(\n|\s)/g, '') === 'classParams{}';

    const requestArgs = [];

    //@ts-ignore
    !isEmptyParams && requestArgs.push('params: Params');
    //@ts-ignore
    bodyParams && requestArgs.push(`bodyParams: ${bodyParams}`);
    //@ts-ignore
    requestArgs.push(`options?: RequestConfig`);
    const requestParams = requestArgs.join(', ');

    let responseType = inter.responseType;
    if (responseType.includes('defs.')) {
      responseType = responseType.replace(/defs\./g, '');
    }

    return `
      ${isEmptyParams ? '' : 'export ' + paramsCode}
      export type ResponseType = Promise<${responseType}>
      export function request(${requestParams}): ResponseType;
    `;
  }

  /** 获取公共的类型定义代码 */
  getCommonDeclaration() {
    return `
    import RequestUtil from '../../../utils/fetch'
    `;
  }

  /** 获取接口实现内容的代码 */
  getInterfaceContent(inter: Interface) {
    const contentType = inter.consumes && inter.consumes.length ? inter.consumes[0] : 'application/json';
    // 生成参数注释
    let params:string[] = []
    let interFaceParams:string[] = []
    let data:string[] = []
    inter.parameters.forEach(el=>{
          let baseType = el.dataType.primitiveType?el.dataType.primitiveType:'string'
          let interfaceType = el.dataType.reference!==''?el.dataType.reference:baseType
          interFaceParams.push(`/** ${el.description}*/${el.name}:${interfaceType}`)
          data.push(el.name)
          params.push(el.name)
    })
    params.push('options')
    interFaceParams.push('/** 请求配置参数*/options?:Qky.http.options')
    const requestArgs: string[] = [];
    interFaceParams && requestArgs.push(...interFaceParams);
    const requestParamsInterFace = requestArgs.join(', ');
    const requestParams = params.join(', ');

    return `
    import fetch from '../../../utils/fetch'
    /**
    * ${inter.description}
    */
    export default function ${inter.name}({${requestParams}}:{${requestParamsInterFace}}) {
      const fetchOption = Object.assign({
        url: '${inter.path}',
        method: '${inter.method}',
        headers: {
          'Content-Type': '${contentType}'
        },
        ${data.length ? `data:{${data.join(',')}}` : ''}
      },
      options)
      return fetch.request(fetchOption);
    }
   `;
  }

  /** 获取单个模块的 index 入口文件 */
  getModIndex(mod: Mod) {
    return `
      /**
       * @description ${mod.description}
       */
      ${mod.interfaces
        .map(inter => {
          return `import ${inter.name} from './${inter.name}';`;
        })
        .join('\n')}
      export {
        ${mod.interfaces.map(inter => inter.name).join(', \n')}
      }
    `;
  }

  /** 获取所有模块的 index 入口文件 */
  getModsIndex() {
    let conclusion = `
      export const API = {
        ${this.dataSource.mods.map(mod => mod.name).join(', \n')}
      };
    `;

    // dataSource name means multiple dataSource
    if (this.dataSource.name) {
      conclusion = `
        export const ${this.dataSource.name} = {
          ${this.dataSource.mods.map(mod => mod.name).join(', \n')}
        };
      `;
    }

    return `
      ${this.dataSource.mods
        .map(mod => {
          return `import * as ${mod.name} from './${mod.name}';`;
        })
        .join('\n')}
      ${conclusion}
    `;
  }

  /** 获取接口类和基类的总的 index 入口文件代码 */
  getIndex() {
    let conclusion = `
      export * from './mods/';
    `;

    // dataSource name means multiple dataSource
    if (this.dataSource.name) {
      conclusion = `
        export { ${this.dataSource.name} } from './mods/';
      `;
    }

    return conclusion;
  }
}

export class FileStructures extends pont.FileStructures {
  getModsDeclaration(originCode: string, usingMultipleOrigins: boolean) {
    return `
      export ${originCode}
    `;
  }

  getBaseClassesInDeclaration(originCode: string, usingMultipleOrigins: boolean) {
    return `
      export ${originCode}
    `;
  }

  getDataSourcesDeclarationTs() {
    const dsNames = (this as any).generators.map(ge => ge.dataSource.name);

    return `
      ${dsNames
        .map(name => {
          return `export * from './${name}/api';`;
        })
        .join('\n')}
      export as namespace defs;
    `;
  }

  getDataSourcesTs() {
    const dsNames = (this as any).generators.map(ge => ge.dataSource.name);

    return `
      ${dsNames
        .map(name => {
          return `import ${name} from './${name}';`;
        })
        .join('\n')}
      import defs from './api';
      export type apitype = typeof defs;
      export const api = {${dsNames.join(',')}} as apitype;
      
    `;
  }
}