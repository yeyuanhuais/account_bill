// pages/choose_account_type/choose_account_type.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    accountOptions: [
      {
        id: 1,
        name: "资产账户",
        children: [
          {
            id: 2,
            name: "现金",
            icon: "weixinzhifu",
            dec: "",
          },
          {
            id: 3,
            name: "储蓄卡",
            icon: "weixinzhifu",
            dec: "",
          },
        ],
      },
      {
        id: 4,
        name: "负债账户",
        children: [
          {
            id: 5,
            name: "信用卡",
            icon: "weixinzhifu",
            dec: "",
          },
          {
            id: 6,
            name: "蚂蚁花呗",
            icon: "weixinzhifu",
            dec: "",
          },
        ],
      },
    ],
  },
  chooseType({
    currentTarget: {
      dataset: { id, name },
    },
  }) {
    wx.navigateTo({
      url: "/pages/add_edit_account/add_edit_account",
      success: res => {
        res.eventChannel.emit("accountType", { typeId: id, typeName: name });
      },
    });
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
