import { FestiveDatesResponse } from "services/workDaysService/types";

enum CalendarActions {
  SET_FESTIVE_DATES = "SET_FESTIVE_DATES",
  SET_SELECTED_MONTH = "SET_SELECTED_MONTH",
}

type SetFestiveDatesAction = {
  _tag: CalendarActions.SET_FESTIVE_DATES;
  payload: {
    festiveDates: FestiveDatesResponse;
  };
};

type SetSelectedMonth = {
  _tag: CalendarActions.SET_SELECTED_MONTH;
  payload: {
    selectedMonth: number;
  };
};

type Actions = SetFestiveDatesAction | SetSelectedMonth;

export type { Actions };
export { CalendarActions };
