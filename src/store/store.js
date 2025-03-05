import { counterReducer } from './counterSlice'
import { localeReducer } from './localeSlice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoSlice'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfigLang = {
  key: 'lang',
  storage,
}

const persistConfigCounter = {
  key: 'counter',
  storage,
}

const localePersistedReducer = persistReducer(persistConfigLang, localeReducer)
const counterPersistedReducer = persistReducer(persistConfigCounter, counterReducer)

const rootReducer = {
  counter: counterPersistedReducer,
  locale: localePersistedReducer,
  todos: todoReducer,
}

export const store = configureStore({
  reducer: rootReducer,
})

export const persistor = persistStore(store)
// const rootReducer = combineReducers({
//   counter: counterReducer,
//   locale: localeReducer,
//   todos: todoReducer,
// })

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//   reducer: persistedReducer,
// })

// export const persistor = persistStore(store)
