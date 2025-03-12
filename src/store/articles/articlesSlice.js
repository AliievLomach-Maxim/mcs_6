import { createSelector, createSlice } from '@reduxjs/toolkit'
import { createArticle, deleteArticle, getArticles } from './articlesOperations'
import { selectFilterArticles } from '../filterSlice'

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    items: [],
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
    // .addMatcher(
    //   ({ type }) => type.endsWith('articles/pending'),
    //   (state) => {
    //     state.loading = true
    //     state.error = false
    //   }
    // )
    // .addMatcher(
    //   ({ type }) => type.endsWith('articles/rejected'),
    //   (state) => {
    //     state.error = true
    //     state.loading = false
    //   }
    // )
    // .addMatcher(
    //   ({ type }) => type.endsWith('articles/fulfilled'),
    //   (state) => {
    //     state.loading = false
    //   }
    // )
  },
})

export const articlesReducer = articlesSlice.reducer

export const selectArticles = (state) => {
  return state.articles.items
}
// export const selectArticlesLoading = (state) => {
//   return state.articles.loading
// }
// export const selectArticlesError = (state) => {
//   return state.articles.error
// }
// export const selectFilteredArticles = (state) => {
//   const items = selectArticles(state)
//   const query = selectFilterArticles(state)
//   console.log('selectFilteredArticles')

//   return items.filter((el) => el.name.toLowerCase().includes(query.toLowerCase()))
// }

export const selectFilteredArticles = createSelector(
  [selectArticles, selectFilterArticles],
  (items, query) => {
    return items.filter((el) => el.name.toLowerCase().includes(query.toLowerCase()))
  }
)
