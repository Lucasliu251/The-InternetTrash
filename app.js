// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },

  globalData: {
    userInfo: null,
    indexTabbarLists:[{
      "pagePath": "/pages/index/index",
      "text": '首页',

    },
    {
      "pagePath": "/pages/logs/logs",
      "text": '日志'
    }],
  },

  
  //更新tabbar
  tabChange: function(e) {
    wx.redirectTo({
      url: e.detail.item.pagePath
    })
  }

})
