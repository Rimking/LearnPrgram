// conponent/my-select/my-sel.js
Component({
  properties: {

  },
  data: {
      couter:0
  },

  methods: {
    handlecouer(num){
      this.setData({
        couter:this.data.couter + num
      })
    }

  }
})
