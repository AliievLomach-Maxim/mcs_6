import { useEffect } from 'react'

const Paginator = ({ handlePrev, isFirst, currentItem, total, handleNext, isLast }) => {
  useEffect(() => {
    console.log('isFirst', isFirst)
  }, [isFirst])

  return (
    <>
      <button onClick={handlePrev} disabled={isFirst}>
        Prev
      </button>
      <h1>
        {currentItem}/{total}
      </h1>
      <button onClick={handleNext} disabled={isLast}>
        Next
      </button>
    </>
  )
}

export default Paginator
