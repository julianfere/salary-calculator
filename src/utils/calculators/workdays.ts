import { FestiveDatesResposne } from "services/workDaysService/types";
import { getDateObject } from "utils/date/dateMapper";

const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

const getWorkDays = (month: number, year: number) => {
  const totalMonthDays = getDaysInMonth(month, year);
  const workDays = totalMonthDays - 8; //substract 8 weekend days
  return workDays;
};

const calculateWorkDaysOfCurrentMonth = (
  festiveDates: FestiveDatesResposne
) => {
  const { month, year } = getDateObject();

  const filteredDates = festiveDates.filter(
    (x) => x.mes === month && x.tipo !== "nolaborable"
  );

  const workDaysAndFestiveDates = getWorkDays(month, year);
  return workDaysAndFestiveDates - filteredDates.length;
};

const getFestiveDatesOfCurrentMonth = (festiveDates: FestiveDatesResposne) => {
  const { month } = getDateObject();

  return festiveDates.filter((x) => x.mes === month).map((x) => x.dia) ?? [];
};

export default calculateWorkDaysOfCurrentMonth;
export { getFestiveDatesOfCurrentMonth };
