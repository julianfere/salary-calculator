import { Card, Statistic, Typography } from "antd";

type StatisticCardProps = {
  title: string;
  value: number;
  lastUpdated?: string;
  clear?: () => void;
};

import styled from "styled-components";

const ClearText = styled(Typography.Text)`
  margin: 0 !important;
  cursor: pointer;
  text-decoration: underline;
`;

const StatisticCard = ({
  title,
  value,
  lastUpdated,
  clear,
}: StatisticCardProps) => {
  const date = lastUpdated
    ? new Date(lastUpdated).toLocaleDateString()
    : new Date().toLocaleDateString();

  return (
    <Card>
      <Statistic title={title} value={value} precision={2} prefix={"$"} />
      <Typography.Text type="secondary">Actualizado: {date}</Typography.Text>
      <br />
      {clear && (
        <ClearText type="success" onClick={clear}>
          limpiar
        </ClearText>
      )}
    </Card>
  );
};

export default StatisticCard;
