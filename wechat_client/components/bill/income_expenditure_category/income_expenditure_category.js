// components/bill/income_expenditure_category.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    category: [
      {
        icon: "icon-food",
        name: "早餐",
      },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick({ currentTarget }) {
      this.triggerEvent("categoryTap", { data: currentTarget.dataset.item });
    },
  },
});
