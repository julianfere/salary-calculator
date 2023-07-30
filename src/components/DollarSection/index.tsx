import { Row, Col, Skeleton } from "antd";
import DollarCard from "./components/DollarCard";
import { useAsync, useFetch } from "hooks";
import {
  calculateLatestDollar,
  getDollarHistoric,
} from "services/dolarService";
import { useState } from "react";
import { DolarInfo, DollarHistory } from "services/dolarService/types";
import { voidFunction } from "utils";
import { useAppState } from "hooks/useAppSate";

const DollarSection = () => {
  const { setDolarValueSell } = useAppState();
  const { isLoading, callEndpoint } = useFetch();
  const [data, setData] = useState<DolarInfo>({} as DolarInfo);
  const fetchDolar = async () => {
    return await callEndpoint(getDollarHistoric());
  };

  const handleFetchDolar = async (data: DollarHistory) => {
    const dollar = calculateLatestDollar(data);
    setDolarValueSell(dollar.blue.sell);
    setData(dollar);
  };

  useAsync(fetchDolar, handleFetchDolar, voidFunction);

  return (
    <Row gutter={[40, 20]} justify="center">
      {isLoading && <Skeleton active />}
      {!isLoading && (
        <>
          <Col>
            <DollarCard
              title="Official"
              value={data?.official?.sell}
              lastUpdated={data?.official?.lastUpdated}
              status={data?.official?.status}
            />
          </Col>
          <Col>
            <DollarCard
              title="Blue"
              value={data?.blue?.sell}
              lastUpdated={data?.blue?.lastUpdated}
              status={data?.blue?.status}
            />
          </Col>
        </>
      )}
    </Row>
  );
};

export default DollarSection;
