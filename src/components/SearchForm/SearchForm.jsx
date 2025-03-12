import { useDispatch, useSelector } from 'react-redux'
import { changeFilter, selectFilterArticles } from '../../store/filterSlice'

const SearchArticlesForm = () => {
  const dispatch = useDispatch()
  const query = useSelector(selectFilterArticles)

  const onSearch = (query) => {
    dispatch(changeFilter(query))
  }

  return (
    <label>
      Search by name:
      <br />
      <input type='text' value={query} onChange={({ target: { value } }) => onSearch(value)} />
    </label>
  )
}

export default SearchArticlesForm
