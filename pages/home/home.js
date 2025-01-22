// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    activeIndex: 0, 
    tableData: [], // 表格数据
    channels: [
      { name: "哑巴频道", users: [] },
      { name: "深夜TV", users: [] },
      { name: "秋秋爱", users: [] },
    ],
  },

  parseData(rawData) {
    // 将原始文本数据转换为 JSON 格式
    const rows = rawData.split('\n').slice(1); // 跳过标题行
    return rows.map(row => {
      const [rank, nickname, , , starTrack, , kdRatio] = row.trim().split(/\s+/);
      return { rank, nickname, starTrack, kdRatio };
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 模拟从服务器加载数据（本地测试也可以使用 wx.request）
    const rawData = `Rank  Nickname 今日击杀数 今日死亡数 新增击杀数 新增死亡数 击杀比
Top1 彦祖没有我潇 52949 46349 69 38 1.82
Top2 和明天相逢 20782 21375 14 10 1.40`;
    const tableData = this.parseData(rawData);
    this.setData({ tableData });
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

