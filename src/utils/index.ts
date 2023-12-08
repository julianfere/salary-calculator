import voidFunction from "./misc/voidFunction";
import calculateWorkDaysOfMonth, {
  getFestiveDatesOfCurrentMonth,
} from "./calculators/workdays";
import { getMonthName } from "./date/dateMapper";
import {
  PERCENTAGE_FOR_EIGHT_HOURS,
  PERCENTAGE_FOR_FOUR_HOURS,
  PERCENTAGE_FOR_SIX_HOURS,
  calculateNetIncome,
  FinalSalary,
} from "./calculators/salary";

import { humanReadableNumber } from "./misc/numbers";

export {
  voidFunction,
  calculateWorkDaysOfMonth,
  getMonthName,
  getFestiveDatesOfCurrentMonth,
  calculateNetIncome,
  humanReadableNumber,
  PERCENTAGE_FOR_EIGHT_HOURS,
  PERCENTAGE_FOR_FOUR_HOURS,
  PERCENTAGE_FOR_SIX_HOURS,
};

export type { FinalSalary };
