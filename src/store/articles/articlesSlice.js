import { createSlice } from '@reduxjs/toolkit'
import { createArticle, deleteArticle, getArticles } from './articlesOptions'

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    items: [],
    loading: false,
    error: false,
    errorMessage: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.fulfilled, (state, { payload }) => {
        state.items = payload
      })
      .addCase(createArticle.fulfilled, (state, { payload }) => {
        state.items.push(payload)
      })
      .addCase(deleteArticle.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((el) => el.id !== payload.id)
      })
      // .addCase(updateArticle.fulfilled, (state, { payload }) => {
      //   state.items.push(payload)
      // })
      .addMatcher(
        ({ type }) => type.endsWith('/pending'),
        (state) => {
          state.loading = true
          state.error = false
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/rejected'),
        (state) => {
          state.error = true
          state.loading = false
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/fulfilled'),
        (state) => {
          state.loading = false
        }
      )
    // builder
    //   .addCase(getArticles.pending, (state) => {
    //     state.loading = true
    //   })
    //   .addCase(getArticles.fulfilled, (state, { payload }) => {
    //     state.items = payload
    //     state.loading = false
    //   })
    //   .addCase(getArticles.rejected, (state, action) => {
    //     state.error = true
    //     state.loading = false
    //     // state.errorMessage = payload
    //     state.errorMessage = action.error.message
    //   })
    //   .addCase(createArticle.pending, (state) => {
    //     state.loading = true
    //   })
    //   .addCase(createArticle.fulfilled, (state, { payload }) => {
    //     state.items.push(payload)
    //     state.loading = false
    //   })
    //   .addCase(createArticle.rejected, (state) => {
    //     state.error = true
    //     state.loading = false
    //   })
    //   .addCase(deleteArticle.pending, (state) => {
    //     state.loading = true
    //   })
    //   .addCase(deleteArticle.fulfilled, (state, { payload }) => {
    //     state.items.push(payload)
    //     state.loading = false
    //   })
    //   .addCase(deleteArticle.rejected, (state) => {
    //     state.error = true
    //     state.loading = false
    //   })
  },
})

export const articlesReducer = articlesSlice.reducer
