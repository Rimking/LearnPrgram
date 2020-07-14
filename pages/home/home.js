// pages/home/home.js
Page({
  data: {
    titles:['衣服','裤子','球鞋']

  },
  handleitemclik(event){
        console.log(event);
        const dataset = event.currentTarget.dataset;
        const title = dataset.item;
        const index = dataset.index;        
    console.log(title,index);
  },
  clickhdle(){
    console.log('按钮点击了');
    
  },
  handliestart(){
    console.log('handliestart');
    
  },
  handlemove(){
      console.log('handlemove');
      
  },
  handletoched(){
    console.log('handletoched');
    
  },
  longpress(){
    console.log('longpress');
    
  },
  handlebtncli(event){
        console.log('---',event);
        
  },
  // 事件冒泡和事件捕获
  handcattureleview1(){
      console.log('handcattureleview1');
  },
  handlbindeview1(){
    console.log('handlbindeview1');
    
  },
  handlecattureview2(){
    console.log('handlecattureview2');
},
handlebindview2(){
  console.log('handlebindview2');
  
},
handlecatturevie3(){
  console.log('handlecatturevie3');
},
handlebindview3(){
console.log('handlebindview3');

},

})