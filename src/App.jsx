import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
// import HomePage from './Pages/HomePage'
// import ArticlesPage from './Pages/ArticlesPage'
// import ProductsPage from './Pages/ProductsPage'
// import ProductDetailsPage from './Pages/ProductDetailsPage'
// import Category from './components/Category/Category'
// import Images from './components/Images/Images'
import { lazy, Suspense } from 'react'

const HomePage = lazy(() => import('./Pages/HomePage'))
const ArticlesPage = lazy(() => import('./Pages/ArticlesPage'))
const ProductsPage = lazy(() => import('./Pages/ProductsPage'))
const ProductDetailsPage = lazy(() => import('./Pages/ProductDetailsPage'))
const Category = lazy(() => import('./components/Category/Category'))
const Images = lazy(() => import('./components/Images/Images'))

const App = () => {
  return (
    <div>
      <Navigation />

      <Suspense fallback={<p>Loading component..</p>}>
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
      </Suspense>
    </div>
  )
}

export default App
