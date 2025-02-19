import { useLangContext } from '../../context/LangProvider'

const TestContext = () => {
  const ctx = useLangContext()

  const handleChange = ({ target: { value } }) => {
    ctx.changeLang(value)
  }
  return (
    <div>
      <select value={ctx.lang} onChange={handleChange}>
        <option value='en'>EN</option>
        <option value='ua'>UA</option>
      </select>
    </div>
  )
}

export default TestContext
