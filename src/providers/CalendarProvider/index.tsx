import { ReactNode, createContext, useReducer } from "react";

import { getDateObject } from "utils/date/dateMapper";
import { Actions, CalendarActions, CalendarContextType } from "./types";

const { month } = getDateObject();

const initialValue: CalendarContextType = {
  festiveDates: [],
  selectedMonth: month,
  dispatch: () => {},
};

const reducer = (
  state: CalendarContextType,
  action: Actions
): CalendarContextType => {
  const { _tag } = action;

  switch (_tag) {
    case CalendarActions.SET_FESTIVE_DATES:
      return {
        ...state,
        festiveDates: action.payload.festiveDates,
      };
    case CalendarActions.SET_SELECTED_MONTH:
      return {
        ...state,
        selectedMonth: action.payload.selectedMonth,
      };
    default:
      return state;
  }
};

const CalendarContext = createContext<CalendarContextType>(initialValue);

const CalendarProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const value = { ...state, dispatch };
  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

export { CalendarContext, CalendarProvider };
