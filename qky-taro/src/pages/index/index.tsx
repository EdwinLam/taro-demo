import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import {API} from '../../api'
import { observer, inject } from '@tarojs/mobx'

interface test{
  counterStore:any
}

@inject('counterStore')
@observer
export default class Index extends Component<test> {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  async componentWillMount () {
    

   }

   increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  async componentDidMount () { 
    API.basGroup.statisticalGroupMemberNumber({groupId:'',options:{url:'',method:'POST'}})
    const res = await API.system.getInfo({})
    console.log(res)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { counterStore: { counter } } = this.props
    return (
      <View className='index'>
        <div onClick={this.increment}>+</div>
        <div onClick={this.decrement}>-</div>
        <div onClick={this.incrementAsync}>Add Async</div>
        <div>{counter}</div>
      </View>
    )
  }
}
