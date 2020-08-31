import {
  request
} from "../../../request/request.js"; //ES6 promise
const time = require('../../../utils/lostandfoundutil.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    static: "https://static.laf.ningdali.com/",
    classify: 0,
    option2: [],
    value3: 0,
    show: false,
    goods: [],
    goods1: [],
    page_num: ""
  },
  /**
   *接口要的参数
   */
  QueryParams: {
    pageIndex: 1,
    pageSize: 10
  },
  /**
   * 我要发布跳转
   */
  toPublish(e) {
    wx.navigateTo({
      url: '/pages/lostandfound/publish/index',
    })
  },
  /**
   * 用户切换选项
   */
  onClick1(e) {
    this.QueryParams.laf_type = 0;
    this.QueryParams.pageIndex = 1;
    this.setData({
      goods: [],
      classify: 0
    })
    this.getGoodslist();
  },
  onClick2(e) {
    this.QueryParams.laf_type = 1;
    this.QueryParams.pageIndex = 1;
    this.setData({
      goods: [],
      classify: 1
    })
    this.getGoodslist();
  },
  change(e) {
    console.log(e)
    this.setData({
      value3: e.currentTarget.dataset.index
    });
    this.QueryParams.laf_ctg_id = e.currentTarget.dataset.index;
    this.setData({
      goods: []
    })
    //this.getGoodslist();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this
    this.getlaf_list();
    this.getGoodslist();
  },
  /**
   * 获取分类列表消息
   */
  async getlaf_list() {
    let that = this
    const res = await request({
      url: "found/category/test",
      method: "post"
    })
    console.log(res)
    if (res.data.msg === "成功") {
      that.setData({
        option2: res.data.data
      })
    } else {
      wx.showToast({
        icon: 'none',
        title: '数据加载失败！',
      })
    }
  },
  /**
   * 获取主页面消息
   */
  async getGoodslist() {
    let that = this
    const res = await request({
      url: "found/lostAndFound",
      data: that.QueryParams,
      method: "GET"
    })
    console.log(res)
    if (res.data.msg === "成功") {
      if (res.data.data.records.length === 0) {
        wx.showToast({
          title: '数据已加载完毕！',
          icon: 'none',
        })
        return;
      }
      this.setData({
        //将原数组和新数组进行拼接
        goods1: res.data.data.records
      })
      let temp = that.data.goods1
      //将相册字符串转成数组
      for (let i = 0; i < temp.length; i++) {
        let a = temp[i].lafImg.split(",")
        that.data.goods1[i].lafImg = a;
        that.data.goods1[i].lafCreateTime = time.formatTimeTwo(that.data.goods1[i].lafCreateTime / 1000, 'Y/M/D')
      }
      this.setData({
        goods: [...this.data.goods, ...this.data.goods1]
      })
    } else {
      wx.showToast({
        icon: "none",
        title: '数据请求失败',
      })
    }
  },
  /**
   * 页面上滑触底事件
   */
  onReachBottom(e) {
    this.QueryParams.pageIndex++;
    this.getGoodslist();
  },
  /**
   * 搜索
  search(e) {
    this.QueryParams1.laf_name = e.detail
    this.searchdetail()
  },
  async searchdetail() {
    let that = this;
    const res = await request({
      url: "/api/mp/laf/select",
      data: that.QueryParams1,
      method: "post"
    })
    console.log(res)
    if (res.data.laf.length === 0) {
      wx.showToast({
        title: '暂无搜索数据！',
        icon: 'none',
      })
    }
    else{
      this.setData({
        goods: []
      })
      this.setData({
        //将原数组和新数组进行拼接
        goods1: res.data.laf,
        page_num: res.data.page_num
      })
      //给照片做处理
      let i = 0
      let j = 0
      for (; i < that.data.goods1.length; i++) {
        that.data.goods1[i].laf_img = JSON.parse(that.data.goods1[i].laf_img)
      }
      for (i = 0; i < that.data.goods1.length; i++) {
        for (j = 0; j < that.data.goods1[i].laf_img.length; j++) {
          that.data.goods1[i].laf_img[j] = that.data.static + that.data.goods1[i].laf_img[j]
        }
      }
      this.setData({
        goods: [...this.data.goods, ...this.data.goods1]
      })
    }
  }
   */
})