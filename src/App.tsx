import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "pages"
import "./styles.css"
import { Layout } from "components"

const router = createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    { path: '/', element: <Home /> },
  ],
  errorElement: <div>Not Found</div>
  }
]
)

const App =() => <RouterProvider router={router} />

export default App
