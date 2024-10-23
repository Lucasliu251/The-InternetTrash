// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: false, // 是否已有用户信息
    avatarUrl: '', // 用户头像
    nickName: '', // 用户昵称
  },

  getUserProfile() {
    wx.getUserProfile({
      desc: '用于展示用户信息', // 说明用途
      success: (res) => {
        console.log(res.userInfo);
        this.setData({
          avatarUrl: res.userInfo.avatarUrl, // 设置头像
          nickName: res.userInfo.nickName, // 设置昵称
          hasUserInfo: true, // 已有用户信息
        });
      },
      fail: (err) => {
        console.error("用户拒绝获取信息", err);
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getUserProfile();  //页面加载时自动获取用户信息
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})