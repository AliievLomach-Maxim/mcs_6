import { useMemo, useState } from 'react'

const TestMemo = () => {
  const [state1, setState1] = useState(0)
  const [state2, setState2] = useState(0)
  const [state3, setState3] = useState(0)

  const getTotal = useMemo(() => {
    // for (let i = 0; i < 1000000000; i++) {}
    console.log('useMemo')
    return state1 + state2
  }, [state1, state2])

  return (
    <div>
      total: {getTotal}
      <br />
      <button
        onClick={() => {
          setState1(state1 + 1)
        }}
      >
        {state1}
      </button>
      <button
        onClick={() => {
          setState2(state2 + 1)
        }}
      >
        {state2}
      </button>
      <button
        onClick={() => {
          setState3(state3 + 1)
        }}
      >
        {state3}
      </button>
    </div>
  )
}

export default TestMemo
