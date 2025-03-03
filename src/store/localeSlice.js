const initialState = { lang: 'en' }

export const localeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'language':
      return {
        ...state,
        lang: action.payload,
      }

    default:
      return state
  }
}

export const language = (value) => ({
  payload: value,
  type: 'locale/language',
})
