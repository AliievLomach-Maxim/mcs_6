import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createArticle, deleteArticle, getArticles } from '../store/articles/articlesOperations'
import {
  selectFilteredArticles,
  // selectArticlesLoading,
  // selectArticlesError,
} from '../store/articles/articlesSlice'
import CreateArticlesForm from '../components/CreateArticlesForm/CreateArticlesForm'
import { AiFillDelete } from 'react-icons/ai'
import SearchArticlesForm from '../components/SearchForm/SearchForm'
import { fetchPosts } from '../store/posts/postsOperations'

const ArticlesPage = () => {
  // const loading = useSelector(selectArticlesLoading)
  // const error = useSelector(selectArticlesError)
  const filteredItems = useSelector(selectFilteredArticles)

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

  // const filteredItems = items.filter((el) => el.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div>
      {/* {loading && <h2>loading...</h2>}
      {error && <h2>Oops.. some error</h2>} */}
      <br />
      <button onClick={() => dispatch(fetchPosts())}>Get Posts</button>
      <br />
      <br />
      <CreateArticlesForm submit={create} />
      <br />
      <SearchArticlesForm />
      <br />
      {filteredItems?.length > 0 && (
        <ul>
          {filteredItems.map((el) => (
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
