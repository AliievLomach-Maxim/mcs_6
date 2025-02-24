import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  console.log('product', product)
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Link to={`${product.id}`}>Details</Link>
    </div>
  )
}

export default Product
