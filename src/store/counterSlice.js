import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 1000,
  },
  reducers: {
    increment: (state, { payload }) => {
      state.value = state.value + payload
      // state.value++
    },
    decrement: (state, { payload }) => {
      state.value = state.value - payload
    },
  },
})
export const counterReducer = counterSlice.reducer
export const { decrement, increment } = counterSlice.actions

// const initialState = {
//   value: 1000,
// }

// export const increment = createAction('counter/increment')
// export const decrement = createAction('counter/decrement')

// export const counterReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(increment, (state, action) => {
//       return {
//         ...state,
//         value: state.value + action.payload,
//       }
//     })
//     .addCase(decrement, (state, action) => {
//       return {
//         ...state,
//         value: state.value - action.payload,
//       }
//     })
// })

// export const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'counter/increment':
//       return {
//         ...state,
//         value: state.value + action.payload,
//       }
//     case 'counter/decrement':
//       return {
//         ...state,
//         value: state.value - action.payload,
//       }
//     default:
//       return state
//   }
// }

// export const increment = (value) => ({
//   payload: value,
//   type: 'counter/increment',
// })

// export const decrement = (value) => ({
//   payload: value,
//   type: 'counter/decrement',
// })
