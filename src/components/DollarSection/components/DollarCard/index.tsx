import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { Row, Col, Card, Statistic, Typography } from "antd";
import { useTheme } from "hooks";
import { DollarStatuses } from "services/dolarService/types";

type DollarCardProps = {
  value: number;
  title: string;
  status?: DollarStatuses;
  lastUpdated?: string;
};

const DollarCard = ({ title, value, status, lastUpdated }: DollarCardProps) => {
  const { decrementText, incrementText, colorText } = useTheme();

  const color =
    status === "increased"
      ? incrementText
      : status === "decreased"
      ? decrementText
      : colorText;

  const icon =
    status === "increased" ? (
      <ArrowUpOutlined />
    ) : status === "decreased" ? (
      <ArrowDownOutlined />
    ) : null;

  return (
    <Row>
      <Col>
        <Card>
          <Statistic
            title={title}
            value={value}
            precision={2}
            valueStyle={{ color }}
            suffix={"$"}
            prefix={icon}
          />
          {lastUpdated && (
            <Typography.Text type="secondary">
              Last updated: {lastUpdated}
            </Typography.Text>
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default DollarCard;
