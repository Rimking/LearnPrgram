// pages/detail/detail.js
Page({
  onLoad: function (options) {
    console.log(options);
  },
  onUnload:function(){
    // 1.获取到首页页面对象
    // getCurrentPages当前所有栈中活跃的页面
    const pages = getCurrentPages()
    const home = pages[pages.length - 2]

    // 调用页面对象的方法 
    home.setData({
      title:'你好呀'
    })

    
    

  }
})