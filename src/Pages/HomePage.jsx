import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, language } from '../store/store'

const HomePage = () => {
  const value = useSelector((state) => state.counter.value)
  const lang = useSelector((state) => state.locale.lang)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment(100))
  }

  const handleIncrement2 = () => {
    dispatch(increment(10000))
  }

  const handleDecrement = () => {
    dispatch(decrement(500))
  }

  const handleChangeLang = ({ target: { value } }) => {
    dispatch(language(value))
  }

  return (
    <div>
      <button onClick={handleIncrement}>increment</button>
      <h1>{value}</h1>
      <button onClick={handleDecrement}>decrement</button>
      <br />
      <br />
      <br />
      <button onClick={handleIncrement2}>increment 2</button>
      <br />
      <br />
      <select value={lang} onChange={handleChangeLang}>
        <option value='en'>EN</option>
        <option value='ua'>UA</option>
      </select>
    </div>
  )
}

export default HomePage
