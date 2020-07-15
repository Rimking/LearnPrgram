// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    couter:0

  },
  handleincrement(event){  
    console.log(event);
    
    this.setData({
        couter:this.data.couter+1
    }) 
  },
  tabcontre(event){
      console.log(event);
      
  },
  handleincremen(){
    // 最终目的是修改组件内的数据
      const my_sel = this.selectComponent('#sel-id')

      // 此时修改数据不是this 而是对应的组件  代表修改的是组件
      // my_sel.setData({
      //   couter:my_sel.data.couter + 20
      // })

      // 通过方法来修改

      my_sel.handlecouer(10)

  }
})