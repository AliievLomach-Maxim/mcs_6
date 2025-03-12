import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    loading: false,
    error: false,
  },
  //   reducers:{
  //     changeLoading:(state,{payload})=>{
  //         state.loading = payload
  //     }
  //   },
  extraReducers: (builder) => {
    builder
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
  },
})
export const rootReducer = rootSlice.reducer

export const selectLoading = (state) => {
  return state.root.loading
}
export const selectError = (state) => {
  return state.root.error
}
