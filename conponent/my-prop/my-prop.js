// conponent/my-prop/my-prop.js
Component({

  properties: {
      // title:String
      title:{
        type:String,
        value:'我是默认标题',
        observer:function(newval,oldval){
          console.log(newval,oldval);
          
        }
      }
  },
  externalClasses:[
    'titleclass'

  ]
})
