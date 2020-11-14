// pages/multiplication/multiplication.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myQuesList: app.globalData.multiplication,
    totalScore: 0,
    current: 0,//题目序列
    chooseList: [],
    trueValue: "",
    thetrueValue: "",
    chooseValue: "",
    judge: ""
  },

  radioChange: function (e) {
    console.log('radio发生change事件，选择：', e.detail.value)
    this.setData({
      trueValue:this.data.myQuesList[this.data.current]["true"],
      chooseValue: e.detail.value
    })
    this.data.chooseList.push(this.data.chooseValue);
    if (this.data.chooseValue.toString() == this.data.trueValue.toString()) {
      this.setData({
        totalScore: this.data.totalScore + this.data.myQuesList[this.data.current]['scores']  // 加分操作
      })
      console.log("得分：",this.data.totalScore)
    }
  },

  bindRight: function () {//点击确认
    if (this.data.chooseValue.toString() == this.data.trueValue.toString()) {
      this.setData({
        thetrueValue: this.data.trueValue,
        judge: "正确",
      })
    } else {
      this.setData({
        thetrueValue: this.data.trueValue,
        judge: "错误",
      })
    }
  },

  bindNext: function () {//点击下一题
     // 判断是不是最后一题
     if (this.data.current < this.data.myQuesList.length - 1) {
      // 渲染下一题
      this.setData({
        current: this.data.current + 1
      })
    }
  },

  bindShowGrade:function(){
    wx.redirectTo({
      url: '../result/result?totalScore='+this.data.totalScore
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})