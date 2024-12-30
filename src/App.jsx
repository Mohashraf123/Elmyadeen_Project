import {createBrowserRouter,Router,RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUS'
import ProductsPage from './pages/ProductsPage'
import Projects from './pages/Projects'
import Contactus from './pages/ContactUs'
import Root from './pages/Root'



const router=createBrowserRouter([
  {path:'/',element:<Root/>,children:([
    {index:true,element:<Home/>},
    {path:'about',element:<AboutUs/>},
    {path:'products',element:<ProductsPage/>},
    {path:'projects',element:<Projects/>},
    {path:'contactus',element:<Contactus/>},    
  ])},
])

function App() {

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
