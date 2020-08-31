// pages/timetablePages/addCourse/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course_name: 'fas',
    course_teacher: 'adf',
    course_room: '4-11',
    course_weeks: '1-1',
    course_times: '1,2',
    course_days: '星期一',

    index: 0,
    array: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],

    multiIndex1: [0, 0],
    multiArray1: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]],

    multiIndex: [0, 0],
    multiArray: [['第1节', '第2节', '第3节', '第4节', '第5节', '第6节', '第7节', '第8节', '第9节', '第10节', '第11节'], ['到第2节', '到第3节', '到第4节', '到第5节', '到第6节', '到第7节', '到第8节', '到第9节', '到第10节', '到第11节']],
  },

  // 数据绑定
  updata(e) {
    // console.log(e)
    // console.log(e.target.dataset.index)
    // console.log(e.detail.value)
    const flag = e.target.dataset.index
    const value = e.detail.value
    switch (flag) {
      case '01':
        this.setData({
          course_name: value
        })
        break;
      case '02':
        this.setData({
          course_teacher: value
        })
        break;
      case '03':
        this.setData({
          course_room: value
        })
        break;
    }
  },

  // 周数选择
  bindMultiPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex1: e.detail.value,
      course_weeks: (e.detail.value[0] + 1) + "-" + (e.detail.value[0] + 1),
    })
  },

  // 节数选择
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value,
      course_times: (e.detail.value[0] + 1) + "," + (e.detail.value[0] + 2),
    })
  },

  // 添加课程
  ensure() {
    const _this = this
    wx.request({
      url: 'http://127.0.0.1:8000/manualInfoTimetable/',
      data: {
        "course_name": _this.data.course_name,
        "course_teacher": _this.data.course_teacher,
        "course_room": _this.data.course_room,
        "course_times": _this.data.course_times,
        "course_weeks": _this.data.course_weeks,
        "course_days": _this.data.course_days
      },
      method: 'POST',
      header: {
        'content-type': 'application/json', // 默认值
        'cookie': wx.getStorageSync("sessionid")
      },
      success(res) {
        console.log(res.data)
        // 如果成功，跳转到主页面
        wx.navigateTo({
          url: '/pages/home/home',
        })
      }
    })
    wx.navigateBack({
      delta: 1
    })
  },

  // 周几选择
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      course_days: this.data.array[this.data.index]
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