//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    addition:[
      {
        question:"1+1=?",
        option:{
          A:"1",
          B:"2",
          C:"3",
          D:"4",
        },
        true:"B",
        scores:1,
        checked:false
      },
      {
        question:"2+3=?",
        option:{
          A:"2",
          B:"3",
          C:"4",
          D:"5",
        },
        true:"D",
        scores:1,
        checked:false
      },
      {
        question:"5+4=?",
        option:{
          A:"4",
          B:"5",
          C:"9",
          D:"10",
        },
        true:"C",
        scores:1,
        checked:false
      },
      {
        question:"20+13=?",
        option:{
          A:"33",
          B:"23",
          C:"17",
          D:"13",
        },
        true:"A",
        scores:1,
        checked:false
      },
    ],
    multiplication:[
        {
          question:"1*3=?",
          option:{
            A:"1",
            B:"3",
            C:"4",
            D:"2",
          },
          true:"B",
          scores:1,
          checked:false
        },
        {
          question:"3*4=?",
          option:{
            A:"1",
            B:"7",
            C:"8",
            D:"12",
          },
          true:"D",
          scores:1,
          checked:false
        },
        {
          question:"6*9=?",
          option:{
            A:"18",
            B:"30",
            C:"54",
            D:"63",
          },
          true:"C",
          scores:1,
          checked:false
        },
        {
          question:"13*3=?",
          option:{
            A:"13",
            B:"16",
            C:"26",
            D:"39",
          },
          true:"D",
          scores:1,
          checked:false
        },

    ]

  }
})