import { createBrowserRouter, RouterProvider } from 'react-router'
import Browse from '../module/Browse'
import Login from '../module/Login'
import Header from './Header'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
    ])
  return (
    <div>
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
