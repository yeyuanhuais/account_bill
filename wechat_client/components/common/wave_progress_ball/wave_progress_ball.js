// components/wave_progress_ball/wave_progress_ball.js
import Wave from "./wave";
Component({
  /**
   * 组件的属性列表
   */
  properties: { rangeValue: { type: Number, value: 80 }, width: { type: Number, value: 100 }, height: { type: Number, value: 100 } }, //circle star roundRect heart},

  /**
   * 组件的初始数据
   */
  data: {},
  ready() {
    this.timer = null;
    const query = this.createSelectorQuery();
    query
      .select("#wave_progress_ball")
      .fields({ node: true, size: true })
      .exec(res => {
        if (res[0]) {
          const canvas = res[0].node;
          const dpr = wx.getSystemInfoSync().pixelRatio;
          canvas.width = res[0].width * dpr;
          canvas.height = res[0].height * dpr;
          this.canvas = canvas;
          this.canvasWidth = canvas.width;
          this.canvasHeight = canvas.height;
          this.radius = this.canvasWidth / 2;
          this.nowRange = 0;
          this.isDrawContainer = false;

          this.wave1 = new Wave({
            canvasWidth: this.canvasWidth, // 轴长
            canvasHeight: this.canvasHeight, // 轴高
            waveWidth: 0.055, // 波浪宽度,数越小越宽
            waveHeight: 4, // 波浪高度,数越大越高
            colors: ["#F39C6B", "#A0563B"], // 波浪颜色
            xOffset: 0, // 初始偏移
            speed: 0.04, // 速度
          });
          this.wave2 = new Wave({
            canvasWidth: this.canvasWidth, // 轴长
            canvasHeight: this.canvasHeight, // 轴高
            waveWidth: 0.04, // 波浪宽度,数越小越宽
            waveHeight: 3, // 波浪高度,数越大越高
            colors: ["rgba(243, 156, 107, 0.48)", "rgba(160, 86, 59, 0.48)"], // 波浪颜色
            xOffset: 2, // 初始偏移
            speed: 0.02, // 速度
          });
          this.draw();
          // this.requestAnimationFrame(this.draw.bind(this));
        }
      });
  },
  detached() {
    if (this.timer) clearTimeout(this.timer);
  },
  /**
   * 组件的方法列表
   */
  methods: {
    requestAnimationFrame(fn) {
      this.timer = setTimeout(fn, 17);
    },
    draw() {
      if (this.timer) clearTimeout(this.timer);
      const ctx = this.canvas.getContext("2d");
      ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      if (!this.isDrawContainer) {
        this.drawCircle(ctx);
      }
      this.drawBackground(ctx);
      if (this.nowRange <= this.properties.rangeValue) {
        this.nowRange += 1;
      }
      if (this.nowRange > this.properties.rangeValue) {
        this.nowRange -= 1;
      }
      this.wave2.update({
        nowRange: this.nowRange,
      });
      this.wave2.draw(ctx);
      this.wave1.update({
        nowRange: this.nowRange,
      });
      this.wave1.draw(ctx);
      // this.requestAnimationFrame(this.draw.bind(this));
      this.drawText(ctx);
    },
    drawBackground(ctx) {
      const r = this.radius;
      const cR = r;
      ctx.beginPath();
      ctx.arc(r, r, cR, 0, 2 * Math.PI);
      const grd = ctx.createRadialGradient(r, r, r / 2, r, r, r);
      grd.addColorStop(0, "rgba(127, 57, 242, 0");
      grd.addColorStop(1, "rgba(255, 195, 103, 0.11)");
      ctx.fillStyle = grd;
      ctx.fill();
    },
    drawCircle(ctx) {
      const r = this.canvasWidth / 2;
      const lineWidth = 4;
      const cR = r - lineWidth;
      ctx.lineWidth = lineWidth;
      ctx.beginPath();
      ctx.arc(r, r, cR, 0, 2 * Math.PI);
      ctx.strokeStyle = "rgba(186, 165, 130, 0.3)";
      ctx.stroke();
      ctx.clip();
      this.isDrawContainer = true;
    },
    /* ======== 标注文字值 ======== */
    drawText(ctx) {
      const r = this.canvasWidth / 2;
      const lineWidth = 4;
      const cR = r - lineWidth;
      ctx.globalCompositeOperation = "source-over";
      let size = 0.4 * cR;
      ctx.font = "bold " + size + "px Microsoft Yahei";
      let txt = this.properties.rangeValue;

      ctx.fillStyle = "#FFFFFF";
      ctx.textAlign = "center";
      ctx.fillText(txt, r + 5, r + 20);
    },
  },
});
