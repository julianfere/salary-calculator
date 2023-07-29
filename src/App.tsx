import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AppProvider } from "providers";
import { Home } from "pages";
import { Layout } from "components";

import "./style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
    errorElement: <div>Not Found</div>,
  },
]);

const App = () => (
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);

export default App;
