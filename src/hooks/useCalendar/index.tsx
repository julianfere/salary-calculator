import { CalendarContext } from "providers";
import { CalendarActions } from "providers/CalendarProvider/types";
import { useContext } from "react";
import { FestiveDatesResponse } from "services/workDaysService/types";

const useCalendarContext = () => {
  const context = useContext(CalendarContext);

  if (!context) {
    throw new Error("useCalendar must be used within a CalendarProvider");
  }

  return context;
};

const useCalendar = () => {
  const { festiveDates, selectedMonth, dispatch } = useCalendarContext();

  const setFestiveDates = (festiveDates: FestiveDatesResponse) => {
    dispatch({
      _tag: CalendarActions.SET_FESTIVE_DATES,
      payload: { festiveDates },
    });
  };

  const setSelectedMonth = (selectedMonth: number) => {
    dispatch({
      _tag: CalendarActions.SET_SELECTED_MONTH,
      payload: { selectedMonth },
    });
  };

  return { festiveDates, selectedMonth, setFestiveDates, setSelectedMonth };
};

export { useCalendar };
