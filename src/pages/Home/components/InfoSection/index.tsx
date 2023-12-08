import Card from "components/Card";
import DollarCard from "components/DollarCard";
import { setDolarValueSell } from "context/AppContext/actions";
import { useAsync, useFetch, useTheme } from "hooks";
import useApp from "hooks/useApp";
import { useState } from "react";
import {
  calculateLatestDollar,
  getDollarHistoric,
} from "services/dolarService";
import { DolarInfo, DollarHistory } from "services/dolarService/types";
import { calculateWorkDaysOfMonth, getMonthName, voidFunction } from "utils";
import StatisticCard from "components/StatisticCard";
import { MiscContainer, Container } from "./styles";
import { Typography } from "antd";
import { getFestiveDaysByYear } from "services";
import { FestiveDatesResponse } from "services/workDaysService/types";
import { getDateObject } from "utils/date/dateMapper";

const InfoSection = () => {
  const { dispatch, state } = useApp();
  const { isLoading, callEndpoint } = useFetch();
  const [festiveDates, setFestiveDates] = useState<FestiveDatesResponse>([]);
  const { colorPrimary } = useTheme();
  const { isLoading: dateisLoading, callEndpoint: dateCallEndpoint } =
    useFetch();
  const { year, month } = getDateObject();
  const [data, setData] = useState<DolarInfo>({} as DolarInfo);
  const fetchDolar = async () => {
    return await callEndpoint(getDollarHistoric());
  };

  const handleFetchDolar = async (data: DollarHistory) => {
    const dollar = calculateLatestDollar(data);
    dispatch(setDolarValueSell(dollar.blue.sell));
    setData(dollar);
  };

  const fetchFestiveDays = async () =>
    await dateCallEndpoint(getFestiveDaysByYear(year));

  const handleFetchFestiveDays = async (data: FestiveDatesResponse) => {
    setFestiveDates(data);
  };

  useAsync(fetchFestiveDays, handleFetchFestiveDays, voidFunction);
  useAsync(fetchDolar, handleFetchDolar, voidFunction);

  return (
    <Card title="Misc">
      <MiscContainer>
        <Card title="Dolar" loading={isLoading}>
          <Container>
            <DollarCard
              title="Official"
              value={data?.official?.sell}
              lastUpdated={data?.official?.lastUpdated}
              status={data?.official?.status}
            />
            <DollarCard
              title="Blue"
              value={data?.blue?.sell}
              lastUpdated={data?.blue?.lastUpdated}
              status={data?.blue?.status}
            />
          </Container>
        </Card>
        <Card title="Ultimos datos calculados">
          <Container>
            <StatisticCard
              title="Sueldo"
              value={state.storedData.lastSalary.value}
              lastUpdated={state.storedData.lastSalary.lastUpdated}
            />
            <StatisticCard
              title="Aumento"
              value={state.storedData.lastRaise.value}
              lastUpdated={state.storedData.lastRaise.lastUpdated}
            />
          </Container>
        </Card>
        <Card title="Dias habiles" loading={dateisLoading}>
          <Typography.Title
            level={5}
            style={{
              margin: 0,
              padding: 0,
              textAlign: "center",
            }}
          >
            Dias habiles{" "}
            <span style={{ color: colorPrimary }}>{getMonthName(month)}</span>:{" "}
            {calculateWorkDaysOfMonth(festiveDates)}
          </Typography.Title>
        </Card>
      </MiscContainer>
    </Card>
  );
};

export default InfoSection;
