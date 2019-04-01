import Taro from '@tarojs/taro'

export async function getStorage(key) {
    const res = await Taro.getStorage({ key })
    return res.data
  }
  
export async function setStorage(key,value) {
    await Taro.setStorage(key,value)
}

export async function removeStorage(key) {
    await Taro.removeStorage(key,value)
}