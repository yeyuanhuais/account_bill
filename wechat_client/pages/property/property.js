Page({
    onShareAppMessage() {
      return {
        title: 'tabs',
        path: 'page/weui/example/tabs/tabs'
      }
    },
    data: {
      tabs: [],
      activeTab: 0,
    },
  
    onLoad() {
      const tabs = [
        {
          title: '技术开发',
          title2: '小程序开发进阶',
          img: 'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEV5QjxLDJaL6ibHLSZ02TIcve0ocPXrdTVqGGbqAmh5Mw9V7504dlEiatSvnyibibHCrVQO2GEYsJicPA/0?wx_fmt=jpeg',
          desc: '本视频系列课程，由腾讯课堂NEXT学院与微信团队联合出品，通过实战案例，深入浅出地进行讲解。',
        },
        {
          title: '产品解析',
          title2: '微信小程序直播',
          img: 'http://mmbiz.qpic.cn/sz_mmbiz_png/GEWVeJPFkSHALb0g5rCc4Jf5IqDfdwhWJ43I1IvriaV5uFr9fLAuv3uxHR7DQstbIxhNXFoQEcxGzWwzQUDBd6Q/0?wx_fmt=png',
          desc: '微信小程序直播系列课程持续更新中，帮助大家更好地理解、应用微信小程序直播功能。',
        }
      ]
      this.setData({ tabs })
    },
  
    onTabClick(e) {
      const index = e.detail.index
      this.setData({ 
        activeTab: index 
      })
    },
  
    onChange(e) {
      const index = e.detail.index
      this.setData({ 
        activeTab: index 
      })
    },
    handleClick(e) {
      wx.navigateTo({
        url: './webview',
      })
    }
  })