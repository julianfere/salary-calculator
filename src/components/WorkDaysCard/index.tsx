import { Card, Skeleton, Typography } from "antd";
import { useAsync, useFetch } from "hooks";
import { useTheme } from "hooks/useTheme";
import { useState } from "react";
import { getFestiveDaysByYear } from "services";
import { FestiveDatesResponse } from "services/workDaysService/types";
import { calculateWorkDaysOfMonth, voidFunction, getMonthName } from "utils";
import { getDateObject } from "utils/date/dateMapper";

const WorkDaysCard = () => {
  const [festiveDates, setFestiveDates] = useState<FestiveDatesResponse>([]);
  const { colorPrimary } = useTheme();
  const { isLoading, callEndpoint } = useFetch();
  const { year, month } = getDateObject();

  const fetchFestiveDays = async () =>
    await callEndpoint(getFestiveDaysByYear(year));

  const handleFetchFestiveDays = async (data: FestiveDatesResponse) => {
    setFestiveDates(data);
  };

  useAsync(fetchFestiveDays, handleFetchFestiveDays, voidFunction);

  return (
    <Card>
      {isLoading && <Skeleton active />}
      {!isLoading && (
        <>
          <Typography.Title
            level={5}
            style={{
              margin: 0,
              padding: 0,
              textAlign: "center",
            }}
          >
            Work days of{" "}
            <span style={{ color: colorPrimary }}>{getMonthName(month)}</span>:{" "}
            {calculateWorkDaysOfMonth(festiveDates)}
          </Typography.Title>
        </>
      )}
    </Card>
  );
};

export default WorkDaysCard;
