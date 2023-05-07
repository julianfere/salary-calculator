const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getMonthName = (date: Date): string => {
  return MONTH[date.getMonth()];
};

const getDayName = (date: Date): string => {
  return DAYS[date.getDate()];
};

const getDateObject = () => {
  const currentDate = new Date();

  return {
    day: currentDate.getDate(),
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear(),
    dayName: getDayName(currentDate),
    monthName: getMonthName(currentDate),
  };
};

export { getDayName, getMonthName, getDateObject };
