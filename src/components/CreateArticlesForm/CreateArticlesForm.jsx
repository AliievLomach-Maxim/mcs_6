import { Field, Form, Formik } from 'formik'
import { useId } from 'react'

const CreateArticlesForm = ({ submit }) => {
  const titleId = useId()
  const handleSubmit = (values, actions) => {
    submit(values)
    actions.resetForm()
  }
  return (
    <Formik initialValues={{ name: '' }} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={titleId}>Title: </label>
        <Field type='text' name='name' id={titleId} />
        <br />
        <button type='submit'>Create</button>
      </Form>
    </Formik>
  )
}

export default CreateArticlesForm
