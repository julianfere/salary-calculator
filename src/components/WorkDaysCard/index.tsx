import { Divider, Tab, Tabs, Typography } from "@mui/material";
import { Card } from "components";
import Calendar from "./Calendar";
import { useAsync, useFetch, useCalendar } from "hooks";
import { CalendarProvider } from "providers";

import { getFestiveDaysByYear } from "services";
import type { FestiveDatesResponse } from "services/workDaysService/types";
import { calculateWorkDaysOfMonth, voidFunction, getMonthName } from "utils";
import { getDateObject } from "utils/date/dateMapper";
import { SyntheticEvent, useState } from "react";

const WorkDays = () => {
  const { festiveDates, selectedMonth, setFestiveDates } = useCalendar();
  const { isLoading, error, callEndpoint } = useFetch();
  const { year } = getDateObject();

  const fetchFestiveDays = async () =>
    await callEndpoint(getFestiveDaysByYear(year));

  const handleFetchFestiveDays = async (data: FestiveDatesResponse) => {
    setFestiveDates(data);
  };

  useAsync(fetchFestiveDays, handleFetchFestiveDays, voidFunction);

  if (isLoading)
    return <Typography color="primary">Fetching values...</Typography>;
  if (error) return <Typography color="error.dark">Error</Typography>;

  return (
    <>
      <Typography
        variant="h6"
        component="h1"
        textAlign="center"
        gutterBottom
        color="primary.dark"
      >
        {getMonthName(selectedMonth)}
      </Typography>
      <Divider>
        <Typography color="primary.light">Work days</Typography>
      </Divider>
      <Typography variant="h5" component="h2" textAlign="center">
        {calculateWorkDaysOfMonth(festiveDates, selectedMonth)}
      </Typography>
    </>
  );
};

const CardWithCalendar = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (_: SyntheticEvent, index: number) =>
    setTabIndex(index);

  return (
    <CalendarProvider>
      <Card>
        <Tabs value={tabIndex} onChange={handleTabChange} centered>
          <Tab label="Simple view" />
          <Tab label="Calendar view" />
        </Tabs>
        {tabIndex === 0 ? <WorkDays /> : <Calendar />}
      </Card>
    </CalendarProvider>
  );
};

export default CardWithCalendar;
