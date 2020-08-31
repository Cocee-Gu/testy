// pages/SHB/classification/index.js
var template = require("../tabbar_template/index.js");
import {
	request
} from '../../../request/request.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 书籍分类信息
    classArr: [
      "大学物理",
      "数学书籍",
      "英语考研",
      "专业书籍",
      "大学英语",
      "选修课本",
      "专业书籍",
      "大学物理",
    ],
    // 当前选中的书籍分类
    chooseClass: 0,

    // 书籍信息
    booksArr: [
      {
        img: "/image/secondHandBook_image/book01.png",
        name: "大学物理1",
        publish: "出版社",
        lowPrice: "8",
        sell: 12,
        borrow: 5,
      },
      {
        img: "/image/secondHandBook_image/book02.png",
        name: "大学物理2",
        publish: "出版社",
        lowPrice: "8",
        sell: 12,
        borrow: 5,
      },
      {
        img: "/image/secondHandBook_image/book03.png",
        name: "大学物理3",
        publish: "出版社",
        lowPrice: "8",
        sell: 12,
        borrow: 5,
      },
      {
        img: "/image/secondHandBook_image/book01.png",
        name: "大学物理4",
        publish: "出版社",
        lowPrice: "8",
        sell: 12,
        borrow: 5,
      },
      {
        img: "/image/secondHandBook_image/book02.png",
        name: "大学物理5",
        publish: "出版社",
        lowPrice: "8",
        sell: 12,
        borrow: 5,
      },
      {
        img: "/image/secondHandBook_image/book02.png",
        name: "大学物理6",
        publish: "出版社",
        lowPrice: "8",
        sell: 12,
        borrow: 5,
      },
      {
        img: "/image/secondHandBook_image/book02.png",
        name: "大学物理7",
        publish: "出版社",
        lowPrice: "8",
        sell: 12,
        borrow: 5,
      },
    ],
    // 底部输入部分
    isShow: false,
  },
	// 请求
	getServerData(){
		
		const res = request({
		  url: "book-market/book/"+this.data.classArr[this.data.chooseClass],
		  data: {},
		  method: "get"
		})
		res.then((res1)=>{
			console.log(this.data.booksArr)
			this.setData({
				booksArr:res1.data.data
			})
			console.log(this.data.booksArr)
		},)
	},
  /**
   * 点击顶部切换分类的函数
   */
  changeClass: function (e) {
    this.setData({
      chooseClass: e.target.dataset.index,
    });
	this.getServerData()
  },

  /**
   * 生命周期函数--监听页面加载
   */
   //tabBar部分
  onLoad: function (options) {
    template.tabbar("tabBar", 1, this)
	this.getServerData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

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
