import { useLangContext } from '../../context/LangProvider'

const TestContext2 = () => {
  const { lang } = useLangContext()

  return <div>Current Lang: {lang} </div>
}

export default TestContext2
