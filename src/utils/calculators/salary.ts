const PERCENTAGE_FOR_SIX_HOURS = 0.75;
const PERCENTAGE_FOR_EIGHT_HOURS = 1;
const PERCENTAGE_FOR_FOUR_HOURS = 0.6667; // Fuente: ChatGPT
const TAX_PERCENTAGE = 0.17;

export type FinalSalary = {
  netIncome: number;
  netIncomeInDollars: number;
  netIncomePlusDolarBlue: number;
};

const calculateNetIncome = (
  grossIncome: number,
  percentage: number,
  dolarValue: number,
  dolarPercentage = 1
): FinalSalary => {
  const grossByHour = grossIncome * percentage;
  const grossInPesos = grossByHour - grossByHour * dolarPercentage;

  const netIncome = grossInPesos - grossInPesos * TAX_PERCENTAGE;
  const netIncomeInDollars = (grossIncome * dolarPercentage) / dolarValue;
  const netIncomePlusDolarBlue = netIncome * dolarValue;

  return {
    netIncome,
    netIncomeInDollars,
    netIncomePlusDolarBlue,
  };
};

export {
  calculateNetIncome,
  PERCENTAGE_FOR_SIX_HOURS,
  PERCENTAGE_FOR_EIGHT_HOURS,
  PERCENTAGE_FOR_FOUR_HOURS,
};
