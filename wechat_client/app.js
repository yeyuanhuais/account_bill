import { request } from "./http/request";
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);

    // 登录
    wx.login({
      success: async value => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        let res = await request("/users/wxLogin", "POST", { code: value.code, loginMethod: "weixin" });
        console.log("%c res", "font-size:13px; background:pink; color:#bf2c9f;", res);
        wx.setStorageSync("user", res);
      },
    });
  },
  globalData: {
    userInfo: null,
  },
});
