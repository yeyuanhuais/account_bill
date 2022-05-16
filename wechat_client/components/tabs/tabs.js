// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    tabList: [
      { name: "资产", id: 0 },
      { name: "负债", id: 1 },
    ],
  },
  attached() {
    var that = this;

    /**
     * 获取当前设备的宽高
     */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight,
        });
      },
    });
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //  tab切换逻辑
    clickTab(e) {
      var that = this;

      if (this.data.currentTab === e.target.dataset.current) {
        return false;
      } else {
        that.setData({
          currentTab: e.target.dataset.current,
        });
      }
    },

    bindChange(e) {
      var that = this;
      that.setData({
        currentTab: e.detail.current,
      });
    },
  },
});
