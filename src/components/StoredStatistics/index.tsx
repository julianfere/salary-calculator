import { Row, Col, Card, Statistic, Typography } from "antd";

type StatisticCardProps = {
  title: string;
  value: number;
  lastUpdated?: string;
};

const StatisticCard = ({ title, value, lastUpdated }: StatisticCardProps) => {
  const date = lastUpdated
    ? new Date(lastUpdated).toLocaleDateString()
    : new Date().toLocaleDateString();

  return (
    <Row>
      <Col>
        <Card>
          <Statistic title={title} value={value} precision={2} prefix={"$"} />
          <Typography.Text type="secondary">
            Actualizado: {date}
          </Typography.Text>
        </Card>
      </Col>
    </Row>
  );
};

export default StatisticCard;
