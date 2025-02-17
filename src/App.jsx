import { useEffect, useState } from 'react'
import { fetchArticles } from './api/articles'
import SearchForm from './components/SearchForm/SearchForm'

const App = () => {
  const [hits, setHits] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const [page, setPage] = useState(0)

  const handleSearch = (query) => {
    setSearchQuery(query)
    setPage(0)
    setHits([])
  }

  useEffect(() => {
    if (!searchQuery) return

    const fetching = async () => {
      try {
        setIsLoading(true)
        setError(false)
        // setHits([])
        const res = await fetchArticles(searchQuery, page)
        // setHits(...hits,...res)
        setHits((prevHits) => [...prevHits, ...res])
      } catch (error) {
        console.error(error)
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetching()
  }, [searchQuery, page])

  const handleLoadMore = async () => {
    setPage(page + 1)
  }

  return (
    <div>
      <SearchForm onSearch={handleSearch} fetching={isLoading} />

      {error && <b>Oops...some error. pls reload.</b>}
      {hits.length > 0 && (
        <ul>
          {hits.map((el) => (
            <li key={el.objectID}>
              <a href={el.url}>{el.title}</a>
              <br />
            </li>
          ))}
        </ul>
      )}
      {isLoading && <b>Loading....</b>}
      {hits.length > 0 && <button onClick={handleLoadMore}>load more</button>}
    </div>
  )
}

export default App

// useEffect(() => {
//   const fetching = async () => {
//     const res = await fetchArticles()
//     setHits(res)
//   }

//   fetching()
// }, [])
