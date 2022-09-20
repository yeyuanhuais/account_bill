Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    windowInfo: {},
  },
  onLoad() {},
  getPhoneNumber(e) {
    console.log("%c e", "font-size:13px; background:pink; color:#bf2c9f;", e);
    wx.getUserProfile({
      desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        });
        wx.setStorageSync("token", res);
      },
    });
  },
  onShow() {
    this.getTabBar().setData({ selected: 3 });
  },
});
