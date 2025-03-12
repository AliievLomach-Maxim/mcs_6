import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://64689aefe99f0ba0a8286f54.mockapi.io/'

export const getArticles = createAsyncThunk('getArticles/articles', async () => {
  const { data } = await axios('articles')
  return data
})

export const createArticle = createAsyncThunk('createArticle/articles', async (body) => {
  const { data } = await axios.post('articles', body)
  return data
})

export const deleteArticle = createAsyncThunk('deleteArticle/articles', async (id) => {
  const { data } = await axios.delete(`articles/${id}`)
  return data
})
