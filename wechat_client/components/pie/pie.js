// components/pie/pie.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    dataarr: [
      {
        rate: "4.96%",
        name: "60%-80%",
        value: 233,
        name1: "全辖：3.94%",
      },
      {
        rate: "1.04%",
        name: "20%-40%",
        value: 49,
        name1: "全辖：1.35%",
      },
      {
        rate: "1.04%",
        name: "测试",
        value: 49,
        name1: "全辖：1.35%",
      },
      {
        rate: "86.81%",
        name: "20%以下",
        value: 379,
        name1: "全辖：89.78%",
      },
      {
        rate: "4.96%",
        name: "ceshi1",
        value: 233,
        name1: "全辖：3.94%",
      },
      {
        rate: "1.04%",
        name: "ceshi2",
        value: 49,
        name1: "全辖：1.35%",
      },
      {
        rate: "1.04%",
        name: "测试33",
        value: 49,
        name1: "全辖：1.35%",
      },
      {
        rate: "1.30%",
        name: "40%-60%",
        value: 61,
        name1: "全辖：1.16%",
      },
      {
        rate: "5.89%",
        name: "80%以上",
        value: 284,
        name1: "全辖：3.77%",
      },
    ],
    options: {
      radius: 37,
      lng: 60,
      title: "CPU",
      titleColor: "#73FBFD",
      horizon: 10,
    },
    windowInfoData: {},
  },
  attached() {
    /**
     * 获取当前设备的宽高
     */
    wx.getSystemInfo({
      success: res => {
        this.setData({
          windowInfoData: { width: res.windowWidth, height: res.windowHeight },
        });
      },
    });
  },
  ready() {
  },
  pageLifetimes: {
    show: function() {
      this.createSelectorQuery()
        .select("#myCanvas")
        .fields({
          node: true,
          size: true,
        })
        .exec(res => {
          this.drawCircle(this.data.dataarr, this.data.options, res); 
        });
    },
    hide: function() {
      // 页面被隐藏
    },
    resize: function(size) {
      // 页面尺寸变化
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    drawCircle(arr, options, node) {
      console.log("%c node", "font-size:13px; background:pink; color:#bf2c9f;", node);
      const canvas = node[0].node;
      const ctx = canvas.getContext("2d");

      const width = node[0].width;
      const height = node[0].height;
      const dpr = wx.getSystemInfoSync().pixelRatio;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      let x = width / 2;
      let y = height / 2;
      const colors = ["#11a2ff", "#00eaff", "#f9c200", "#ff5c00", "#d82244", "#d81d92", "#a700ff", "#5b00ff", "#2246ff"];
      const radius = options.radius;
      const lng = options.lng;
      const title = options.title;
      const titleColor = options.titleColor;
      const horizon = options.horizon;

      let leftDots = [];
      let rightDots = [];

      let rightRects = [];
      let leftRects = [];

      //求总和
      let sum = 0;
      let isChange = false;
      let chgCount = 0;
      //最大值
      let maxItem = { name: "", value: 0, index: 0 };

      for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (item.value > maxItem.value) {
          maxItem.value = item.value;
          maxItem.name = item.name;
          maxItem.index = i;
        }
        sum += item.value;
      }
      let leftVal = 0;
      for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        item.changed = item.value < sum / 18;
        let tmp = item.value;

        if (item.changed) {
          chgCount++;
          item.value = (sum / 18).toFixed(2);
          item.valueOrg = tmp;
          if (!isChange) {
            isChange = true;
          }
        } else {
          leftVal += tmp;
        }
      }

      if (isChange) {
        let leftSum = sum - (chgCount * sum) / 18;
        for (let i = 0; i < arr.length; i++) {
          let item = arr[i];
          if (!item.changed) {
            let tmp = item.value;
            item.value = ((tmp * leftSum) / leftVal).toFixed(2);
            item.valueOrg = tmp;
          }
        }
      }

      //绘制标题
      ctx.beginPath();
      ctx.fillStyle = titleColor;
      //文字居中
      ctx.textAlign = "center";
      //相对原点垂直居中
      ctx.textBaseline = "middle";
      //文字样式：加粗 16像素 字体Arial
      ctx.font = "normal 18px 微软雅黑";
      ctx.fillText(title, x, y);
      //累计角度
      let sumAngle = 0;

      //累计角度
      let initSumAg = 0;

      //设置开始的位置
      let startBF = 1.5 * Math.PI;
      let start = 1.5 * Math.PI;

      //初始化引导线和label位置
      function initData(angle, color, item, rate) {
        let label = item.name + "：" + rate + "%";
        item.label = label;

        //累计角度 - 当前的一半角度
        let bjAngle = initSumAg - angle;

        let chgAngle = 0.017453293 * bjAngle;
        //记录所有点
        let dotObj = {};
        dotObj.label = label;

        //设置起点状态
        let tmp1 = {
          x: x - radius * Math.sin(chgAngle),
          y: y - radius * Math.cos(chgAngle),
        };
        //设置末端状态
        let tmp2 = {
          x: x - lng * Math.sin(chgAngle),
          y: y - lng * Math.cos(chgAngle),
        };
        dotObj.dot1 = tmp1;
        dotObj.dot2 = tmp2;

        let tmp3 = {};
        let tmp4 = {};
        //向左绘制横线

        if (bjAngle < 180) {
          tmp3.x = tmp2.x - horizon;
          tmp3.y = tmp2.y;
          tmp4.x = tmp3.x - 5;
          tmp4.y = tmp3.y;
          dotObj.isLeft = true;
        } else {
          tmp3.x = tmp2.x + horizon;
          tmp3.y = tmp2.y;
          tmp4.x = tmp3.x + 5;
          tmp4.y = tmp3.y;
          dotObj.isLeft = false;
        }
        dotObj.dot3 = tmp3;
        dotObj.dot4 = tmp4;

        if (dotObj.isLeft) {
          leftDots.push(dotObj);
          leftRects.push(getRect(dotObj, item));
        } else {
          rightDots.push(dotObj);
          rightRects.push(getRect(dotObj, item));
        }
      }

      //统计汉字https://www.cnblogs.com/jkr666666/p/11645070.html
      function getByteLen(val) {
        let len = 0;
        for (let i = 0; i < val.length; i++) {
          let a = val.charAt(i);
          if (a.match(/[^\x00-\xff]/gi) != null) {
            len += 1;
          } else {
            len += 0.5;
          }
        }
        return len;
      }

      //获取文字矩形
      function getRect(dotObj, item) {
        let rectObj = {};
        const height = item.name1 ? 24 : 12;
        const width = getByteLen(item.label) * 13;

        if (dotObj.isLeft) {
          rectObj.x1 = dotObj.dot3.x - width;
          rectObj.x2 = dotObj.dot3.x;
          rectObj.y1 = dotObj.dot3.y - height / 2;
          rectObj.y2 = dotObj.dot3.y + height / 2;
        } else {
          rectObj.x1 = dotObj.dot3.x;
          rectObj.x2 = dotObj.dot3.x + width;
          rectObj.y1 = dotObj.dot3.y - height / 2;
          rectObj.y2 = dotObj.dot3.y + height / 2;
        }
        rectObj.label = item.label;
        rectObj.height = height;
        return rectObj;
      }
      function getRightMinY(index) {
        if (index == rightRects.length - 1) {
          return y * 2 - 10;
        }
        let cur = rightRects[index - 1];
        return cur.y2 - 5;
      }
      //动态计算 https://www.jianshu.com/p/a2d881847a31
      function calDisRight() {
        let disArr = [];
        let disObj = {};
        let flag = false;
        for (let i = 0; i < rightRects.length - 1; i++) {
          let cur = rightRects[i];
          let next = rightRects[i + 1];
          let xc1 = Math.max(cur.x1, next.x1);
          let xc2 = Math.min(cur.x2, next.x2);
          let yc1 = Math.max(cur.y1, next.y1);
          let yc2 = Math.min(cur.y2, next.y2);
          let area = (xc2 - xc1) * (yc2 - yc1);
          if (xc1 <= xc2 && yc1 <= yc2 && area > 10) {
            cur.inter = true;
            if (!flag) {
              disObj = {};
              disObj.start = i;
              flag = true;
            }
          } else {
            cur.inter = false;
            flag = false;
            if (disObj.start || disObj.start == 0) {
              disObj.end = i;
              disArr.push(disObj);
            }
          }
        }

        if ((disObj.start || disObj.start == 0) && !disObj.end) {
          disObj.end = rightRects.length - 1;
          disArr.push(disObj);
        }
        const height = rightRects[rightRects.length - 1].height + 2;

        if (disArr.length > 0) {
          for (let dis of disArr) {
            let startIndex = dis.start;
            let endIndex = dis.end;
            //开始点开始调整
            for (let i = endIndex; i > startIndex; i--) {
              let y2 = rightRects[startIndex].y2 - (i - startIndex) * height;
              let curRect = rightRects[i];
              curRect.y2 = y2;
              curRect.y1 = y2 - height;
              let addX = 30 - (i - startIndex) * 4;
              curRect.x1 = curRect.x1 + addX;
              curRect.x2 = curRect.x2 + addX;
              let curDots = rightDots[i];
              let dot4 = { x: curDots.dot4.x + addX, y: y2 - height / 2 };
              let dot3 = { x: curDots.dot3.x + addX, y: y2 - height / 2 };
              let dot2 = { x: curDots.dot2.x + addX, y: y2 - height / 2 };
              curDots.dot4 = dot4;
              curDots.dot3 = dot3;
              curDots.dot2 = dot2;
            }
          }
          calDisRight();
        }
      }

      function calDis() {
        let disArr = [];
        let disObj = {};
        let flag = false;
        for (let i = 0; i < leftRects.length - 1; i++) {
          let cur = leftRects[i];
          let next = leftRects[i + 1];
          let xc1 = Math.max(cur.x1, next.x1);
          let xc2 = Math.min(cur.x2, next.x2);
          let yc1 = Math.max(cur.y1, next.y1);
          let yc2 = Math.min(cur.y2, next.y2);
          let area = (xc2 - xc1) * (yc2 - yc1);
          if (xc1 <= xc2 && yc1 <= yc2 && area > 10) {
            cur.inter = true;
            if (!flag) {
              disObj = {};
              disObj.start = i;
              flag = true;
            }
          } else {
            cur.inter = false;
            flag = false;
            if (disObj.start || disObj.start == 0) {
              disObj.end = i;
              disArr.push(disObj);
            }
          }
        }

        if ((disObj.start || disObj.start == 0) && !disObj.end) {
          disObj.end = leftRects.length - 1;
          disArr.push(disObj);
        }
        // debugger;
        const height = leftRects[leftRects.length - 1].height + 2;

        if (disArr.length > 0) {
          for (let dis of disArr) {
            let startIndex = dis.start;
            let endIndex = dis.end;
            //开始点开始调整
            for (let i = endIndex; i > startIndex; i--) {
              let y2 = leftRects[startIndex].y2 + (i - startIndex - 1) * height;
              let curRect = leftRects[i];
              curRect.y2 = y2;
              curRect.y1 = y2 + height;
              let addX = 30 - (i - startIndex) * 4;
              curRect.x1 = curRect.x1 - addX;
              curRect.x2 = curRect.x2 - addX;
              let curDots = leftDots[i];
              let dot4 = { x: curDots.dot4.x - addX, y: y2 + height / 2 };
              let dot3 = { x: curDots.dot3.x - addX, y: y2 + height / 2 };
              let dot2 = { x: curDots.dot2.x - addX, y: y2 + height / 2 };
              curDots.dot4 = dot4;
              curDots.dot3 = dot3;
              curDots.dot2 = dot2;
            }
          }
          calDis();
        }
      }

      //动画
      function sleep(ms, callback) {
        setTimeout(callback, ms);
      }

      for (let key = 0; key < arr.length; key++) {
        let item = arr[key];

        let showRate = 0;
        if (isChange) {
          showRate = ((item.valueOrg * 100) / sum).toFixed(2);
        } else {
          showRate = ((item.value * 100) / sum).toFixed(2);
        }
        let rate = item.value / sum;
        initSumAg += rate * 180 * 2;
        let curColor = colors[key];
        initData(rate * 180, curColor, item, showRate);
      }
      calDis();
      calDisRight();
      function getCur(label) {
        for (let dotObj of leftDots) {
          if (dotObj.label == label) {
            return dotObj;
          }
        }
        for (let dotObj of rightDots) {
          if (dotObj.label == label) {
            return dotObj;
          }
        }
        return null;
      }

      //画引导线和label
      function drawLine(ctx, angle, color, item, rate) {
        let label = item.name + "：" + rate + "%";
        ctx.beginPath();
        ctx.globalCompositeOperation = "destination-over";
        let dotObj = getCur(label);
        let tmp1 = dotObj.dot1;
        let tmp2 = dotObj.dot2;
        let tmp3 = dotObj.dot3;
        let tmp4 = dotObj.dot4;

        ctx.moveTo(tmp1.x, tmp1.y);
        ctx.lineTo(tmp2.x, tmp2.y);
        //设置线宽状态
        ctx.lineWidth = 1;

        ctx.lineTo(tmp3.x, tmp3.y);
        //进行绘制
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = color;

        ctx.arc(tmp3.x, tmp3.y, 2, 0, 2 * Math.PI, true);
        ctx.fill();

        //绘制标题
        ctx.beginPath();
        ctx.fillStyle = "#fff";
        //相对原点垂直居中
        if (dotObj.isLeft) {
          ctx.textAlign = "end";
        } else {
          ctx.textAlign = "start";
        }
        if (item.name1) {
          ctx.textBaseline = "bottom";
        } else {
          ctx.textBaseline = "middle";
        }

        //文字样式：加粗 16像素 字体Arial
        ctx.font = "normal 12px 微软雅黑";
        ctx.fillText(label, tmp4.x, tmp4.y);

        if (item.name1) {
          //绘制标题
          ctx.beginPath();
          ctx.fillStyle = "#CDFFEF";
          //相对原点垂直居中
          ctx.textBaseline = "middle";
          //文字样式：加粗 16像素 字体Arial
          ctx.font = "normal 12px 微软雅黑";
          ctx.fillText("(" + item.name1 + ")", tmp4.x, tmp4.y + 7);
        }
      }

      //绘制
      let acc = 0;
      for (let key = 0; key < arr.length; key++) {
        let item = arr[key];
        let showRate = 0;
        if (isChange) {
          showRate = ((item.valueOrg * 100) / sum).toFixed(2);
        } else {
          showRate = ((item.value * 100) / sum).toFixed(2);
        }

        let rate = item.value / sum;
        let curColor = colors[key];

        acc += 300 * rate;
        sleep(acc, function () {
          ctx.beginPath();
          ctx.lineWidth = 20;
          ctx.strokeStyle = curColor;
          ctx.globalCompositeOperation = "source-over";
          let add = rate * 2 * Math.PI;
          ctx.arc(x, y, radius, start, start - add, true);
          ctx.lineCap = "round";
          start -= add;
          ctx.stroke();
          sumAngle += rate * 180 * 2;
          let angle = rate * 180;
          drawLine(ctx, angle, colors[key], item, showRate);

          if (item.value == arr[arr.length - 1].value && item.name == arr[arr.length - 1].name) {
            for (let j = 0; j <= maxItem.index; j++) {
              let rate1 = arr[j].value / sum;
              let add1 = rate1 * 2 * Math.PI;
              if (j == maxItem.index) {
                add1 = rate1 * Math.PI;
              }
              ctx.beginPath();
              ctx.lineWidth = 20;
              ctx.lineCap = "round";
              ctx.strokeStyle = colors[j];
              ctx.globalCompositeOperation = "source-over";
              ctx.arc(x, y, radius, startBF, startBF - add1, true);
              ctx.stroke();
              startBF -= add1;
            }
          }
        });
      }
    },
  },
});
