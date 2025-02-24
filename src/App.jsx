import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import HomePage from './Pages/HomePage'
import ArticlesPage from './Pages/ArticlesPage'
import ProductsPage from './Pages/ProductsPage'
import ProductDetailsPage from './Pages/ProductDetailsPage'
import Category from './components/Category/Category'
import Images from './components/Images/Images'

const App = () => {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/articles' element={<ArticlesPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:id' element={<ProductDetailsPage />}>
          <Route path='category' element={<Category />} />
          <Route path='images' element={<Images />} />
        </Route>
        <Route path='*' element={<div>404 page</div>} />
      </Routes>
    </div>
  )
}

export default App

// const Wrapper = ({children}) => {
//   return (
//     <div>{children}</div>
//   )
// }

// export default Wrapper
// <Wrapper>
// ajhsdgjahs
// ajhsdgjahsasd
// ajhsdgjahs
// </Wrapper>
