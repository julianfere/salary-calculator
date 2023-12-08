import voidFunction from "./misc/voidFunction";
import calculateWorkDaysOfMonth, {
  getFestiveDatesOfCurrentMonth,
} from "./calculators/workdays";
import { getMonthName } from "./date/dateMapper";
import { calculateNetIncome, FinalSalary } from "./calculators/salary";

import { humanReadableNumber } from "./misc/numbers";

export {
  voidFunction,
  calculateWorkDaysOfMonth,
  getMonthName,
  getFestiveDatesOfCurrentMonth,
  calculateNetIncome,
  humanReadableNumber,
};

export type { FinalSalary };
