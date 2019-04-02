import Taro from '@tarojs/taro'

export default class Store{
    /**
     * 从本地缓存中异步获取指定 key 对应的内容
     * @param {string} key
     */
    public static async getStorage(key:string) {
        try{
            const res = await Taro.getStorage({ key })
            return res.data
        }catch(e){
            return ''
        }
    }

    /**
     *将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口
     * @param {string} key
     * @param {string} data
     * @memberof store
     */
    public static async setStorage(key:string,data:string) {
        await Taro.setStorage({key,data})
    }

    /**
     *从本地缓存中同步移除指定 key 。
     * @param {string} key
     * @memberof store
     */
    public static async removeStorage(key:string){
        await Taro.removeStorage({key})
    }
}