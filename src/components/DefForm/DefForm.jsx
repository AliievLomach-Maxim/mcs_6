import { useId } from 'react'

const DefForm = ({ save }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      text: e.target.elements.text.value,
      label: e.target.elements.label.value,
      password: e.target.elements.password.value,
    }
    save(data)
    e.target.reset()
  }

  const textId = useId()
  const labelId = useId()
  const passwordId = useId()

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={textId}>Label text</label>
      <input type='text' name='text' id={textId} />
      <br />
      <label htmlFor={labelId}>Label label</label>
      <input type='text' name='label' id={labelId} />
      <br />
      <label htmlFor={passwordId}>Label password</label>
      <input type='text' name='password' id={passwordId} />
      <br />
      <button type='submit'>submit</button>
    </form>
  )
}

export default DefForm
