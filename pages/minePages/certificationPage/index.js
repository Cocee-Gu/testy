// pages/minePages/certificationPage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 页面跳转
   * index==01：教职工认证跳转
   * index==02：学生认证跳转
   */
  pageNavigation(e) {
    const index = e.currentTarget.dataset.index
    switch(index) {
      case '01':
        console.log("01")
        wx.navigateTo({
          url: '/pages/minePages/teacherCertification/index',
        })
        break;
      case '02':
        console.log("02")
        wx.navigateTo({
          url: '/pages/minePages/studentCertification/index',
        })
        break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})