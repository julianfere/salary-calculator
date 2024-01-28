import { Card } from "antd";
import DollarCard from "components/DollarCard";
import { setDollarInfo } from "context/AppContext/actions";
import { useFetch, useAsync } from "hooks";
import useApp from "hooks/useApp";
import {
  calculateLatestDollar,
  getDollarHistoric,
} from "services/dolarService";
import { DollarHistory } from "services/dolarService/types";
import { voidFunction } from "utils";
import styled from "styled-components";

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

  const handleFetchDolar = async (data: DollarHistory) => {
    const dollar = calculateLatestDollar(data);
    dispatch(setDollarInfo(dollar));
  };

  const fetchDolar = async () => {
    return await callEndpoint(getDollarHistoric());
  };

  useAsync(fetchDolar, handleFetchDolar, voidFunction);

  return (
    <Card title="Dolar" loading={isLoading}>
      <CardsContainer>
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
