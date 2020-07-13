// pages/home/home.js
Page({

  data: {
    isactive:false,
    ishow:true,
    isarr:['1','2','3','4','5'],
    arr:[
    ['1','2','3'],
    ['1','2','3']
    ['1','2','3']
    ] 

  },
  hadleqh(){
    this.setData({
      isactive:!this.data.isactive
    })
  },
  hadlebtn(){
    this.setData({
      ishow:!this.data.ishow
    }) 
   }



})