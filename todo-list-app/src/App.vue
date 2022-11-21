<!-- vbase-ns -->

<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo"/>
      <h1>{{taskStore.name}}</h1>
    </header>

    <div class="new-task-form">
      <TaskForm/>
    </div>

    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>

    </nav>

    <div class="loading" v-if="loading">Loading tasks...</div>

    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{totalCount}} tasks left to do</p>
      <div v-for="task in tasks">
        <TaskDetails :task="task"/>      
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{favCount}} favourite tasks</p>
      <div v-for="task in favs">
        <TaskDetails :task="task"/>      
      </div>
    </div>

    <button @click="taskStore.$reset">Reset state</button>

  </main>
</template>

<script>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import TaskDetails from './components/TaskDetails.vue'
import TaskForm from './components/TaskForm.vue'
import { useTaskStore } from './stores/TaskStore'
  export default {
    components: { TaskDetails, TaskForm },

    setup(){
      const taskStore = useTaskStore()

      const {tasks, loading, favs, totalCount, favCount } =
       storeToRefs(taskStore)

      taskStore.getTasks()
      const filter = ref('all');

      return {taskStore, filter, tasks, loading, favs, totalCount, favCount}
    }
    
  }
</script>