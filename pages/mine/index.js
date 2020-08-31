// pages/mine/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 页面跳转
   * index==01：编辑个人资料
   * index==02：我的收藏
   * index==03：我的发布
   * index==04：我的消息
   * index==05：实名认证
   */
  pageNavigation(e) {
    const index = e.currentTarget.dataset.index
    switch(index) {
      case '01':
        wx.navigateTo({
          url: '/pages/minePages/personalData/index',
        })
        break;
      case '02':
        wx.navigateTo({
          url: '/pages/minePages/mine-collection/index',
        })
        break;
      case '03':
        wx.navigateTo({
          url: '/pages/minePages/mine-send/index',
        })
        break;
      case '04':
        wx.navigateTo({
          url: '',
        })
        break;
      case '05':
        wx.navigateTo({
          url: '/pages/minePages/certificationPage/index',
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
    this.getTabBar().setData({
      tabBar: 3,
    });
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