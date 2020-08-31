// pages/login/index.js
import {
  request, uploadFile
} from '../../request/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  uploadImg() {
    const that = this
    wx.chooseImage({
      success: function(res) {
        const path = res.tempFilePaths[0]
        res.tempFilePaths.forEach(function(path) {
          that.putImg(path)
        })
      },
    })
  },
  async putImg(imgPath) {
    const result = await request({
      url: "book-market/objectUpload/getTokenAndUrl",
      method: "GET"
    })
    const key = result.data.data.key
    const token = result.data.data.token
    const outFile = await uploadFile({
      imgPath,key,token
    })
    console.log(outFile)
    // 在这儿处理照片，将照片加入到你要放的数组中。
  },










  /**
   * 获取授权
   */
  getAuthorization() {
    const that = this
    wx.getUserInfo({
      success(res) {
        console.log("获取到的用户信息", res)
        that.getInfo(res);
      },
      fail(err) {
        console.log('获取用户信息出错', err)
        that.getAuthorization()
      },
    })
  },

  /**
   * 获取用户的信息
   */
  getUserInfo() {
    const that = this
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          console.log("已经被授权")
          that.getAuthorization()
        } else {
          console.log("未被授权")
          that.getUserInfo()
          // 应该给用户一个提示
        }
      }
    })

  },

  /**
   * 请求数据：租房首页
   */
  async getInfo(res) {
    const requestData = {
      wxNickName: res.userInfo.nickName, // nickname
      wxCountry: res.userInfo.country, // cuntry
      wxProvince: res.userInfo.province, // province
      wxCity: res.userInfo.city, // city
      // wxPhone: "13421", // phone
      // platformNickName: "123", // 平台昵称
      wxSex: res.userInfo.gender, // sex
      // createTime: "1231", // 
      // updateTime: "123",
      wxHeadImg: res.userInfo.avatarUrl, // 头像
      // backgroundImg: "312" // 个人中心背景图
    }
    console.log("本次请求数据", requestData)
    const result = await request({
      url: "common/wechatUser/addUser",
      method: "POST",
      data: requestData
    })
    console.log(result)
    wx.setStorageSync("token", result.data.data)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})