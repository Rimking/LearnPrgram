// conponent/w-tabcon/w-tabcon.js
Component({
  properties: {
    titles:{
      type:Array,
      value:[]
    }

  },
  data: {
    current:0

  },

  methods: {
    handleitclick(event){
        const index = event.currentTarget.dataset.index;
        this.setData({
          current:index
        })
        
        // 告诉外界发生了点击
        this.triggerEvent('itemclick',
        {index,title:this.properties.titles[index]},
        {})

    }

  }
})
