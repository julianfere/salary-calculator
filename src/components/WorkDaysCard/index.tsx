import { Divider, Stack, Typography } from "@mui/material";
import { Card } from "components";
import Calendar from "./Calendar";
import { useAsync, useFetch, useCalendar } from "hooks";
import { CalendarProvider } from "providers";

import { getFestiveDaysByYear } from "services";
import type { FestiveDatesResponse } from "services/workDaysService/types";
import { calculateWorkDaysOfMonth, voidFunction, getMonthName } from "utils";
import { getDateObject } from "utils/date/dateMapper";

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

  if (isLoading) return <Typography>Fetching values...</Typography>;
  if (error) return <Typography>Error</Typography>;

  return (
    <Stack>
      <Typography variant="h6" component="h1" textAlign="center" gutterBottom>
        {getMonthName(selectedMonth)}
      </Typography>
      <Divider>Work days</Divider>
      <Typography variant="h5" component="h2" gutterBottom textAlign="center">
        {calculateWorkDaysOfMonth(festiveDates, selectedMonth)}
      </Typography>
    </Stack>
  );
};

const CardWithCalendar = () => (
  <CalendarProvider>
    <Card>
      <WorkDays />
      <Calendar />
    </Card>
  </CalendarProvider>
);

export default CardWithCalendar;
