const PERCENTAGE_FOR_EIGHT_HOURS = 1;
const PERCENTAGE_FOR_SIX_HOURS = 0.75;
const PERCENTAGE_FOR_FOUR_HOURS = 0.5; // Fuente: ChatGPT
const TAX_PERCENTAGE = 0.17;

export type FinalSalary = {
  netIncome: number;
  netIncomeInDollars: number;
  netIncomePlusDolarBlue: number;
  plusDollars: number;
};

const calculateNetIncome = (
  grossIncome: number,
  percentage: number,
  dolarValue: number,
  dolarPercentage = 1,
  plusDollars = 0
): FinalSalary => {
  const skipDolar = dolarPercentage === 1;
  const grossByHour = grossIncome * percentage;
  const grossInPesos = skipDolar
    ? grossByHour
    : grossByHour - grossByHour * dolarPercentage;

  const netIncome = grossInPesos - grossInPesos * TAX_PERCENTAGE;

  if (skipDolar)
    return {
      netIncome,
      netIncomeInDollars: 0,
      netIncomePlusDolarBlue: 0,
      plusDollars,
    };

  const netIncomeInDollars = (grossIncome * dolarPercentage) / dolarValue;
  const netIncomePlusDolarBlue =
    netIncome + (netIncomeInDollars + plusDollars) * dolarValue;

  return {
    netIncome,
    netIncomeInDollars,
    netIncomePlusDolarBlue,
    plusDollars,
  };
};

export {
  calculateNetIncome,
  PERCENTAGE_FOR_SIX_HOURS,
  PERCENTAGE_FOR_EIGHT_HOURS,
  PERCENTAGE_FOR_FOUR_HOURS,
};
