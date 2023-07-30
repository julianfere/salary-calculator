import { Card, Col, Row } from "antd";
import { WorkDaysCard, SalaryForm } from "components";
import DollarSection from "components/DollarSection";

const Home = () => {
  return (
    <Card bordered={false}>
      <Row justify="center" align="middle" gutter={[0, 40]}>
        <Col span={24}>
          <Row justify="center" align="middle" gutter={[0, 10]}>
            <Col>
              <DollarSection />
            </Col>
            <Col xl={24}>
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
