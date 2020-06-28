// pages/select/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectQuestionMenu:'请选择',
    objectQuestionMenu:{},
    questionMenu: [
    '变电检修',
    '变电运维',
    '大客户及电费',
    '低压配电',
    '高压配电',
    '管理人员',
    '调控专业',
    '线路专业',
    '信通专业', 
    '党、政、团、财务等'
    ],
    index: 0,
  },

  onLoad (e) {
  },

  /**
   * 选择题库
   */
  changeMenu (e){
    console.log(e);
    this.setData({
      index:e.detail.value,
      selectQuestionMenu: this.data.questionMenu[e.detail.value]
     
    })
    
  },

  /**
   * 开始答题
   */
  startAnswer (e){
    if (this.data.selectQuestionMenu == '请选择'){
      wx.showToast({
        title: '请选择题目',
        duration:1500,
        image:'/images/warning.png'
      })
      return;
    }

    console.log(this.data.selectQuestionMenu)
    var app = getApp()
    app.globalData.user_type = this.data.selectQuestionMenu

    wx.navigateTo({
      url: '../index/index'
    })
  }
})