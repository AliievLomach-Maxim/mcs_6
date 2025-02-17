import { Field, Form, Formik } from 'formik'

const SearchForm = ({ onSearch, fetching }) => {
  return (
    <Formik
      initialValues={{
        query: '',
      }}
      onSubmit={(values, actions) => {
        onSearch(values.query)
        actions.resetForm()
      }}
    >
      <Form>
        <Field type='text' name='query' />
        <button type='submit' disabled={fetching}>
          Search
        </button>
      </Form>
    </Formik>
  )
}

export default SearchForm
