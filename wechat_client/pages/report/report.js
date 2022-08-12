import * as echarts from "../../components/ec-canvas/echarts";
import { getStartEndTime } from "../../utils/util.js";
function initChart(canvas, width, height, dpr) {
  console.log("%c canvas, width, height, dpr", "font-size:13px; background:pink; color:#bf2c9f;", canvas, width, height, dpr);
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr, // new
  });
  canvas.setChart(chart);

  var option = {
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
  return chart;
}
Page({
  data: {
    ec: {
      onInit: initChart,
    },
    time: { ...getStartEndTime() },
  },
});
