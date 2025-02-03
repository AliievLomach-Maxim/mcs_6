import { useState } from 'react'
import posts from '../data.json'
import Paginator from './components/Paginator/Paginator'
import Post from './components/Post/Post'

const App = () => {
  const [postNumber, setPostNumber] = useState(1)

  // const handleNext = () => {
  //   if (postNumber === posts.length) setPostNumber(1)
  //   else setPostNumber(postNumber + 1)
  // }
  const handleNext = () => {
    setPostNumber(postNumber + 1)
  }

  const handlePrev = () => {
    setPostNumber(postNumber - 1)
  }

  const isFirst = postNumber === 1
  const isLast = postNumber === posts.length

  const curPost = posts[postNumber - 1]

  return (
    <div>
      <Paginator
        handleNext={handleNext}
        handlePrev={handlePrev}
        isFirst={isFirst}
        isLast={isLast}
        currentItem={postNumber}
        total={posts.length}
      />
      <hr />
      <Post body={curPost.body} title={curPost.title} />
    </div>
  )
}

export default App
// import { useState } from 'react'

// const Clicker = ({ children, toChangeClicks, value }) => {
//   return (
//     <button onClick={toChangeClicks}>
//       {children}: {value}
//     </button>
//   )
// }
// //
// const App = () => {
//   const [clicks, setClicks] = useState({
//     value1: 0,
//     value2: 10,
//   })

//   const handleClick = (key) => {
//     setClicks({
//       ...clicks,
//       [key]: clicks[key] + 1,
//     })
//   }

//   return (
//     <div>
//       <Clicker value={clicks.value1} toChangeClicks={() => handleClick('value1')}>
//         Click 1
//       </Clicker>
//       <Clicker value={clicks.value2} toChangeClicks={() => handleClick('value2')}>
//         Click 2
//       </Clicker>
//       <hr />
//       <h1>Total:{clicks.value1 + clicks.value2}</h1>
//     </div>
//   )
// }

// export default App
// Підняття стану
// import { useState } from 'react'

// const Clicker = ({ children, toChangeClicks, counter }) => {
//   return (
//     <button onClick={toChangeClicks}>
//       {children}: {counter}
//     </button>
//   )
// }
// //
// const App = () => {
//   const [clicks, setClicks] = useState(0)

//   const handleClick = () => {
//     setClicks(clicks + 1)
//   }
//   return (
//     <div>
//       <Clicker counter={clicks} toChangeClicks={handleClick}>
//         Click 1
//       </Clicker>
//       <Clicker counter={clicks} toChangeClicks={handleClick}>
//         Click 2
//       </Clicker>
//       <h1>Total:{clicks}</h1>
//       <hr />
//       {/* <button onClick={handleClick}>clicks: {counter}</button> */}
//     </div>
//   )
// }

// export default App
