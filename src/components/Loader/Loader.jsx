import { useSelector } from 'react-redux'
import { selectLoading } from '../../store/rootSlice'

const Loader = () => {
  const loading = useSelector(selectLoading)
  return loading && <div>Loader.....</div>
}

export default Loader
