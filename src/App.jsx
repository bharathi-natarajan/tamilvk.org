import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import {
  Landing,
  About,
  Books,
  News,
  History,
  HomeLayout,
  Team,
  Error,
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'history',
        element: <History />,
      },
      {
        path: 'team',
        element: <Team />,
      },
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'books',
        element: <Books />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
