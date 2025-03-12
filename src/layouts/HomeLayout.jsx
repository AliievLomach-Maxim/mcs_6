import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'

const HomeLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default HomeLayout
// const SideBarLayout = () => {
//   return (
//     <>
//       <Navigation />
//       <Navigation />
//       <Outlet />
//       <Navigation />
//     </>
//   )
// }

// export default SideBarLayout
