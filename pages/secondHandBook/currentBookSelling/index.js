// pages/secondHandBook/currentBookBorrowing/index.js
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    //排序方式(0为按价格排序，1为按照新旧程度排序)
    sortBy: true,

    // 在售图书信息
    books_borrow: [
      {
        img: "/image/secondHandBook_image/book01.png",
        name: "百年孤独",
        author: "加西亚·马尔克斯",
        priceNow: 12,
        priceOnce: 48,
        newDegree: "七成新",
      },
      {
        img: "/image/secondHandBook_image/book02.png",
        name: "百年孤独",
        author: "加西亚·马尔克斯",
        priceNow: 12,
        priceOnce: 48,
        newDegree: "六成新",
      },
      {
        img: "/image/secondHandBook_image/book03.png",
        name: "百年孤独",
        author: "加西亚·马尔克斯",
        priceNow: 12,
        priceOnce: 48,
        newDegree: "九成新",
      },
      {
        img: "/image/secondHandBook_image/book01.png",
        name: "百年孤独",
        author: "加西亚·马尔克斯",
        priceNow: 12,
        priceOnce: 48,
        newDegree: "九成新",
      },
      {
        img: "/image/secondHandBook_image/book02.png",
        name: "百年孤独",
        author: "加西亚·马尔克斯",
        priceNow: 12,
        priceOnce: 48,
        newDegree: "九成新",
      },
      {
        img: "/image/secondHandBook_image/book03.png",
        name: "百年孤独",
        author: "加西亚·马尔克斯",
        priceNow: 12,
        priceOnce: 48,
        newDegree: "九成新",
      },
    ],
  },
  /**
   *
   * 更换排序方式的方法
   */
  changeSort: function (e) {
    if (e.target.dataset.choose == 1) {
      this.setData({
        sortBy: false,
      });
    } else {
      this.setData({
        sortBy: true,
      });
    }

    console.log(this.data.sortBy);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.request({
      url: `${app.globalData.baseUrl}book-market/userBook/sell`,
      method: 'GET',
      data: {
        pageIndex: 1,
        pageSize: 10
      },
      success: (res) => {
        console.log(res)
        this.setData({
          books_borrow: res.data.data
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { },
});
