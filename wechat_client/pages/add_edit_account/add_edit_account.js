import WxValidate from "../../utils/WxValidate";
Page({
  data: {
    formData: { color: "rgb(7,193,96)", money: 0 },
    pick: false,
  },
  toPick() {
    this.setData({
      pick: true,
    });
  },
  pickColor(e) {
    let { formData } = this.data;
    this.setData({
      formData: { ...formData, color: e.detail.color },
    });
  },
  formSubmit({ detail: { value } }) {
    // 验证字段的规则
    const rules = {
      name: {
        required: true,
      },
      typeName: {
        required: true,
      },
      money: {
        required: true,
        number: true,
      },
      color: {
        required: true,
      },
    };

    // 验证字段的提示信息，若不传则调用默认的信息
    const messages = {
      name: {
        required: "请输入账户名称",
      },
      typeName: {
        required: "请返回上级选择账户类型",
      },
      money: {
        required: "请输入金额",
      },
      color: {
        required: "请选择账户颜色",
      },
    };

    // 创建实例对象
    this.WxValidate = new WxValidate(rules, messages);

    // 传入表单数据，调用验证方法
    if (!this.WxValidate.checkForm(value)) {
      const error = this.WxValidate.errorList[0];
      wx.showToast({
        icon: "none",
        title: error.msg,
      });
      return false;
    }
    wx.redirectTo({ url: "/pages/property/property" });
  },
  formReset() {
    let { formData } = this.data;
    this.setData({
      formData: { typeName: formData.typeName, typeId: formData.typeId, color: "rgb(7,193,96)", money: 0 },
    });
  },
  onLoad(options) {
    let { formData } = this.data;
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on("accountType", data => {
      this.setData({ formData: { ...formData, ...data } });
    });
  },
});
