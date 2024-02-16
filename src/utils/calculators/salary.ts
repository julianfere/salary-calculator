import { TAX_PERCENTAGE } from "config/contstants";

export type FinalSalary = {
  netIncome: number;
  netIncomeInDollars: number;
  netIncomePlusDolarBlue: number;
  plusDollars: number;
  plusPesos: number;
};

const normalizeNumber = (value: number) => {
  const str = value.toString();

  const fnumber = str.replace(/[,.]/g, "");
  const integer = parseInt(fnumber, 10);

  return integer;
};

const calculateNetIncome = (
  grossIncome: number,
  percentage: number,
  dolarValue: number,
  dolarPercentage = 1,
  plusDollars = 0,
  plusPesos = 0
): FinalSalary => {
  const skipDolar = dolarPercentage === 1;
  const normalizedPlusPesos = normalizeNumber(plusPesos);
  const salary = normalizeNumber(grossIncome);
  const grossByHour = salary * percentage;
  const grossInPesos = skipDolar
    ? grossByHour
    : grossByHour - grossByHour * dolarPercentage;

  const netIncome = grossInPesos - grossInPesos * TAX_PERCENTAGE;

  if (skipDolar)
    return {
      netIncome: netIncome + normalizedPlusPesos,
      netIncomeInDollars: 0,
      netIncomePlusDolarBlue: 0,
      plusDollars,
      plusPesos,
    };

  const netIncomeInDollars = (salary * dolarPercentage) / dolarValue;
  const netIncomePlusDolarBlue =
    netIncome +
    normalizedPlusPesos +
    (netIncomeInDollars + plusDollars) * dolarValue;
  return {
    netIncome: netIncome + normalizedPlusPesos,
    netIncomeInDollars,
    netIncomePlusDolarBlue,
    plusDollars,
    plusPesos,
  };
};

export { calculateNetIncome };
