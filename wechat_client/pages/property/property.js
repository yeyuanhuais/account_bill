Page({
  data: {
    tabsData: [
      {
        title: "资产",
        assets: "8923.9",
        netAssets: "8923.9",
        childData: [
          { id: "1", title: "微信钱包", value: 0, icon: "icon-weixin", assets: "6923.9", backgroundColor: "#ADCF9F" },
          { id: "2", title: "现金", value: 1, icon: "icon-xianjin", assets: "923.9", backgroundColor: "#CED89E" },
        ],
      },
      {
        title: "负债",
        childData: [],
      },
    ], //资产数据
    activeTab: 0, //当前tabs值
  },
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
  /* ======== 账户多选框点击事件 ======== */
  checkboxChange({ detail }) {
    let { tabsData, activeTab } = this.data;
    tabsData[activeTab].childData = detail.childData;
    this.setData({
      tabsData,
    });
  },
  onShow() {
    this.getTabBar().setData({ selected: 0 });
  },
});
