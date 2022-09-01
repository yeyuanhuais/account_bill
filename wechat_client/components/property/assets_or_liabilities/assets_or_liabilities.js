// components/property/assets_or_liabilities/assets_or_liabilities.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataItem: Object,
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false, //半屏弹框是否显示
    accountData: [], //弹框内多选框的选项
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /* ======== 弹窗打开 ======== */
    openDialog({ currentTarget }) {
      this.setData({
        show: true,
        accountData: currentTarget.dataset.item,
      });
    },
    /* ======== 添加账户 ======== */
    addAccount() {
      wx.navigateTo({ url: "/pages/choose_account_type/choose_account_type" });
    },
    /* ======== 弹窗关闭  选择展示账户点击确定 ======== */
    close() {
      this.setData({
        show: false,
        accountData: [],
      });
    },
    /* ======== 账户多选框点击事件 ======== */
    checkboxChange({ detail }) {
      this.setData({
        accountData: detail.newAccountData,
      });
      this.triggerEvent("checkboxChange", { childData: detail.newAccountData });
    },
  },
});
