import { Field, Form, Formik } from 'formik'
import { useId } from 'react'

const CreateTodoForm = ({ submit }) => {
  const titleId = useId()
  const completedId = useId()
  const handleSubmit = (values, actions) => {
    submit(values)
    actions.reset()
  }
  return (
    <Formik initialValues={{ title: '', completed: false }} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={titleId}>Title: </label>
        <Field type='text' name='title' id={titleId} />
        <br />
        <label htmlFor={completedId}>Is completed?</label>
        <Field type='checkbox' name='completed' id={completedId} />
        <button type='submit'>Create</button>
      </Form>
    </Formik>
  )
}

export default CreateTodoForm
