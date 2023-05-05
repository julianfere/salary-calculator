const MONTH = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getMonthName = (date: Date): string => {
  return MONTH[date.getMonth()]
}

const getDayName = (date: Date): string => {
  return DAYS[date.getDate()]
}

export {getDayName, getMonthName}