// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tabBar: 0,
    urls: [
      "/pages/index/index",
      "/pages/forum/index",
      "/pages/timetable/index",
      "/pages/mine/index",
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTap(e) {
      const _this = this
      const index = parseInt(e.currentTarget.dataset.index)
      _this.setData({
        tabBar: index
      })
      wx.switchTab({
        url: _this.data.urls[index],
      })
    }
  }
})
