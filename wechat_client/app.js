App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);
    if (wx.getStorageSync("user")) {
      wx.switchTab({
        url: "pages/property/property",
      });
    } else {
      wx.switchTab({
        url: "pages/more/more",
      });
    }
  },
  globalData: {
    userInfo: null,
  },
});
