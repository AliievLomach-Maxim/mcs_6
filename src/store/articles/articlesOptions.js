import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://64689aefe99f0ba0a8286f54.mockapi.io/'

// 1. Oops.some err
// state.error type Boolean
export const getArticles = createAsyncThunk('articles/getArticles', async () => {
  const { data } = await axios('articles')
  return data
})

// 2. Response 404
// state.error type String
// state.error = action.error (payload = undefined)
// export const getArticles = createAsyncThunk('articles/getArticles', async () => {
//   const { data } = await axios('articlesasd')
//   return data
// })

// 3. response: "Not found"
// state.error = action.payload
// return rejectWithValue(error.response.data)

// export const getArticles = createAsyncThunk('articles/getArticles', async (_, thunkAPI) => {
//   try {
//     const { data } = await axios('articlesasd')
//     return data
//   } catch (error) {
//      return thunkAPI.rejectWithValue(error.response.data)
//   }
// })

export const createArticle = createAsyncThunk('articles/createArticle', async (body) => {
  const { data } = await axios.post('articles', body)
  return data
})

export const deleteArticle = createAsyncThunk('articles/deleteArticle', async (id) => {
  const { data } = await axios.delete(`articles/${id}`)
  return data
})
