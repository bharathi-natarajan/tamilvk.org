import { Outlet } from 'react-router-dom'
import CompNavbar from '../components/CompNavbar'

const HomeLayout = () => {
  return (
    <>
      <CompNavbar />
      <Outlet />
    </>
  )
}
export default HomeLayout
