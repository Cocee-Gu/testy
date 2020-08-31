// pages/mine-collection/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        value:"论坛帖子",
        isActive:true
      },
      {
        id:1,
        value:"二手书",
        isActive:false
      },
      {
        id:2,
        value:"失物招领",
        isActive:false
      }
    ],
    tabstwo:[
      {
        id:0,
        value:"转卖",
        isActive:true
      },
      {
        id:1,
        value:"借阅",
        isActive:false
      }
    ],
    listOne:[
      {
        id:0,
        url:"/image/mine-tx.png",
        name:"林芬芬",
        date:"8月10号",
        content:"希望能再长高十公分!"
      },
      {
        id:1,
        url:"/image/mine-tx.png",
        name:"林芬芬",
        date:"8月10号",
        content:"希望能再长高十公分!"
      },
      {
        id:2,
        url:"/image/mine-tx.png",
        name:"林芬芬",
        date:"8月10号",
        content:"希望能再长高十公分!"
      }

    ],
    listtwo_a:[
      {
        id:0,
        url:"/image/mine-tx.png",
        name:"高等数学A",
        come:"出版社",
        price:12,
        new:"九成新"
      },
      {
        id:1,
        url:"/image/mine-tx.png",
        name:"高等数学A",
        come:"出版社",
        price:12,
        new:"九成新"
      },
      {
        id:2,
        url:"/image/mine-tx.png",
        name:"高等数学A",
        come:"出版社",
        price:12,
        new:"九成新"
      },
      {
        id:3,
        url:"/image/mine-tx.png",
        name:"高等数学A",
        come:"出版社",
        price:12,
        new:"九成新"
      }
    ],
    listtwo_b:[
      {
        id:0,
        url:"/image/tool-kaixueHelper.png",
        name:"高等数学A",
        come:"出版社",
        price:12,
        new:"九成新"
      },
      {
        id:1,
        url:"/image/tool-kaixueHelper.png",
        name:"高等数学A",
        come:"出版社",
        price:12,
        new:"九成新"
      },
      {
        id:2,
        url:"/image/tool-kaixueHelper.png",
        name:"高等数学A",
        come:"出版社",
        price:12,
        new:"九成新"
      },
      {
        id:3,
        url:"/image/mine-tx.png",
        name:"高等数学A",
        come:"出版社",
        price:12,
        new:"九成新"
      }
    ],
    listThree:[
      {
        id:0,
        name:"黑色自动雨伞",
        date:"2020/08/12",
        url:"/image/mine-tx.png",
        miss:"丢失"
      },
      {
        id:1,
        name:"彩色充电宝",
        date:"2020/08/12",
        url:"/image/mine-tx.png",
        miss:"捡拾"
      },
      {
        id:2,
        name:"黑色自动雨伞",
        date:"2020/08/12",
        url:"/image/mine-tx.png",
        miss:"丢失"
      }
    ]

  },

  handleTitle(e){
   
    const {index}=e.detail;
    let {tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs,
    })
  },

  handleTitletwo(e){
    const {index}=e.detail;
    let {tabstwo}=this.data;
    tabstwo.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabstwo,
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