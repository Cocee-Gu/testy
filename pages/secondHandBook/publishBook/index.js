// pages/secondHandBook/publishBook/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oldAndNewItems: [
      "九成新", "八成新", "七成新", "六成新", "五成新", "四成新", "三成新", "二成新"
    ], // 图书的新旧程度
    bookOldAndNewIndex: 0, // 图书新旧程度的选择
    classifyItems: ["计算机类", "服装类", "机电类"], // 图书的分类
    classifyIndex: 0, // 图书分类的选择

    isnOrNoisn: null, // 是否显示图书详细信息的接口
    bookInfo: null, // 通过ISN码过来的图书的详细信息
  },

  /**
   * 图书的新旧程度选择
   */
  oldAndNewPickerChange(e) {
    const index = e.detail.value
    this.setData({
      bookOldAndNewIndex: index
    })
  },

  /**
   * 图书分类的选择
   */
  classifyPickerChange(e) {
    const index = e.detail.value
    this.setData({
      classifyIndex: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    switch(options.flag) {
      case 'ISN':
        console.log("从ISN来的")
        const bookInfo = wx.getStorageSync("bookInfo")
        wx.removeStorageSync("bookInfo")
        this.setData({
          isnOrNoisn: true,
          bookInfo
        })

        break;
      case 'NOISN':
        console.log("从ISN破损来的")
        isnOrNoisn: false
        break;
    }
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