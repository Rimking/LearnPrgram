// pages/home/home.js

//getApp()获取App()产生的示例对象
// const app =getApp()

//获取到数据后可以在 Page 中使用     
// const name = app.globot.name;
// const age = app.globot.age;


// 调用Page   一般称为  注册
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

  },
  ClickBtn(event){
    // console.log('123');
    // console.log(event);
    // console.log(name); 


    
  }



})