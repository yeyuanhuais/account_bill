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
    
    wx.redirectTo({url:"/pages/property/property"})
  },
  formReset: function () {
  },
  onLoad(options) {
    let { formData } = this.data;
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on("accountType", data => {
      this.setData({ formData: { ...formData, ...data } });
    });
  },
  onReady() {
  },
  selectColor(e) {
    this.setData({
      color: e.detail.rgb,
    });
  },
});
