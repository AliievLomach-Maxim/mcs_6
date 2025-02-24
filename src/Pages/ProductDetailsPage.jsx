import { Link, Outlet, useParams } from 'react-router-dom'
import { fetchSingleProduct } from '../api/products'
import { useEffect, useState } from 'react'

const ProductDetailsPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchSingleProduct(id)
      setProduct(res)
    }
    fetchData()
  }, [id])

  return (
    <div>
      {product && (
        <>
          <div>
            <h2>{product.id}</h2>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h1>{product.price}</h1>
          </div>
          <ul>
            <li>
              <Link to='category'>Category</Link>
            </li>
            <li>
              <Link to='images'>Images</Link>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </div>
  )
}

export default ProductDetailsPage
