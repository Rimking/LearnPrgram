// conponent/my-event/my-event.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleincrement(){
     this.triggerEvent('increment',{
       name:'aYao',age:18
     },{})
      
    }

  }
})
