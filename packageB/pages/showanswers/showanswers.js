// packageB/pages/showanswers/showanswers.js
const app = getApp();

//var res_answers;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //成功和失败的次数
    suc: 0,
    wro: 0,
    res_answers:[],
    ec: {
    },
    background: '/pages/image/pro.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //const app = getApp();
   
    var that = this;
    
    //console.log(res_answers)
    that.setData
    ({
      res_answers: wx.getStorageSync('res_answers')
    })
    console.log(that.data.res_answers)
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
    //answers = wx.getStorageSync("answers")
   
    this.setData({
      suc: wx.getStorageSync("suc"),
      wro: wx.getStorageSync("wro")
    })

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