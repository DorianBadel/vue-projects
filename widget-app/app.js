const app = Vue.createApp({
  //data, functions
  //template: `<h2>I am the template </h2>`

  data() {
    return {
      showBooks: true,
      title: 'American gods',
      author: 'Neil Geiman',
      age: '50'
    }
  },
  methods: {
    changeTitle(title){
      this.title = title
    },
    toggleBooks(){
      this.showBooks = !this.showBooks;
    }
  }
})

app.mount('#app'); 