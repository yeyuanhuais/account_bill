import * as echarts from "../../ec-canvas/echarts";
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    ecBarDate: {
      lazyLoad: true,
    },
  },
  ready() {
    this.ecPieComponent = this.selectComponent("#mychart-dom-pie");
    this.initChart();
  },
  lifetimes: {
    detached: function () {
      this.dispose(this.chart);
      this.chart = null;
      this.ecPieComponent = null;
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    initChart() {
      this.ecPieComponent.init((canvas, width, height, dpr) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr, // new
        });
        this.getPieOption(chart);
        this.chart = chart;
        // 注意这里一定要返回 chart 实例，否则会影响事件处理等
        return chart;
      });
    },
    getPieOption(chart) {
      const option = {
        title: {
          text: "{label|总收入}\n{value|￥33333.65}",
          textStyle: {
            color: "#666666",
            align: "center",
            lineHeight: 26,
            width: 10,
            rich: {
              label: {
                fontSize: 14,
                fontWeight: "normal",
              },
              value: {
                fontSize: 18,
                fontWeight: "bold",
              },
            },
          },
          textAlign: "center",
          textVerticalAlign: "center",
          left: "49%",
          top: "40%",
          right: "50%",
          bottom: "50%",
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}: \n{c} ({d}%)",
          confine: true, //防止tooltip被覆盖
        },
        series: [
          {
            type: "pie",
            center: ["50%", "50%"],
            radius: ["60%", "95%"],
            label: {
              show: false,
            },
            data: [
              {
                value: 55,
                name: "北京",
              },
              {
                value: 20,
                name: "武汉",
              },
              {
                value: 10,
                name: "杭州",
              },
              {
                value: 20,
                name: "广州",
              },
              {
                value: 38,
                name: "上海",
              },
            ],
          },
        ],
      };
      chart.setOption(option);
    },
    dispose: function (chart) {
      if (chart) {
        chart.dispose();
      }
    },
  },
});
