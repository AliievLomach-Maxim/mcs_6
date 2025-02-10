import { useId, useState } from 'react'

const defState = { name: '', password: '' }

const ControlledForm = ({ save }) => {
  const [formState, setFormState] = useState(defState)

  const handleChange = ({ target: { value, name } }) => {
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    save(formState)
    setFormState(defState)
  }

  const nameId = useId()
  const passwordId = useId()

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={nameId}>Name:</label>
        <input type='text' id={nameId} value={formState.name} name='name' onChange={handleChange} />
      </div>
      <div>
        <label htmlFor={passwordId}>Password:</label>
        <input
          type='password'
          id={passwordId}
          value={formState.password}
          name='password'
          onChange={handleChange}
        />
      </div>
      <button type='submit'>Save</button>
    </form>
  )
}

export default ControlledForm
