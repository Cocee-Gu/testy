// pages/timetable/index.js
Page({

  /** 
   * 页面的初始数据
   */
  data: {
    // 状态栏高度
    statusBarHeight: wx.getStorageSync('statusBarHeight') + 'px',
    // 导航栏高度
    navigationBarHeight: wx.getStorageSync('navigationBarHeight') + 3 + 'px',
    // 胶囊按钮高度
    menuButtonHeight: wx.getStorageSync('menuButtonHeight') + 'px',
    // 导航栏和状态栏高度
    navigationBarAndStatusBarHeight:
      wx.getStorageSync('statusBarHeight') +
      wx.getStorageSync('navigationBarHeight') + 3 +
      'px',

    isCourseOrSchedule: true, // 课程/日程页面的切换
    isHidden: false, // 设置是否隐藏的标志
    x: 0, // 开始滑动x轴
    y: 0, // 开始滑动y轴
    isShowScheduleToast: false, // 设置添加日程的是否显示


    // ############### 课程部分的数据 #######
    bg: wx.getStorageSync('classBcgImg'), // 背景图片
    week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    time: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // 每日课程节数
    colorArrays: ["rgba(254,241,241,.67)", "rgba(176, 234, 197, 0.36)", "rgba(199, 225, 255, 0.4)", "rgba(254, 223, 233, 0.36)", "rgba(196, 86, 85,.14)"], // 课程背景颜色
    class: [
      {
        day:1,
        course_time: 2,
        course_len:2,
        course_name:"体育",
        course_room:"D1222"
      },
      {
        day: 2,
        course_time: 1,
        course_len: 2,
        course_name: "体育",
        course_room: "D1222"
      },
      {
        day: 2,
        course_time: 5,
        course_len: 2,
        course_name: "体育",
        course_room: "D1222体育afsffasdfas体育afsffasdfas"
      },
      {
        day: 3,
        course_time: 4,
        course_len: 1,
        course_name: "体育afsffasdfas",
        course_room: "D1222"
      },
      {
        day: 4,
        course_time: 4,
        course_len: 4,
        course_name: "体育",
        course_room: "D1222"
      },
      {
        day: 5,
        course_time: 7,
        course_len: 2,
        course_name: "体育",
        course_room: "D1222"
      }
    ], // 课程详情

    // ############### 日程部分的数据 #######
    schedule: [
      {
        week_num: '周四',
        sche_day_num: 12,
        sche_name: '聚会',
        sche_detail_time: '20:00',
        sche_address: '钟楼',
      },
      {
        week_num: '周四',
        sche_day_num: 12,
        sche_name: '聚会',
        sche_detail_time: '20:00',
        sche_address: '钟楼',
      },
      {
        week_num: '周四',
        sche_day_num: 12,
        sche_name: '聚会',
        sche_detail_time: '20:00',
        sche_address: '钟楼',
      },
      {
        week_num: '周四',
        sche_day_num: 12,
        sche_name: '聚会',
        sche_detail_time: '20:00',
        sche_address: '钟楼',
      },
      {
        week_num: '周四',
        sche_day_num: 12,
        sche_name: '聚会',
        sche_detail_time: '20:00',
        sche_address: '钟楼',
      },
      {
        week_num: '周四',
        sche_day_num: 12,
        sche_name: '聚会',
        sche_detail_time: '20:00',
        sche_address: '钟楼',
      },
      {
        week_num: '周四',
        sche_day_num: 12,
        sche_name: '聚会',
        sche_detail_time: '20:00',
        sche_address: '钟楼',
      },
      {
        week_num: '周四',
        sche_day_num: 12,
        sche_name: '聚会',
        sche_detail_time: '20:00',
        sche_address: '钟楼',
      },
      {
        week_num: '周四',
        sche_day_num: 12,
        sche_name: '聚会',
        sche_detail_time: '20:00',
        sche_address: '钟楼',
      },
      {
        week_num: '周四',
        sche_day_num: 12,
        sche_name: '聚会',
        sche_detail_time: '20:00',
        sche_address: '钟楼',
      }
    ], // 日程详情

    // ############### 课程设置部分的数据 #######
    weekArrays: ['第一周', '第二周', '第三周', '第四周', '第五周', '第六周', '第七周', '第八周', '第九周', '第十周', '第十一周', '第十二周', '第十三周', '第十四周', '第十五周', '第十六周', '第十七周', '第十八周', '第十九周', '第二十周'], // 当前周数
    dayArrays: ['周一', '周日'], // 每周起始日
    weekIndex: 1, // 当前周数的索引
    dayIndex: 0, // 每周起始日的索引

  },


  /**
   * 添加日程点击了确认添加
   */
  dealScheduleToastData(e) {
    const status = e.currentTarget.dataset.status
    if (status == 'true') {
      // console.log("处理添加日程的方法")
    } else if (status == 'false') {
      // console.log("处理取消的方法")
    }
    this.setData({
      isShowScheduleToast: false
    })
  },

  /**
   * 打开添加日程弹出框
   */
  openScheduleToast() {
    this.setData({
      isShowScheduleToast: true
    })
  },

  /**
   * 个性背景
   */
  setTimetableBg() {
    wx.showActionSheet({
      itemList: ['拍摄', '从相册选择'],
      itemColor: '#273d49',
      success(res) {
        let sourceType = null
        if(res.tapIndex == 0) {
          sourceType = ['camera']
        } else if (res.tapIndex == 1) {
          sourceType = ['album']
        }
        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: sourceType,
          success(res) {
            // tempFilePath可以作为img标签的src属性显示图片
            const tempFilePaths = res.tempFilePaths
          }
        })
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },

  /**
   * 开始滑动
   */
  touchStart(e) {
    this.setData({
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    });
  },

  /**
   * 滑动结束
   */
  touchEnd(e) {
    let x = e.changedTouches[0].clientX;
    let y = e.changedTouches[0].clientY;
    if (this.data.x - x > 50 && Math.abs(this.data.y - y) < 50) {  
      // console.log("right")
      this.setData({
        isHidden:false
      })
    } else if (this.data._x - x < -50 && Math.abs(this.data._y - y) < 50) {   
      // console.log("left")
    }
  },

  /**
   * 页面跳转
   */
  pageNavigation(e) {
    /**
     * index==01：手动添加课程
     * index==02：教务系统导入课程
     * index==03：更多设置
     * index==04：周内每天课程的详情
     * 
     */
    const index = e.currentTarget.dataset.index
    switch(index) {
      case '01':
        console.log("手动添加课程")
        wx.navigateTo({
          url: '/pages/timetablePages/addCourse/index',
        })
        break;
      case '02':
        console.log("教务系统导入课程")
        wx.navigateTo({
          url: '/pages/timetablePages/importCourse/index',
        })
        break;
      case '03':
        console.log("更多设置")
        break;
      case '04':
        console.log("周内课程")
        wx.navigateTo({
          url: '/pages/timetablePages/oneDayCourseDetail/index',
        })
        break;
    }
  },

  /**
   * picker标签确定数据的处理
   */
  bindPickerChange(e) {
    /**
     * index=01：当前周数
     * index=02：每周起始日
     */
    const index = e.currentTarget.dataset.index;
    if(index == "01") {
      // console.log("当前周数")
      this.dealWeekArrays(e)
    } else if (index == "02") {
      // console.log("每周起始日")
      this.dealDayArrays(e)
    }
  },

  /**
   * 处理当前周数的设置
   */
  dealWeekArrays(e) {
    const value = e.detail.value // 当前选项的索引，索引从0开始
    this.setData({
      weekIndex: value
    })
  },

  /**
   * 处理每周起始日的设置
   */
  dealDayArrays(e) {
    const value = e.detail.value // 当前选项的索引，索引从0开始
    this.setData({
      dayIndex: value
    })
  },

  /**
   * 点击【第一周】进入设置
   */
  mainSetting() {
    this.setData({
      isHidden: true
    })
  },

  /**
   * 课程和日程的切换
   */
  switchCourseOrSchedule(e) {
    if (e.currentTarget.dataset.index == '0') {
      this.setData({
        isCourseOrSchedule: true
      })
    } else if (e.currentTarget.dataset.index == '1') {
      this.setData({
        isCourseOrSchedule: false
      })
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
      tabBar: 2,
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