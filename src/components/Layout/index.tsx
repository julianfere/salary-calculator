import { NavLink, Outlet } from "react-router-dom";
import LayoutAnt, { Content } from "antd/es/layout/layout";
import { useState } from "react";
import { Drawer, Typography } from "antd";
import { StyledHeader, StyledMenuIcon } from "./styles";

const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <LayoutAnt
      style={{
        height: "100%",
      }}
    >
      <Drawer open={open} onClose={() => setOpen(false)} placement="left">
        <NavLink to="/" onClick={() => setOpen(false)}>
          <Typography.Title level={3}>Inicio</Typography.Title>
        </NavLink>
        <NavLink to="/config" onClick={() => setOpen(false)}>
          <Typography.Title level={3}>Config</Typography.Title>
        </NavLink>
      </Drawer>
      <StyledHeader>
        <StyledMenuIcon onClick={() => setOpen(true)} />
      </StyledHeader>
      <Content
        style={{
          height: "100%",
        }}
      >
        <Outlet />
      </Content>
    </LayoutAnt>
  );
};

export default Layout;
