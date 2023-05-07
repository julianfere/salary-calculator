import { Tab, Tabs, Typography } from "@mui/material";
import { Card } from "components";
import Calendar from "../Calendar";
import { useAsync, useFetch, useCalendar } from "hooks";

import { getFestiveDaysByYear } from "services";
import type { FestiveDatesResponse } from "services/workDaysService/types";
import { voidFunction } from "utils";
import { getDateObject } from "utils/date/dateMapper";
import { SyntheticEvent, useState } from "react";
import { WorkDays } from "../WorkDays";

const CardBody = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { setFestiveDates } = useCalendar();
  const { isLoading, error, callEndpoint } = useFetch();
  const { year } = getDateObject();

  const handleTabChange = (_: SyntheticEvent, index: number) =>
    setTabIndex(index);

  const fetchFestiveDays = async () =>
    await callEndpoint(getFestiveDaysByYear(year));

  const handleFetchFestiveDays = async (data: FestiveDatesResponse) => {
    setFestiveDates(data);
  };

  useAsync(fetchFestiveDays, handleFetchFestiveDays, voidFunction);

  if (isLoading)
    return (
      <Card>
        <Typography color="primary" textAlign="center">
          Fetching values...
        </Typography>
      </Card>
    );

  if (error)
    return (
      <Card>
        <Typography color="error.dark" textAlign="center">
          Error
        </Typography>
      </Card>
    );

  return (
    <Card>
      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        <Tab label="Simple view" />
        <Tab label="Calendar view" />
      </Tabs>
      {tabIndex === 0 ? <WorkDays /> : <Calendar />}
    </Card>
  );
};

export { CardBody };
