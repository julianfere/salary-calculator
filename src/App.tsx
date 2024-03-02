import Layout from "@components/Layout";
import DashboardProvider from "@hooks/useDashboard/context";
import { ThemeProvider } from "@hooks/useTheme/context";
import Home from "@pages/Home";
//@ts-ignore
import Config from "@pages/config";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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

function App() {
  return (
    <DashboardProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </DashboardProvider>
  );
}

export default App;
