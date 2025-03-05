import { createSlice } from '@reduxjs/toolkit'
import defaultTodos from '../../data.json'

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todo: defaultTodos,
  },
  reducers: {
    addTodo: (state, { payload }) => {
      state.todo.push(payload)
    },
    removeTodo: (state, { payload }) => {
      state.todo = state.todo.filter((el) => el.id !== payload)
    },
    changeStatusTodo: (state, { payload }) => {
      state.todo = state.todo.map((el) =>
        el.id === payload ? { ...el, completed: !el.completed } : el
      )
    },
  },
})

export const todoReducer = todoSlice.reducer
export const { addTodo, changeStatusTodo, removeTodo } = todoSlice.actions
