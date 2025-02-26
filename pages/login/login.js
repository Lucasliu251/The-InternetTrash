// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onLogin(){
    wx.login({
      success: (res) => {
       if (res.code) {
         wx.request({
          url:'http://localhost:8000/api/onlogin',      //正式版本需要https协议
          data:{
            code:res.code
          },
          success:(Response)=>{
            const data = Response.data;
            console.log(data);
          }
         }) 
       } else{
         console.log('登录失败'+res.errMsg)
       }
      } 
    })
  },


  goProfile(){
    wx.navigateTo({
      url: '/pages/profile/profile',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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