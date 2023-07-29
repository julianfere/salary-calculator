import { FestiveDatesResponse } from "services/workDaysService/types";
import { getDateObject } from "utils/date/dateMapper";

const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

const getWorkDays = (month: number, year: number) => {
  const totalMonthDays = getDaysInMonth(month, year);
  const workDays = totalMonthDays - 8; //substract 8 weekend days
  return workDays;
};

const calculateWorkDaysOfMonth = (
  festiveDates: FestiveDatesResponse,
  month = getDateObject().month
) => {
  const { year } = getDateObject();

  const filteredDates = festiveDates.filter(
    (x) => x.mes === month && x.tipo !== "nolaborable"
  );

  const workDaysAndFestiveDates = getWorkDays(month, year);
  return workDaysAndFestiveDates - filteredDates.length;
};

const getFestiveDatesOfCurrentMonth = (
  festiveDates: FestiveDatesResponse,
  otherMonth?: number
) => {
  const month = otherMonth ?? getDateObject().month;
  debugger;
  return festiveDates.filter((x) => x.mes === month).map((x) => x.dia) ?? [];
};

export default calculateWorkDaysOfMonth;
export { getFestiveDatesOfCurrentMonth };
