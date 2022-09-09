Page({
  data: {
    tabsData: [
      {
        title: "收入",
      },
      {
        title: "支出",
      },
    ], //资产数据
    activeTab: 0, //当前tabs值
    formData: { value: "0", time: "2022-09-05", remark: "", icon: "icon-food" },
    show: false, //半屏弹框是否显示
    array: ["微信", "支付宝", "钱包", "银行卡"],
  },

  onTabClick(e) {
    const index = e.detail.index;
    this.setData({
      activeTab: index,
    });
  },

  onChange(e) {
    const index = e.detail.index;
    this.setData({
      activeTab: index,
    });
  },
  categoryTap({ detail }) {
    const { formData } = this.data;
    this.setData({
      formData: { ...formData, ...detail.data },
    });
  },
  /* ======== 键盘点击确定 ======== */
  handleSubmitKeyboard({ detail }) {
    const { formData } = this.data;
    this.setData({
      formData: { ...formData, ...detail.data },
    });
  },
  bindinputMoney({ detail }) {
    const { formData } = this.data;
    this.setData({
      formData: { ...formData, value: detail.value },
    });
  },
  bindinputRemark({ detail }) {
    const { formData } = this.data;
    this.setData({
      formData: { ...formData, remark: detail.value },
    });
  },
  catchtapInput() {
    wx.hideKeyboard();
  },
  /* ======== 弹窗打开 ======== */
  openDialog() {
    this.setData({
      show: true,
    });
  },
  /* ======== 弹窗关闭  选择展示账户点击确定 ======== */
  close() {
    this.setData({
      show: false,
    });
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value,
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
