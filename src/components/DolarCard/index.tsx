import { Divider, Stack, Typography } from "@mui/material";
import { Card } from "components";
import { useAsync, useFetch } from "hooks";
import { useState } from "react";
import { getTodaysDollarValue } from "services";
import { DolarResponse, DolarValue } from "services/dolarService.ts/types";
import { voidFunction } from "utils";

type CardBodyProps = {
  data: DolarResponse;
};

type DolarValueProps = {
  data: DolarValue;
};

const Dolar = ({ data }: DolarValueProps) => (
  <Stack
    spacing={2}
    direction="row"
    divider={<Divider orientation="vertical" flexItem />}
  >
    <Typography variant="body1" color={"black"}>
      Sell: {data?.value_sell}
    </Typography>
    <Typography variant="body1" color={"black"}>
      Buy: {data?.value_buy}
    </Typography>
    <Typography variant="body1" color={"black"}>
      Average: {data?.value_avg}
    </Typography>
  </Stack>
);

const CardBody = ({ data }: CardBodyProps) => {
  const { blue } = data;
  const { oficial } = data;

  return (
    <Stack spacing={2} alignItems="center">
      <Divider>OFFICIAL</Divider>
      <Dolar data={oficial} />
      <Divider>BLUE</Divider>
      <Dolar data={blue} />
    </Stack>
  );
};

const DolarCard = () => {
  const { isLoading, error, callEndpoint } = useFetch();
  const [dolarResponse, setDolarResponse] = useState({} as DolarResponse);

  const handleSuccess = (response: DolarResponse) => {
    setDolarResponse(response);
  };

  const fetchData = async () => await callEndpoint(getTodaysDollarValue());

  useAsync(fetchData, handleSuccess, voidFunction);

  if (isLoading)
    return (
      <Card>
        <Typography variant="subtitle1" color={"black"}>
          Fetching values...
        </Typography>
      </Card>
    );
  if (error)
    return (
      <Card>
        <Typography variant="subtitle1" color={"black"}>
          Error fetching values
        </Typography>
      </Card>
    );

  return (
    <Card>
      <>
        <Typography variant="h6" color={"black"} textAlign="center">
          Today dolar value
        </Typography>
        {dolarResponse && <CardBody data={dolarResponse} />}
      </>
    </Card>
  );
};

export default DolarCard;
