import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createArticle, deleteArticle, getArticles } from '../store/articles/articlesOptions'
import CreateArticlesForm from '../components/CreateArticlesForm/CreateArticlesForm'
import { AiFillDelete } from 'react-icons/ai'

const ArticlesPage = () => {
  const { loading, error, items, errorMessage } = useSelector((state) => state.articles)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getArticles())
  }, [dispatch])

  const create = (body) => {
    dispatch(createArticle(body))
  }

  const handleDelete = (id) => {
    dispatch(deleteArticle(id))
  }

  return (
    <div>
      <h1>ArticlesPage</h1>
      {loading && <h2>loading...</h2>}
      {error && <h2>Oops.. some error</h2>}
      {errorMessage && <h2>{errorMessage}</h2>}
      <br />
      <CreateArticlesForm submit={create} />
      <br />
      {items?.length > 0 && (
        <ul>
          {items.map((el) => (
            <li key={el.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>{el.name}</p>
              <button onClick={() => handleDelete(el.id)}>
                <AiFillDelete />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ArticlesPage
