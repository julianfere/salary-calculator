import Layout from "@components/Layout";
import useDashboard from "@hooks/useDashboard";
import DashboardProvider from "@hooks/useDashboard/context";
import { ThemeProvider } from "@hooks/useTheme/context";
import Home from "@pages/Home";
import NewHome from "@pages/NewHome";
//@ts-ignore
import Config from "@pages/config";
import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const buildRouter = (newHome: boolean) => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: newHome ? <NewHome /> : <Home /> },
        { path: "config", element: <Config /> },
      ],
      errorElement: <div>Not Found</div>,
    },
  ]);
};

function Main() {
  const { config } = useDashboard();

  const router = useMemo(() => buildRouter(!!config.newHome), [config.newHome]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

function App() {
  return (
    <DashboardProvider>
      <Main />
    </DashboardProvider>
  );
}

export default App;
