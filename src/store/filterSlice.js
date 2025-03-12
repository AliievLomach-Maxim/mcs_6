import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filterArticles',
  initialState: {
    query: '',
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.query = payload
    },
  },
})

export const filterReducer = filterSlice.reducer
export const { changeFilter } = filterSlice.actions

export const selectFilterArticles = (state) => {
  return state.filter.query
}

// export const selectFilterA = (state) => {
//   return state.filter.a
// }

// export const selectFilterB = (state) => {
//   return state.filter.b
// }

// export const selectFilterSum = (state) => {
//   return state.filter.a + state.filter.b
// }
