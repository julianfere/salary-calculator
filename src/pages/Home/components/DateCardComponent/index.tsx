import { Card, Typography } from "antd";
import { useFetch, useAsync } from "hooks";
import { useState } from "react";
import { getFestiveDaysByYear } from "services";
import { FestiveDatesResponse } from "services/workDaysService/types";
import { getMonthName, calculateWorkDaysOfMonth, voidFunction } from "utils";
import { getDateObject } from "utils/date/dateMapper";

const DateCardComponent = () => {
  const [festiveDates, setFestiveDates] = useState<FestiveDatesResponse>([]);
  const { isLoading: dateisLoading, callEndpoint: dateCallEndpoint } =
    useFetch();
  const { year, month } = getDateObject();

  const fetchFestiveDays = async () =>
    await dateCallEndpoint(getFestiveDaysByYear(year));

  const handleFetchFestiveDays = async (data: FestiveDatesResponse) => {
    setFestiveDates(data ?? []);
  };

  useAsync(fetchFestiveDays, handleFetchFestiveDays, voidFunction);

  return (
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
        <span style={{ color: "#6b49de" }}>{getMonthName(month)}</span>:{" "}
        {calculateWorkDaysOfMonth(festiveDates)}
      </Typography.Title>
    </Card>
  );
};

export default DateCardComponent;
