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
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    /* ======== 弹窗打开 ======== */
    openDialog({ currentTarget }) {
      this.triggerEvent("openDialog", { show: true, accountData: currentTarget.dataset.item });
    },
    /* ======== 添加账户 ======== */
    addAccount() {
      wx.navigateTo({ url: "/pages/choose_account_type/choose_account_type" });
    },
  },
});
