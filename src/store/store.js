import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import { counterReducer } from './counterSlice'
import { localeReducer } from './localeSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
  locale: localeReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'increment':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value + action.payload,
//         },
//       }
//     case 'decrement':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value - action.payload,
//         },
//       }
//     case 'language':
//       return {
//         ...state,
//         locale: {
//           ...state.locale,
//           lang: action.payload,
//         },
//       }

//     default:
//       return state
//   }
// }
