//app.js
import {
  request
} from 'request/request.js'
App({
  onLaunch: function() {

    // 胶囊信息
    const {
      top,
      height
    } = wx.getMenuButtonBoundingClientRect()
    // 设备信息
    const {
      statusBarHeight,
      platform
    } = wx.getSystemInfoSync()
    // 状态栏高度
    wx.setStorageSync('statusBarHeight', statusBarHeight)
    // 胶囊按钮高度 一般是32 如果获取不到就使用32
    wx.setStorageSync('menuButtonHeight', height ? height : 32)
    // 判断胶囊按钮信息是否成功获取
    if (top && top !== 0 && height && height !== 0) {
      const navigationBarHeight = (top - statusBarHeight) * 2 + height
      // 导航栏高度
      wx.setStorageSync('navigationBarHeight', navigationBarHeight)
    } else {
      wx.setStorageSync('navigationBarHeight', platform === 'android' ? 48 : 40)
    }

    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录 
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        this.login(res.code)
        console.log(res)
      }
    })

  
  },

  /**
   * 登录接口
   * code:login返回的code
   */
  login(code) {
    console.log(code)
    wx.request({
      url: "http://2087p773d1.wicp.vip/common/wechat/login?wechatCode=" + code,
      method: "POST",
      data: {
      },
      dataType: 'json',
      header: {
        "accept": "*/*",
        "conent-type": "application/json"
      },
      success(result) {
        // console.log(result)
        if( result.statusCode == 200) {
          const token = result.data.data.token
          wx.setStorageSync("token", token)
          if (result.data.code == 100) {
            console.log("你是一个新用户")
            wx.redirectTo({
              url: '/pages/login/index',
            })
          }else {
            console.log("登录成功！")
            wx.setStorageSync("openId", result.data.data.openId)
          }
        }
      },
      fail(err) {
        console.log(err)
      }
    })


    // const result = await request({
    //   url: "common/wechat/login?wechatCode=" + code,
    //   method: "POST",
    // })
    // if (result.statusCode == 200) {
    //   const token = result.data.data.token
    //   wx.setStorageSync("token", token)
    //   console.err(reseult)
    // } else {
    //   console.err(reseult)
    // }
  },

 

  globalData: {
    userInfo: null, // 用户信息
    baseUrl: "http://2087p773d1.wicp.vip/", // 请求根地址
    hidden: true,
  }
})