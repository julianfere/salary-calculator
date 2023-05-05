import { FestiveDatesResposne } from "services/workDaysService/types";

const getDayesInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
}

const getWorkDays = (month: number, year: number) => {
  const totalMonthDays = getDayesInMonth(month, year)
  const workDays = totalMonthDays - 8 //substract 8 weekend days
  return workDays
}

const calculateWorkDaysOfCurrentMonth = (festiveDates: FestiveDatesResposne) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; //FUCK YOU JAVASCRIPT

  const filteredDates = festiveDates.filter(x => x.mes === currentMonth && x.tipo !== 'nolaborable')
  
  const workDaysAndFestiveDates = getWorkDays(currentMonth, currentDate.getFullYear())
  return workDaysAndFestiveDates - filteredDates.length
}

export default calculateWorkDaysOfCurrentMonth
