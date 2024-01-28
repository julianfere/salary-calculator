import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";
import AppProvider from "context/AppContext";
import { ThemeProvider } from "context/Theme";
import Layout from "components/Layout";
import Home from "pages/Home";
import Config from "pages/Config";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "config", element: <Config /> },
    ],
    errorElement: <div>Not Found</div>,
  },
]);

const App = () => (
  <AppProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </AppProvider>
);

export default App;
