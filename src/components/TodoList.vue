<script setup>
import { useTodoListStore } from '@/stores/todoList'
import { storeToRefs } from 'pinia'

const store = useTodoListStore()
const { todoList } = storeToRefs(store)
const { removeTodo } = store
</script>

<template>
  <ul>
    <li v-for="todo in todoList" :key="todo.id">
      {{ todo.item }}
      <button @click="removeTodo(todo.id)">Remove</button>
    </li>
  </ul>
</template>

<style scoped>
/* Your component's CSS styles go here */
</style>
