//index.js
//获取应用实例
const app = getApp(); 
import { request, uploadFile } from "../../request/request.js";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图
    carouselArr: [
      "https://i2.hdslb.com/bfs/archive/0e4e8e334df8a75dd45b37e5b5c34d4e8ed393ce.jpg",
      "https://i1.hdslb.com/bfs/archive/a1e489be5d9cdb28a453b02c305177102cd29c72.jpg",
      "https://i0.hdslb.com/bfs/archive/0febe569d0a2f11abdcd6c2187783ddc76d56e00.jpg",
      "https://i2.hdslb.com/bfs/archive/9e559c6d0bd9c81e9e126be123f20b9e3283438f.jpg",
    ],
    // 轮播图当前中间的图片的索引
    carouselIndex: 0,
    // 工具栏数据
    toolsArr: [
      { image: "", name: "二手书城", url: "../secondHandBook/index/index" },
      { image: "", name: "失物招领", url: "'../lostandfound/lostIndex/index'" },
      { image: "", name: "报名助手", url: "" },
      { image: "", name: "待定", url: "" },
      { image: "", name: "码上报名", url: "" },
    ],
    // 任务栏数据
    missionArr: {
      image: "../../image/tool-kaixueHelper.png",
      name: "报名助手",
      mission: ["缴纳学费", "学院签到"],
    },
    //判断课程表日程表是否为空
    isCurriculum: false,
    isSchedule: false,
    //是否显示  课程表   日程
    showCurriculum: true,
    showSchedule: true,

    //  课程信息
    curriculumArr: {
      time: "星期三/第一周",
      classInf: [
        { part1: "1", part2: "2", name: "网站设计与开发", add: "c-374" },
        { part1: "3", part2: "4", name: "多媒体程序设计", add: "c-366" },
        { part1: "5", part2: "6", name: "多媒体程序设计", add: "c-366" },
        { part1: "7", part2: "8", name: "多媒体程序设计", add: "c-366" },
      ],
    },

    // 日程信息
    scheduleArr: [
      {
        date: "2020/07/29",
        week: "周四",
        inf: "聚会聚会聚会聚会聚会聚会聚会聚会聚会聚会",
        add: "钟楼",
        time: "20:00",
        when: "30日",
      },
      {
        date: "2020/07/29",
        week: "周四",
        inf: "聚会",
        add: "钟楼",
        time: "20:00",
        when: "30日",
      },
      {
        date: "2020/07/30",
        week: "周五",
        inf: "写代码",
        add: "在家里",
        time: "7:00",
        when: "30日",
      },
    ],
  },

  /**
   * 实现折叠功能的方法
   * index=01：课程表
   * index=02：日程
   */
  hideCurriculum: function (e) {
    const index = e.currentTarget.dataset.choose
    if (index === "01") {
      this.setData({
        showCurriculum: !this.data.showCurriculum,
      });
    } else if(index == "02") {
      this.setData({
        showSchedule: !this.data.showSchedule,
      });
    }
  },

  /**
   * 点击工具栏中的内容触发
   * index==0：二手书城
   * index==1：失物招领
   * index==2：报名助手
   */
  chooseTool: function (e) {
    const index = e.currentTarget.dataset.index
    switch(index) {
      case 0:
        wx.navigateTo({
          url: '/pages/secondHandBook/index/index',
        })
      case 1:
        wx.navigateTo({
          url: '/pages/lostandfound/lostIndex/index',
        })
        break;
    }
  },

  /**
   * 判断课表和日程表是否为空的函数
   * 
   */
  isCurriculum: function () {
    if (this.data.curriculumArr.classInf.length === 0) {
      this.setData({
        isCurriculum: true,
      });
    }
    if (this.data.scheduleArr.length === 0) {
      this.setData({
        isSchedule: true,
      });
    }
  },

  /**
   * 切换轮播图时触发
   * 返回当前轮播图中间的图片的索引
   */
  change: function (e) {
    this.setData({
      carouselIndex: e.detail.current,
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
     * 判断课表是否为空的函数，如果为空显示今天没有课程的内容
     */
    this.isCurriculum();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getTabBar().setData({
      tabBar: 0,
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
