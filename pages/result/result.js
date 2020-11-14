// pages/result/result.js

Page({
  data: {
    totalScore: null, // 分数
  },
  onLoad: function (option) {
    console.log(option);
    this.setData({
      totalScore: option.totalScore,
    })
  },


})