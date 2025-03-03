const initialState = {
  value: 1000,
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'counter/increment':
      return {
        ...state,
        value: state.value + action.payload,
      }
    case 'counter/decrement':
      return {
        ...state,
        value: state.value - action.payload,
      }
    default:
      return state
  }
}

export const increment = (value) => ({
  payload: value,
  type: 'counter/increment',
})

export const decrement = (value) => ({
  payload: value,
  type: 'counter/decrement',
})
