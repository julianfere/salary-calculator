import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import { useCalendar } from "hooks";
import { getFestiveDatesOfCurrentMonth } from "utils";

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
        fontWeight: isSelected ? "bold" : "",
        backgroundColor: isSelected ? "#115293" : "",
      }}
    />
  );
};

const FestiveDatesCalendar = () => {
  const { festiveDates, selectedMonth, setSelectedMonth } = useCalendar();

  const handleMonthChange = (date: Dayjs) => setSelectedMonth(date.month() + 1);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        renderLoading={() => <DayCalendarSkeleton />}
        onMonthChange={handleMonthChange}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays: getFestiveDatesOfCurrentMonth(
              festiveDates,
              selectedMonth
            ),
          } as any,
        }}
        views={["day"]}
        readOnly
      />
    </LocalizationProvider>
  );
};

export default FestiveDatesCalendar;
