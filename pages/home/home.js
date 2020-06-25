// pages/home/home.js
Page({
  data:{
    name:'aY',
    counter:0,
    students:[
      {id:11,name:'kebe',age:30},
      {id:13,name:'zms',age:35},
      {id:12,name:'md',age:21},
    ]
  },
  handleBtnclick(){
    // 错误的做法：界面不会发生变化
      //   this.data.counter += 1

      // this.setDate()
      this.setData({
        counter:this.data.counter + 1
      })


  },
  handleBtnJ(){
     // this.setDate()
     this.setData({
      counter:this.data.counter - 1
    })

  }



})