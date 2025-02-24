import { useEffect, useState } from 'react'
import { fetchProducts } from '../api/products'
import Product from '../components/Product/Product'

const ProductsPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchProducts()
      setData(res)
    }
    fetchData()
  }, [])

  return <div>{data.length > 0 && data.map((el) => <Product product={el} key={el.id} />)}</div>
}

export default ProductsPage
