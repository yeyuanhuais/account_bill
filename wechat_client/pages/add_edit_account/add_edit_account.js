Page({
  data: {
    formData: {},
    isSubmit: false,
    warn: "",
    phone: "",
    pwd: "",
    isPub: false,
    sex: "男",
    color: "rgb(0,0,0)",
    rgb: "rgb(7,193,96)",
    pick: false,
  },
  toPick: function () {
    this.setData({
      pick: true,
    });
  },
  pickColor(e) {
    this.setData({
      rgb: e.detail.color,
    });
  },
  formSubmit: function (e) {
    console.log("form发生了submit事件，携带数据为：", e.detail.value);
    
    wx.redirectTo({url:"/pages/property/property"})
  },
  formReset: function () {
    console.log("form发生了reset事件");
  },
  onLoad(options) {
    let { formData } = this.data;
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on("accountType", data => {
      console.log("%c data", "font-size:13px; background:pink; color:#bf2c9f;", data);
      this.setData({ formData: { ...formData, ...data } });
    });
  },
  onReady() {
  },
  selectColor(e) {
    console.log(e.detail);
    this.setData({
      color: e.detail.rgb,
    });
  },
});
