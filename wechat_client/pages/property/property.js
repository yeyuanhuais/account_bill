Page({
  data: {
    assetsData: [
      {
        title: "资产",
        assets: "8923.9",
        netAssets: "8923.9",
        childData: [
          { id: "1", title: "微信钱包", value: 0, icon: "weixinzhifu", assets: "6923.9" },
          { id: "2", title: "现金", value: 1, icon: "weixinzhifu", assets: "923.9" },
        ],
      },
      {
        title: "负债",
        childData: [{}],
      },
    ], //资产数据
    activeTab: 0, //当前tabs值
    show: false, //半屏弹框是否显示
    accountData: [], //弹框内多选框的选项
  },

  onLoad() {},

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
  /* ======== 弹窗打开 ======== */
  openDialog({ currentTarget }) {
    this.setData({
      show: true,
      accountData: currentTarget.dataset.item,
    });
  },
  /* ======== 弹窗关闭 ======== */
  close() {
    this.setData({
      show: false,
      accountData: [],
    });
  },
  /* ======== 选择展示账户点击确定 ======== */
  submit(e) {
    this.setData({
      show: false,
      accountData: [],
    });
  },
  /* ======== 账户多选框点击事件 ======== */
  checkboxChange(e) {
    let { accountData, assetsData } = this.data;
    let data = e.detail.value;
    let newAccountData = accountData.map(item => {
      if (data.includes(item.id)) {
        item.value = 1;
      } else {
        item.value = 0;
      }
      return item;
    });
    assetsData[activeTab].childData = newAccountData;
    this.setData({
      assetsData,
    });
  },
});
