<template>
  <h1>{{title}}</h1>
  <button @click.shift="toggleModal">Open modal [shift+click]</button>
  <div v-if="showModal">
    <Modal :header="header" :text="text" :theme="theme" @closeModal="toggleModal"/>    
  </div>
</template>

<script>
import Modal from './components/Modal'

export default {
  name: "App",
  components: { Modal },

  data(){
    return{
      title: 'A new Vue App',
      header: 'Simple modal',
      text: 'Modal content',
      theme: 'sale',
      showModal: false,
    };
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display:inline-block;
  padding-bottom: 10px;
}
button {
  margin: auto;
  display: block;
}
</style>
