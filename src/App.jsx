// import ControlledForm from './components/ControlledForm/ControlledForm'
import FormikForm from './components/FormikForm/FormikForm'
// import DefForm from './components/DefForm/DefForm'

const App = () => {
  // const sendToFirstApi = (data) => {
  //   console.log('sendToFirstApi', data)
  // }
  // const sendToSecondApi = (data) => {
  //   console.log('sendToSecondApi', data)
  // }

  const onSave = (data) => {
    console.log('data', data)
  }

  return (
    <div>
      {/* <ControlledForm save={onSave} /> */}
      <FormikForm save={onSave} />

      {/* <DefForm save={sendToFirstApi} />
      <DefForm save={sendToSecondApi} /> */}
    </div>
  )
}

export default App
