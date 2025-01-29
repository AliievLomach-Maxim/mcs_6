import './App.css'
import data from '../data.json'
import Post from './components/Post'

function App() {
  return (
    <>
      {data.map((el) => (
        <Post title={el.title} body={el.body} key={el.id} />
      ))}
      <hr />
    </>
  )
}

export default App
