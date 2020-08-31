import {
  request,
  uploadFile
} from "../../../request/request.js"; //ES6 promise//ES7 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList: [],
    option0: [{
        title: '失主姓名',
        name: "stu_name",
        text: "请填入失主姓名",
        type: "text"
      },
      {
        title: '失主学号',
        name: "stu_id",
        text: "请填入失主学号",
        type: "number"
      },
      {
        title: '失主学院',
        name: "college",
        text: "请填入失主学院",
        type: "text"
      },
      {
        title: '丢失/捡到地点',
        name: "laf_addr",
        text: "请填入丢失/捡到地点",
        type: "text"
      },
    ],
    option1: [{
        text: '丢失',
        value: 0
      },
      {
        text: '拾到',
        value: 1
      }
    ],
    option2: [],
    radio: 1,
    choice: false,
    result: -99,
    currentDate: new Date().getTime(),
    mindate: new Date(2018, 1, 1).getTime(),
    maxdate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    }
  },
  QueryParams: {
    lafCreateTime: "",
    lafCtgId: "",
    lafCtgName: "",
    lafDetail: "",
    lafImg: "",
    lafName: "",
    lafText: "",
    lafType: "",
    openId: "",
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this
    wx.getStorage({
      key: 'openId',
      success(res) {
        that.QueryParams.openId = res.data
      }
    })
    this.getlaf_list();
  },
  /**
   * 下拉框是否隐藏
   */
  hidden(e) {
    let add = !this.data.choice;
    this.setData({
      choice: add
    })
  },
  /**
   * 提交表单
   */
  sub(e) {
    let i = 0
    let that = this;
    //先进行判断物品名称
    if (e.detail.value.laf_name === "") {
      wx.showToast({
        title: '请完成物品名称填写',
        icon: 'none',
        duration: 2000
      })
    } else if (this.data.result === "") {
      wx.showToast({
        title: '请完成丢/拾选择',
        icon: 'none',
        duration: 2000
      })
    } else if (this.data.classify === "") {
      wx.showToast({
        title: '请完成分类选择',
        icon: 'none',
        duration: 2000
      })
    } else if (e.detail.value.laf_text === "") {
      wx.showToast({
        title: '请完成详细描述填写',
        icon: 'none',
        duration: 2000
      })
    } else if (this.data.fileList.length === 0) {
      wx.showToast({
        title: '请完成照片上传',
        icon: 'none',
        duration: 2000
      })
    } else {
      let temp = that.data.option2
      for(let i = 0;i < temp.length;i++){
        if (e.detail.value.classify == temp[i].id) {
          that.QueryParams.lafCtgName = temp[i].lafCtgName;
          that.QueryParams.lafCreateTime = that.data.currentDate
          that.QueryParams.lafCtgId = e.detail.value.classify
          let arr = that.data.fileList.join(",")
          console.log(arr)
          that.QueryParams.lafImg = arr
          that.QueryParams.lafName = e.detail.value.stu_name
          that.QueryParams.lafText = e.detail.value.laf_text
          that.QueryParams.lafType = that.data.radio
          that.QueryParams.lafDetail = JSON.stringify({
            laf_time: that.data.currentDate,
            laf_addr: e.detail.value.laf_addr,
            stu_id: e.detail.value.stu_id,
            college: e.detail.value.college
          })
          console.log(that.QueryParams)
          that.publish();
          break;
        }
      }
    }
  },
  /**
   * 发布信息请求
   */
  async publish(e) {
    let that = this
    const res = await request({
      url: "found/lostAndFound",
      data: that.QueryParams,
      method: "post"
    })
    console.log(res)
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
      let temp = res.data.data
      temp.splice(0, 1)
      that.setData({
        option2: temp
      })
    } else {
      wx.showToast({
        icon: 'none',
        title: '数据加载失败！',
      })
    }
  },
  /**
   * 照片上传
   */
  chooseimg(e) {
    let that = this
    wx.chooseImage({
      success: function(res) {
        const path = res.tempFilePaths[0]
        res.tempFilePaths.forEach(function(path) {
          that.putImg(path)
        })
      },
    })
  },
  async putImg(imgPath) {
    let that = this
    let result = await request({
      url: "book-market/objectUpload/getTokenAndUrl",
      method: "GET"
    })
    let key = result.data.data.key
    let token = result.data.data.token
    let outFile = await uploadFile({
      imgPath,
      key,
      token
    })
    console.log(outFile)
    if (outFile) {
      let temp = that.data.fileList
      temp.push(outFile)
      this.setData({
        fileList: temp
      })
    }
    else{
      wx.showToast({
        icon:'none',
        title: '照片上传失败！',
      })
    }
  },
  /**
   * 删除照片操作
   */
  shanchu(e) {
    console.log(e)
    let id = e.currentTarget.dataset.id
    console.log(id)
    let temp = this.data.fileList
    temp.splice(id, 1)
    this.setData({
      fileList: temp
    })
  },
  /**
   * 时间
   */
  onInput(event) {
    console.log(event)
    this.setData({
      currentDate: event.detail
    });
  }
})