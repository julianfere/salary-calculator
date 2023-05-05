import { Divider, Stack, Typography } from "@mui/material";
import { Card } from "components";
import { useAsync, useFetch } from "hooks";
import { useState } from "react";

import { getFestiveDaysByYear } from "services";
import type { FestiveDatesResposne } from "services/workDaysService/types";
import {calculateWorkDaysOfCurrentMonth, getMonthName, voidFunction} from "utils";

const WorkDaysCard = () => {
  const [festiveDates, setFestiveDates] = useState([] as FestiveDatesResposne)
  const {isLoading, error, callEndpoint} = useFetch()
  const currentDate = new Date()

  const fetchFestiveDays = async () => await callEndpoint(getFestiveDaysByYear(currentDate.getFullYear()))

  const handleFetchFestiveDays = async (data:FestiveDatesResposne) => {
    setFestiveDates(data)
  }
  
  useAsync(fetchFestiveDays, handleFetchFestiveDays, voidFunction)

  if (isLoading) return <Typography>Fetching values...</Typography>
  if (error) return <Typography>Error</Typography>

  return (
    <Card>
      <Stack>
        <Typography variant="h6" component="h1" textAlign="center" gutterBottom>
          {getMonthName(currentDate)}
        </Typography>
        <Divider>Work days</Divider>
        <Typography variant="h5" component="h2" gutterBottom textAlign="center">
          {calculateWorkDaysOfCurrentMonth(festiveDates)}
        </Typography>
      </Stack>
    </Card>
  )
};

export default WorkDaysCard;