// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    var that = this
    wx.getUserInfo({
      success(res) {
        that.setData({
          userInfo:res.userInfo
        })
      }
    })
  },
  onShareAppMessage(){
    
    
    return {
      title: '安规普考小程序',
      imageUrl:'/images/logo.png',
      success: (res) => { 
        wx.switchTab({
          url: '../my/my'
        })
      },
    }
   
    
  },
  about() {
    wx.showModal({
      title: '关于',
      content: '本程序为开发版本2020-04-27',
      showCancel: false
    })
  }
})