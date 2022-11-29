const app = Vue.createApp({
  //data, functions
  //template: `<h2>I am the template </h2>`

  data() {
    return {
      showBooks: true,
      books: [
        {
          title: 'American gods',
          author: 'Neil Geiman',
          age: '50'
        },
        {
          title: 'Red rising',
          author: 'Pierce Brown',
          age: '30'
        },
        {
          title: 'The Last Wish',
          author: 'Andrzej Sapkowski',
          age: '40'
        }
      ],      
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