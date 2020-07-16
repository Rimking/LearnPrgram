// pages/home/home.js
Page({
  data: {

  },
  onLoad: function (options) {

    //发送网络请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success:function(res){
    //       console.log(res);
          
    //   }
    // })

    // 模拟网络请求 
    wx.request({
      url: 'http://httpbin.org/post',
      method:'post',
      data:{
        name:'aYao',
        age:18
      },
      success:function(res){
        console.log(res);
        
      }
    })


    
  }
})