import { createSlice } from '@reduxjs/toolkit'
import { fetchPosts } from './postsOperations'

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
      state.posts = payload
    })
  },
})
export const postsReducer = postsSlice.reducer
