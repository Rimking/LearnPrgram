// pages/image/image.js
Page({
  data: {

    imagePath:''

  },
  handlechosseAbum(){
    // 系统api  ，让用户在相册选择图片（或者拍照）
    wx.chooseImage({
      success:res =>{     
        // 1.取出路径
        const path = res.tempFilePaths[0]

        //2. 设置对应路径到变量
        this.setData({
          imagePath:path
        })
      }
    })

    
  }


})