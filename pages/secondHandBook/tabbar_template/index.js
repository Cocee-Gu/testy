//初始化数据
function tabbarinit() {
  return [
    {
      "current": 0,
      "pagePath": "/pages/secondHandBook/index/index",
      "iconPath": "../../../image/secondHandBook_image/shbtabBar_market.png",
      "selectedIconPath": "../../../image/secondHandBook_image/shbtabBar_market2.png",
      "text": "市场"
    },
    {
      "current": 0,
      "pagePath": "/pages/secondHandBook/classification/index",
      "iconPath": "../../../image/secondHandBook_image/shbtabBar_classify.png",
      "selectedIconPath": "../../../image/secondHandBook_image/shbtabBar_classify2.png",
      "text": "分类"
    },
    {
      "current": 0,
      "pagePath": "/pages/secondHandBook/mine/index",
      "iconPath": "../../../image/secondHandBook_image/shbtabBar_mine.png",
      "selectedIconPath": "../../../image/secondHandBook_image/shbtabBar_mine2.png",
      "text": "我的"
    }
  ]

}
//tabbar 主入口
function tabbarmain(bindName = "tabdata", id, target) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']   //换当前的icon
  otabbar[id]['current'] = 1;
  bindData[bindName] = otabbar
  that.setData({ bindData });
}

module.exports = {
  tabbar: tabbarmain
}