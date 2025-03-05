import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = { lang: 'en' }

export const language = createAction('locale/language')

export const localeReducer = createReducer(initialState, (builder) => {
  builder.addCase(language, (state, action) => {
    return {
      ...state,
      lang: action.payload,
    }
  })
})
// export const localeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'language':
//       return {
//         ...state,
//         lang: action.payload,
//       }

//     default:
//       return state
//   }
// }

// export const language = (value) => ({
//   payload: value,
//   type: 'locale/language',
// })
