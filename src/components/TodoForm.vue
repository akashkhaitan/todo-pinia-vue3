<script setup>
import { ref } from 'vue'
import { useTodoListStore } from '@/stores/todoList'

const todoItem = ref('')

const store = useTodoListStore()

const handleAddTodo = (item) => {
  store.addTodo(item)
  todoItem.value = ''
}
</script>

<template>
  <div>
    <input type="text" v-model="todoItem" />
    <button @click="handleAddTodo(todoItem)">Add</button>
  </div>
</template>

<style scoped>
/* Your component's CSS styles go here */
</style>
