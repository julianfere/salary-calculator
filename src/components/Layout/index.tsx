import { Outlet } from "react-router-dom";
import "./styles.css";

const Layout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default Layout;
