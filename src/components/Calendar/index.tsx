import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import { useAsync, useFetch } from "hooks";
import { getFestiveDaysByYear } from "services";
import { getDateObject } from "utils/date/dateMapper";
import { FestiveDatesResposne } from "services/workDaysService/types";
import { useState } from "react";
import { getFestiveDatesOfCurrentMonth, voidFunction } from "utils";

const ServerDay = (
  props: PickersDayProps<Dayjs> & { highlightedDays?: number[] }
) => {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth &&
    highlightedDays.indexOf(props.day.date()) > -1;

  return (
    <PickersDay
      {...other}
      outsideCurrentMonth={outsideCurrentMonth}
      day={day}
      style={{
        color: isSelected ? "white" : undefined,
        fontWeight: isSelected ? "bold" : undefined,
        backgroundColor: isSelected ? "#2E7D33" : undefined,
      }}
    />
  );
};

const FestiveDatesCalendar = () => {
  const { isLoading, callEndpoint } = useFetch();
  const [highlightedDays, setHighlightedDays] = useState<number[]>([]);

  const fetchFestiveDates = async () =>
    callEndpoint(getFestiveDaysByYear(getDateObject().year));

  const handleSuccess = (data: FestiveDatesResposne) => {
    const days = getFestiveDatesOfCurrentMonth(data);

    setHighlightedDays(days);
  };

  useAsync(fetchFestiveDates, handleSuccess, voidFunction);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        loading={isLoading}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays,
          } as any,
        }}
        views={["day"]}
        readOnly
      />
    </LocalizationProvider>
  );
};

export default FestiveDatesCalendar;
