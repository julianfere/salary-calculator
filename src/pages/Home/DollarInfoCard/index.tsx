import { Card, Descriptions } from "antd";
import DollarCard from "@components/DollarCard";
import styled from "styled-components";
import useDashboard from "@hooks/useDashboard";
import { humanReadableNumber } from "@utils/NumberUtils";

const CardsContainer = styled.section`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const DollarInfoCard = () => {
  const { config, dollar } = useDashboard();

  const showConfig = Object.keys(config).length > 0;

  const hoursMap = {
    0.5: "4",
    0.75: "6",
    1: "8",
  } as const;

  return (
    <Card>
      <CardsContainer>
        {showConfig && (
          <Card title="Config">
            <Descriptions colon={false} bordered layout="vertical">
              {config.hours && (
                <Descriptions.Item label="Horas">
                  {hoursMap[config.hours as keyof typeof hoursMap]}
                </Descriptions.Item>
              )}
              {dollar && (
                <Descriptions.Item label="Porcentaje">
                  %{(config.dollarPercentage ?? 0) * 100}
                </Descriptions.Item>
              )}
              {config.dollarPlus && (
                <Descriptions.Item label="Plus">
                  {config.dollarPlus}
                </Descriptions.Item>
              )}
              {config.pesosPlus && (
                <Descriptions.Item label="Plus en pesos">
                  {humanReadableNumber(config.pesosPlus)}
                </Descriptions.Item>
              )}
            </Descriptions>
          </Card>
        )}
        <DollarCard
          title="Official"
          value={dollar.official.buy}
          lastUpdated={dollar.official?.lastUpdate}
          status={dollar.official?.status}
        />
        <DollarCard
          title="Blue"
          value={dollar.blue?.buy}
          lastUpdated={dollar.blue?.lastUpdate}
          status={dollar.blue?.status}
        />
      </CardsContainer>
    </Card>
  );
};

export default DollarInfoCard;
