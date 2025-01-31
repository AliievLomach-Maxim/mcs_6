import css from './App.module.css'
import clsx from 'clsx'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import Icon from './assets/react.svg'

const isActive = false

function App() {
  return (
    <>
      <img src={Icon} alt='' />
      <h1 className={clsx(css.title, isActive && css.active)}>Hello</h1>
      <Button>Click</Button>
      <br />
      <Button variant='primary'>Click 2</Button>
      <br />
      <Button>Click 3</Button>
      <hr />
      <hr />
      <Card>
        <h1>Hello</h1>
      </Card>
      <Card>
        <Button>Click</Button>
        <br />
        <Button variant='primary'>Click 2</Button>
        <br />
        <Button>Click 3</Button>
      </Card>

      <hr />
      <hr />

      {/* <Post title={'qwe'} body={'asd'} /> */}
    </>
  )
}

export default App
// import './App.css'
// import data from '../data.json'

// function App() {
//   return (
//     <>
//       {data.map((el) => (
//         <Post title={el.title} body={el.body} key={el.id} />
//       ))}
//       <hr />
//     </>
//   )
// }

// export default App
