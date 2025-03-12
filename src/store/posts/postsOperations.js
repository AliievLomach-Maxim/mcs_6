import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPosts = createAsyncThunk('posts/fetch', () => {
  const { data } = axios('/posts')
  return data
})
