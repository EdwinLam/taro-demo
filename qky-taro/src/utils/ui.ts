import Taro from '@tarojs/taro'

export default class UI{
    /**
     * 显示消息提示框
     */
    public static showToast(title:string,icon:string='none') {
        Taro.showToast({
            title,
            icon
          })
    }
}