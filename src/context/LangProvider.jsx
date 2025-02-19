import { createContext, useContext, useState } from 'react'

const langContext = createContext()

export const useLangContext = () => useContext(langContext)

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('ua')
  const changeLang = (value) => {
    setLang(value)
  }

  return (
    <langContext.Provider
      value={{
        lang,
        changeLang,
      }}
    >
      {children}
    </langContext.Provider>
  )
}

export default LangProvider
