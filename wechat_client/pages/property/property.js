Page({
  data: {
    assetsData: [
      {
        title: "资产",
        assets: "8923.9",
        netAssets: "8923.9",
        childData: [
          { name: "微信钱包", value: 0 },
          { name: "现金", value: 1 },
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
  buttontap(e) {
    console.log(e.detail);
  },
  checkboxChange: function (e) {
    console.log("checkbox发生change事件，携带value值为：", e.detail.value);
  },
});
