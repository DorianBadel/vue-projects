const app = Vue.createApp({
  //data, functions
  //template: `<h2>I am the template </h2>`

  data() {
    return {
      showBooks: true,
      title: 'American gods',
      author: 'Neil Geiman',
      age: '50',
      x: 0,
      y: 0,
    }
  },
  methods: {
    changeTitle(title){
      this.title = title
    },
    toggleBooks(){
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data){
      console.log(e,e.type);
      if(data){
        console.log(data);
      }
    },
    handleMousemove(e){
      this.x = e.offsetX;
      this.y = e.offsetY;

    }
  }
})

app.mount('#app'); 