import Header from "./Header"
import Login from "./Login"
import MainComponent from "./MainComponent"
import {createBrowserRouter,RouterProvider} from "react-router-dom"

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<MainComponent/>
        },
        {
            path:"/login",
            element:<Login/>
        }
    ])
  return (
    <section className="relative">
        <Header/>
        <RouterProvider router={appRouter}/>
    </section>
  )
}

export default Body