
import {
	request
} from '../../../request/request.js'
Page({
	getServerData() {
		const res = request({
		  url: "book-market/book/faction/"+(!this.data.currentData?'sell':'borrow')+'/openId/'+wx.getStorageSync("openId"),
		  data: {
			  'pageIndex':1,
			  'pageSize':100
		  },
		  method: "get"
		})
		res.then((res1)=>{
			console.log(res1)
			if (this.data.currentData) {
				this.setData({
					bookArr:res1.data.data
				})
			}else{
				this.setData({
					booksArr:res1.data.data
				})
			}
		})
	},
  /**
   * 页面的初始数据
   */
  data: {
      currentData : 0,
      booksArr: [
        {
          img: "/image/secondHandBook_image/book01.png",
          name: "百年孤独",
          author: "版次 作者",
          price:"价格12￥",
          new: "九成新",
        },
        {
          img: "/image/secondHandBook_image/book02.png",
          name: "大学物理",
          author: "版次 作者",
          price: "价格12￥",
          new: "九成新",
        },
        {
          img: "/image/secondHandBook_image/book03.png",
          name: "百年孤独",
          author: "版次 作者",
          price: "价格12￥",
          new: "九成新",
        },
        {
          img: "/image/secondHandBook_image/book01.png",
          name: "高等数学",
          author: "版次 作者",
          price: "价格12￥",
          new: "九成新",
        },
        {
          img: "/image/secondHandBook_image/book02.png",
          name: "大学英语",
          author: "版次 作者",
          price: "价格12￥",
          new: "九成新",
        },
      ],
      bookArr: [
        {
          img: "/image/secondHandBook_image/book01.png",
          name: "百年孤独",
          author: "版次 作者",
          price:"价格12￥/周",
        },
        {
          img: "/image/secondHandBook_image/book02.png",
          name: "大学物理",
          author: "版次 作者",
          price:"价格12￥/周",
        },
        {
          img: "/image/secondHandBook_image/book03.png",
          name: "百年孤独",
          author: "版次 作者",
          price: "价格12￥/周",
        },
        {
          img: "/image/secondHandBook_image/book01.png",
          name: "高等数学",
          author: "版次 作者",
          price: "价格12￥/周",
        },
        {
          img: "/image/secondHandBook_image/book02.png",
          name: "大学英语",
          author: "版次 作者",
          price: "价格12￥/周",
        },
      ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  this.getServerData()
  },
  //获取当前滑块的index
  bindchange:function(e){
    const that  = this;
    that.setData({
      currentData: e.detail.current
    })
	this.getServerData()
  },
  //点击切换，滑块index赋值
  checkCurrent:function(e){
    const that = this;
 
    if (that.data.currentData === e.target.dataset.current){
        return false;
    }else{
 
      that.setData({
        currentData: e.target.dataset.current
      })
    }
  }
})