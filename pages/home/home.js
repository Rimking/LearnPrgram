// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'火狐会'
  },
  pushhandlenex(){
    wx.navigateTo({
      url: '/pages/detail/detail?o=123',
    })
  }

})