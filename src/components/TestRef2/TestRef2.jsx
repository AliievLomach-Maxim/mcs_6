import { useEffect, useRef } from 'react'
import { useState } from 'react'

const TestRef2 = () => {
  const [counter, setCounter] = useState(0)

  const id = useRef()

  useEffect(() => {
    id.current = setInterval(() => {
      console.log(new Date().getTime())
    }, 1000)

    return () => {
      clearInterval(id.current)
    }
  }, [])

  const handleStop = () => {
    console.log('id', id.current)
    clearInterval(id.current)
  }

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <button onClick={handleStop}>Stop interval</button>
      <br />
    </div>
  )
}

export default TestRef2
// import { useRef } from 'react'
// import { useState } from 'react'

// const TestRef2 = () => {
//   const [counter, setCounter] = useState(0)
//   const date = useRef(new Date())

//   return (
//     <div>
//       <button onClick={() => setCounter(counter + 1)}>{counter}</button>
//       <br />
//       date:{date.current.getTime()}
//     </div>
//   )
// }

// export default TestRef2
