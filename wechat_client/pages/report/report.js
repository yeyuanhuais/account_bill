Page({
  data: {
    activeTab: 0, //当前tabs值
    tabsData: [
      {
        title: "分类",
      },
      {
        title: "对比",
      },
      {
        title: "趋势",
      },
    ], //tab数据
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
});
