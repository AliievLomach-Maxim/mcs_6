import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useId } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import * as Yup from 'yup'

const customSchema = Yup.object().shape({
  name: Yup.string().min(3, 'asd').max(5).required('required'),
  password: Yup.string().min(8, 'min length 8 el').required('required'),
  color: Yup.string().oneOf(['blue', 'red', 'green']).required(),
})

const FormikForm = ({ save }) => {
  const nameId = useId()
  const passwordId = useId()

  const handleSubmit = (values, actions) => {
    save(values)
    actions.resetForm()
  }

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          password: '',
          color: 'blue',
        }}
        onSubmit={handleSubmit}
        validationSchema={customSchema}
      >
        <Form>
          <div>
            <label htmlFor={nameId}>Name:</label>
            <Field type='text' name='name' id={nameId} />
            <ErrorMessage name='name' component='span' className='qwerty' />
          </div>
          <div>
            <label htmlFor={passwordId}>Password:</label>
            <Field type='password' id={passwordId} name='password' />
            <ErrorMessage name='password' component='span' className='qwerty' />
          </div>
          <Field as='select' name='color'>
            <option value='red'>Red</option>
            <option value='green'>Green</option>
            <option value='blue'>Blue</option>
          </Field>
          <br />
          <button type='submit'>
            <BiSearchAlt color='red' />
            <br />
            Save
          </button>
        </Form>
      </Formik>
    </>
  )
}

export default FormikForm
// {
//   ;({ values }) => (
//     <Form>
//       <div>
//         <label htmlFor={nameId}>Name:</label>
//         <Field type='text' name='name' id={nameId} />
//         {/* <input type='text' value={values.name} onChange={handleChange} name='name' /> */}
//       </div>
//       <div>
//         <label htmlFor={passwordId}>Password:</label>
//         <Field type='password' id={passwordId} name='password' />
//       </div>
//       <Field as='select' name='color'>
//         <option value='red'>Red</option>
//         <option value='green'>Green</option>
//         <option value='blue'>Blue</option>
//       </Field>
//       <br />
//       <button type='submit'>
//         <BiSearchAlt color={values.color} />
//         <br />
//         Save
//       </button>
//     </Form>
//   )
// }
