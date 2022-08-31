// pages/bill/bill.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    billData: [
      {
        time: "2022",
        type: "year",
        children: [
          {
            time: "8",
            type: "month",
            income: "345345",
            expenditure: "3233",
            children: [
              { time: "30", type: "day", income: "345345", expenditure: "3233" },
              { time: "29", type: "day", income: "345345", expenditure: "3233" },
              { time: "28", type: "day", income: "345345", expenditure: "3233" },
              { time: "27", type: "day", income: "345345", expenditure: "3233" },
              { time: "27", type: "day", income: "345345", expenditure: "3233" },
            ],
          },
          {
            time: "7",
            type: "month",
            income: "345345",
            expenditure: "3233",
            children: [
              {
                time: "30",
                type: "day",
                income: "345345",
                expenditure: "3233",
                children: [
                  { icon: "30", name: "交通", type: "day", income: "345345" },
                  { icon: "29", name: "交通", type: "day", expenditure: "3233" },
                  { icon: "28", name: "交通", type: "day", income: "345345" },
                  { icon: "27", name: "交通", type: "day", income: "345345" },
                  { icon: "27", name: "交通", type: "day", expenditure: "3233" },
                ],
              },
              { time: "29", type: "day", income: "345345", expenditure: "3233" },
              { time: "28", type: "day", income: "345345", expenditure: "3233" },
              { time: "27", type: "day", income: "345345", expenditure: "3233" },
              { time: "27", type: "day", income: "345345", expenditure: "3233" },
            ],
          },
        ],
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
