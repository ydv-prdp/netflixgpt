import Header from "./Header"
import Login from "./Login"
import Browse from "./Browse"
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
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])
  return (
    <section className="relative">
        <RouterProvider router={appRouter}/>
    </section>
  )
}

export default Body