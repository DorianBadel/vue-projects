<template>
  <h1>{{title}}</h1>
  <button @click.shift="toggleModal">Open modal [shift+click]</button>
  <div v-if="showModal">
    <Modal :theme="theme" @closeModal="toggleModal">
      <h1>Simple modal</h1>
      <p>Modal content</p>
    </Modal>
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
