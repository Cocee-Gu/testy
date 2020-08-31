// pages/timetablePages/importCourse/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    passwordHidden: true, // 密码是否隐藏

    index: [0, 0], // 学期被选择的索引
    multiArray: [['2018-2019学年', '2019-2020学年', '2020-2021学年'], ['第一学期', '第二学期']], // 学期选项
  },

  /**
   * 查看密码
   */
  hiddenPassword() {
    this.setData({
      passwordHidden : !this.data.passwordHidden
    })
  },

  /**
   * 学期选择
   */
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
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