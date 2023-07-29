import { Card, Col, Row } from "antd";
import { DollarCard, WorkDaysCard, SalaryForm } from "components";

const Home = () => {
  return (
    <Card
      style={{
        height: "100%",
        width: "100%",
      }}
      data-testid="home-page"
    >
      <Row justify="center" align="middle" gutter={[0, 40]}>
        <Col span={24}>
          <Row justify="center" align="middle">
            <Col xl={3}>
              <DollarCard title="Dolar Blue" value={150} status="increased" />
            </Col>
            <Col xl={3}>
              <DollarCard title="Dolar Blue" value={150} status="increased" />
            </Col>
            <Col xl={3}>
              <WorkDaysCard />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <SalaryForm />
        </Col>
      </Row>
    </Card>
  );
};

export default Home;
