// pages/begin/begin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectorItems:["加法题","乘法题"],
  },

  selectorChange:function(e){
    let i = e.detail.value;
    let value = this.data.selectorItems[i];
    this.setData({selector:value});
    if(value=="加法题"){
      wx.redirectTo({   //页面
        url: '../addition/addition',
      })
    }else{
    wx.redirectTo({   //页面
      url: '../multiplication/multiplication',
    })}
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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