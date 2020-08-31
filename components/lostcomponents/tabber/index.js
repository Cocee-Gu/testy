const app = getApp()

// component/tabber.js
Component({

  /**
   * 页面的初始数据
   */
  data: {
    flag: 0,
    tabber: [{
      id: 1,
      src: "../../../image/lostandfound/home.png",
      style: "width:60rpx"
    }, {
      id: 2,
        src: "../../../image/lostandfound/my.png",
      style: ""
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  attached: function() {
    // 在组件实例进入页面节点树时执行
    this.setData({
      flag: app.globalData.flag
    })
  },
  methods: {
    /**
     * 跳转
     */
    navto(e) {
      let that = this
      let temp = e.currentTarget.dataset.id
      app.globalData.flag = temp
      that.setData({
        flag: temp
      })
      if (temp === 1) {
        wx.redirectTo({
          url: '/pages/lostIndex/index',
        })
      } else if (temp === 2) {
        wx.redirectTo({
          url: '/pages/infor/infor',
        })
      }
    }
  }
})