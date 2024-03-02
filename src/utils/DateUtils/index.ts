const MONTH = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const getMonthName = (date: Date | number): string => {
  if (typeof date === "number") {
    return MONTH[date - 1];
  }

  return MONTH[date.getMonth()];
};

const getDateObject = () => {
  const currentDate = new Date();

  return {
    day: currentDate.getDate(),
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear(),
    monthName: getMonthName(currentDate),
  };
};

export { getMonthName, getDateObject };