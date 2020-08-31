module.exports = {
  request,
  uploadFile,
}
const baseUrl = "http://2087p773d1.wicp.vip/"

let ajaxTimes = 0; // 处理数据请求的总数，用来控制loading图标

/** 
 * 处理数据请求的接口
 */
function request(params) {
  ajaxTimes++
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      url: baseUrl + params.url,
      dataType: 'json',
      header: {
        "accept": "*/*",
        "conent-type": "application/json",
        "token": wx.getStorageSync("token"),
      },
      success: (result) => {
        resolve(result)
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => {
        ajaxTimes--
        if (ajaxTimes === 0) {
          wx.hideLoading()
        }
      }
    })
  })
}

let ajaxFileTimes = 0 // 上传文件的请求数量

/**
 * 上传图片
 */
function uploadFile(params) {
  const fileName = params.key + guid() + '.jpg'
  ajaxFileTimes++
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  return new Promise((resolve, reject) => {
    wx.uploadFile({ //将此图片上传至七牛云
      url: 'https://upload-z2.qiniup.com',
      name: 'file',
      filePath: params.imgPath, //数组中的当前图片
      header: {
        "Content-Type": "multipart/form-data"
      },
      formData: {
        token: params.token,
        key: fileName
      },
      success: function (res) {
        let data = JSON.parse(res.data)
        const outPath = "https://xpuimg.zhieasy.cn/" + data.key
        resolve(outPath)
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => {
        ajaxFileTimes--
        if (ajaxFileTimes === 0) {
          wx.hideLoading()
        }
      }
    })
  });
}

/**
 * 生成唯一id
 */
function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}