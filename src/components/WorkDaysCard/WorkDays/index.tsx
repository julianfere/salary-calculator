import { Typography, Divider } from "@mui/material";
import { useCalendar } from "hooks";
import { useAppState } from "hooks/useAppSate";
import { useEffect } from "react";
import { getMonthName, calculateWorkDaysOfMonth } from "utils";

const WorkDays = () => {
  const { setWorkDays, workDays } = useAppState();
  const { festiveDates, selectedMonth } = useCalendar();

  useEffect(() => {
    setWorkDays(calculateWorkDaysOfMonth(festiveDates, selectedMonth));
  }, []);

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
        {workDays}
      </Typography>
    </>
  );
};

export { WorkDays };
