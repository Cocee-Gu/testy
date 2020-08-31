// pages/SHB/index/index.js
var template = require("../tabbar_template/index.js");
import {
	request
} from '../../../request/request.js'
Page({
	/**
	 * 页面的初始数据
	 */
	getServerData() {
		const res = request({
		  url: "book-market/userBook/",
		  data: {isbn:"wqeiniq"},
		  method: "get"
		})
	},
	data: {
		// 首页轮播图
		carouselIndex: 0,
		swiper_index: [{
				img: "/image/secondHandBook_image/swiper01.png"
			},
			{
				img: "/image/secondHandBook_image/swiper02.png"
			},
			{
				img: "/image/secondHandBook_image/swiper03.png"
			},
		],
		// 判断当前是买书还是借阅的页面 true 买书 false 借阅
		isBuy: true,
		// 买书页面数据
		booksArr: [{
				img: "/image/secondHandBook_image/book01.png",
				name: "百年孤独",
				author: "加西亚马尔克斯",
				inf: "仅翻阅，无笔记，无损坏",
				price: 10,
				ori_price: 40,
				new: "九成新",
			},
			{
				img: "/image/secondHandBook_image/book02.png",
				name: "百年孤独",
				author: "加西亚马尔克斯",
				inf: "仅翻阅，无笔记，无损坏",
				price: 10,
				ori_price: 40,
				new: "九成新",
			},
			{
				img: "/image/secondHandBook_image/book03.png",
				name: "百年孤独",
				author: "加西亚马尔克斯",
				inf: "仅翻阅，无笔记，无损坏",
				price: 10,
				ori_price: 40,
				new: "九成新",
			},
			{
				img: "/image/secondHandBook_image/book01.png",
				name: "百年孤独",
				author: "加西亚马尔克斯",
				inf: "仅翻阅，无笔记，无损坏",
				price: 10,
				ori_price: 40,
				new: "九成新",
			},
			{
				img: "/image/secondHandBook_image/book02.png",
				name: "百年孤独",
				author: "加西亚马尔克斯",
				inf: "仅翻阅，无笔记，无损坏",
				price: 10,
				ori_price: 40,
				new: "九成新",
			},
			{
				img: "/image/secondHandBook_image/book03.png",
				name: "百年孤独",
				author: "加西亚马尔克斯",
				inf: "仅翻阅，无笔记，无损坏",
				price: 10,
				ori_price: 40,
				new: "九成新",
			},
		],
		// 底部输入部分
		isShow_hand: false,
		isShow_isn_error: false,
		isShow_by_isn: false,
		//是否显示蒙层
		isShow_back: false,

		iSN: null, // ISN 码
	},

	/**
	 * 更新输入的ISN码
	 */
	updateISN(e) {
		const value = e.detail.value
		this.setData({
			iSN: value
		})
	},

	/**
	 * 通过ISN码查找书籍信息
	 */
	searchISN() {
		if (this.data.iSN.length != 13) {
			return wx.showToast({
				title: '请重新确认ISN码！',
				icon: 'none'
			})
		}
		wx.request({
			url: 'https://book.feelyou.top/isbn/' + this.data.iSN,
			method: 'GET',
			dataType: 'json',
			responseType: 'text',
			success: function(res) {
				console.log(res)
				if (res.data.title == undefined) {
					console.log("请重新确认ISN码！")
				} else {
					const title = res.data.title == undefined ? '暂无信息' : res.data.title;
					const auther = res.data.book_info.作者 == undefined ? '暂无信息' : res.data.book_info.作者;
					const press = res.data.book_info.出版社 == undefined ? '暂无信息' : res.data.book_info.出版社;
					const date = res.data.book_info.出版年 == undefined ? '暂无信息' : res.data.book_info.出版年;
					const pricing = res.data.book_info.定价 == undefined ? '暂无信息' : res.data.book_info.定价;
					const coverUrl = res.data.cover_url == undefined ? '暂无信息' : res.data.cover_url;
					const bookInfo = {
						title,
						auther,
						press,
						date,
						pricing,
						coverUrl
					}
					wx.setStorageSync("bookInfo", bookInfo)
					wx.navigateTo({
						url: '/pages/secondHandBook/publishBook/index?flag=ISN',
					})
				}

			},
			fail: function(res) {},
			complete: function(res) {},
		})
	},

	/**
	 * 搜索图书
	 */
	async searchBook(e) {
		const value = e.detail.value
		const requestData = {
			book_name: value
		}
		const result = await request({
			url: "book-market/searchBook",
			method: "GET",
			data: requestData
		})
		console.log(result)
	},


	/**
	 * 买书与借阅的切换
	 */
	changeChoose: function(e) {
		console.log(e.currentTarget.dataset.index);
		if (
			(e.currentTarget.dataset.index === "1" && this.data.isBuy === true) ||
			(e.currentTarget.dataset.index === "0" && this.data.isBuy === false)
		) {
			this.setData({
				isBuy: !this.data.isBuy,
			});
		}
	},
	/**
	 * 切换轮播图时触发
	 * 轮播图切换，获取当前轮播图的索引
	 */
	change: function(e) {
		this.setData({
			carouselIndex: e.detail.current,
		});
	},

	/**
	 * 手动输入触发
	 */
	input_hand: function() {
		this.setData({
			isShow_hand: !this.data.isShow_hand,
			isShow_isn_error: false,
			isShow_by_isn: false,
			isShow_back: !this.data.isShow_hand,
		});
		console.log("ccc");
		console.log(this.data.isShow_hand);
	},


	/**
	 * ISN码破损触发
	 */
	isn_error: function() {
		wx.navigateTo({
			url: '/pages/secondHandBook/publishBook/index?flag=NOISN',
		})
		// this.setData({
		//   isShow_hand: false,
		//   isShow_isn_error: !this.data.isShow_isn_error,
		//   isShow_by_isn: false,
		// });
	},


	/**
	 * 输入ISN码触发
	 */
	by_isn: function() {
		this.setData({
			isShow_hand: false,
			isShow_isn_error: false,
			isShow_by_isn: !this.data.isShow_by_isn,
		});
	},


	/**
	 * 生命周期函数--监听页面加载
	 */
	//tabBar部分
	onLoad: function(options) {
		template.tabbar("tabBar", 0, this);
	},

	/**
	 * 点击蒙层关闭
	 */
	quit: function() {
		this.setData({
			isShow_hand: false,
			isShow_isn_error: false,
			isShow_by_isn: false,
			isShow_back: false,
		});
		console.log("quit");
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {
		this.getServerData()
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {},
});
