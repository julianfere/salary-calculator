import { Card, Descriptions } from "antd";
import DollarCard from "components/DollarCard";
import { setDollarInfo } from "context/AppContext/actions";
import { useFetch, useAsync, useLocalStorage } from "hooks";
import useApp from "hooks/useApp";
import {
  calculateLatestDollar,
  getDollarHistoric,
} from "services/dolarService";
import { DollarHistory } from "services/dolarService/types";
import { humanReadableNumber, voidFunction } from "utils";
import styled from "styled-components";
import { useMemo } from "react";

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
  const { isLoading, callEndpoint } = useFetch();
  const { dispatch, state } = useApp();
  const { getConfig } = useLocalStorage();

  const config = useMemo(() => getConfig(), [getConfig]);

  const showConfig = Object.keys(config).length > 0;

  const handleFetchDolar = async (data: DollarHistory) => {
    const dollar = calculateLatestDollar(data);
    dispatch(setDollarInfo(dollar));
  };

  const fetchDolar = async () => {
    return await callEndpoint(getDollarHistoric());
  };

  useAsync(fetchDolar, handleFetchDolar, voidFunction);

  const hoursMap = {
    0.5: "4",
    0.75: "6",
    1: "8",
  } as const;

  return (
    <Card loading={isLoading}>
      <CardsContainer>
        {showConfig && (
          <Card title="Config">
            <Descriptions colon={false} bordered layout="vertical">
              {config.hours && (
                <Descriptions.Item label="Horas">
                  {hoursMap[config.hours as keyof typeof hoursMap]}
                </Descriptions.Item>
              )}
              {config.dolar && (
                <Descriptions.Item label="Porcentaje">
                  %{(config.percentage ?? 0) * 100}
                </Descriptions.Item>
              )}
              {config.plus && (
                <Descriptions.Item label="Plus">
                  {config.plusAmount}
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
          value={state.dolarInfo.official.buy}
          lastUpdated={state?.dolarInfo?.official?.lastUpdated}
          status={state?.dolarInfo?.official?.status}
        />
        <DollarCard
          title="Blue"
          value={state?.dolarInfo?.blue?.buy}
          lastUpdated={state?.dolarInfo?.blue?.lastUpdated}
          status={state?.dolarInfo?.blue?.status}
        />
      </CardsContainer>
    </Card>
  );
};

export default DollarInfoCard;
