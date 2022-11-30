const app = Vue.createApp({
  //data, functions
  //template: `<h2>I am the template </h2>`

  data() {
    return {
      url:"https://www.thenetninja.co.uk",
      showBooks: true,
      books: [
        {
          title: 'American gods',
          author: 'Neil Geiman',
          age: '50',
          img: "assets/american-gods.webp",
          isFav: true
        },
        {
          title: 'Red rising',
          author: 'Pierce Brown',
          age: '30',
          img: "assets/red_rising.webp",
          isFav: false
        },
        {
          title: 'The Last Wish',
          author: 'Andrzej Sapkowski',
          age: '40',
          img: "assets/the_last_wish.webp",
          isFav: true
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

    },
    toggleFav(book){
      book.isFav = !book.isFav;
    }
  },
  computed: {
    filteredBooks(){
      return this.books.filter((book) => book.isFav)
    }
  }
})

app.mount('#app'); 