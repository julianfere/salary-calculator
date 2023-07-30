import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100%",
      }}
    >
      <Col>
        <Outlet />
      </Col>
    </Row>
  );
};

export default Layout;
