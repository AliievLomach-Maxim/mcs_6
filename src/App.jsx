// import { useEffect, useState } from 'react'

// // StrictMode > App (mounting) > App (unmounting) > App DOM (mounting)

// const getDefaultValue = () => {
//   const localData = localStorage.getItem('counter')
//   if (localData) {
//     return JSON.parse(localData)
//   }
//   return 123
// }

// const App = () => {
//   const [counter, setCounter] = useState(getDefaultValue)

//   const [counter2, setCounter2] = useState(100)

//   // useEffect(() => {
//   //   const localData = localStorage.getItem('counter')
//   //   if (localData) {
//   //     setCounter(JSON.parse(localData))
//   //   }
//   // }, [])

//   useEffect(() => {
//     // if (counter !== 0)
//     localStorage.setItem('counter', counter)
//   }, [counter])

//   return (
//     <div>
//       <button onClick={() => setCounter(counter + 1)}>{counter}</button>
//       <br />
//       <button onClick={() => setCounter2(counter2 + 1)}>{counter2}</button>
//       <hr />
//       <hr />
//     </div>
//   )
// }

// export default App
// const App = () => {
//   const [counter, setCounter] = useState(0)
//   const [counter2, setCounter2] = useState(100)
//   const [isShowTimer, setIsShowTimer] = useState(false)

//   // mounting
//   useEffect(() => {
//     console.log('mounting')
//   }, [])

//   // mounting + update
//   useEffect(() => {
//     console.log('mounting + update', counter)
//   }, [counter])

//   // update
//   useEffect(() => {
//     if (counter !== 0) console.log('update counter', counter)
//   }, [counter])

//   // // update
//   // useEffect(() => {
//   //   console.log('mounting + update', counter)
//   //   if (counter !== 0) {
//   //     console.log('update counter', counter)
//   //   }
//   // }, [counter])

//   // update
//   useEffect(() => {
//     if (counter2 !== 100) console.log('update counter2', counter2)
//   }, [counter2])

//   return (
//     <div>
//       <button onClick={() => setCounter(counter + 1)}>{counter}</button>
//       <br />
//       <button onClick={() => setCounter2(counter2 + 1)}>{counter2}</button>
//       <hr />
//       <hr />
//       <hr />
//       <button onClick={() => setIsShowTimer(!isShowTimer)}>toggle</button>
//       {isShowTimer && <Timer />}
//     </div>
//   )
// }

// export default App
import { useEffect, useState } from 'react'
import posts from '../data.json'
import Paginator from './components/Paginator/Paginator'
import Post from './components/Post/Post'

const getDefaultPage = () => {
  const localPage = localStorage.getItem('postNumber')
  if (localPage) return JSON.parse(localPage)
  return 1
}

const App = () => {
  const [postNumber, setPostNumber] = useState(getDefaultPage)

  const handleNext = () => {
    setPostNumber(postNumber + 1)
  }

  const handlePrev = () => {
    setPostNumber(postNumber - 1)
  }

  const isFirst = postNumber === 1
  const isLast = postNumber === posts.length

  const curPost = posts[postNumber - 1]

  useEffect(() => {
    localStorage.setItem('postNumber', postNumber)
  }, [postNumber])

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
