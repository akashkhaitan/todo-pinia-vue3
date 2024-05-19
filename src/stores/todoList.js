import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', () => {
  const todoList = ref([])

  const id = ref(0)

  const addTodo = (item) => {
    todoList.value = [...todoList.value, { item: item, id: id.value++, completed: false }]
  }

  const removeTodo = (id) => {
    todoList.value = todoList.value.filter((todo) => {
      return todo.id !== id
    })
  }

  return { addTodo, todoList, removeTodo }
})
