import { IFinalSalary } from "@entities/Salary";
import useDashboard from "@hooks/useDashboard";

type CalculateProps = {
  netIncome: number;
  hoursPercentage: number;
  dollarPercentage: number;
  plusDollars: number;
  plusPesos: number;
};

const normalizeNumber = (value: number) => {
  if (isNaN(value)) {
    return 0;
  }
  const str = value.toString();

  const float = parseFloat(str);

  return float;
};

const useSalaryCalculator = () => {
  const { dollar } = useDashboard();

  const calculate = ({
    netIncome,
    hoursPercentage,
    dollarPercentage,
    plusDollars,
    plusPesos,
  }: CalculateProps): IFinalSalary => {
    const skipDollar = dollarPercentage === 1;

    const nHoursPercentage = normalizeNumber(hoursPercentage);
    const nDollarPercentage = dollarPercentage;
    const nNetIncome = normalizeNumber(netIncome ?? 0);
    const nPlusDollars = normalizeNumber(plusDollars ?? 0);
    const nPlusPesos = normalizeNumber(plusPesos ?? 0);

    const netIncomeRestedHours = nNetIncome * nHoursPercentage;

    const netIncomeInDollars =
      (netIncomeRestedHours * nDollarPercentage) / dollar.blue.sell;
    const netIncomePlusDolarBlue =
      (netIncomeInDollars + nPlusDollars) * dollar.blue.sell +
      netIncomeRestedHours;
    const netIncomeRestedDollar =
      netIncomeRestedHours - netIncomeInDollars * dollar.blue.sell;

    if (skipDollar) {
      return {
        netIncome: netIncomeRestedHours + nPlusPesos,
        netIncomeInDollars: 0,
        netIncomePlusDolarBlue: 0,
        plusDollars: 0,
        plusPesos,
      };
    }

    if (process.env.NODE_ENV === "development") {
      console.table({
        nHoursPercentage,
        nDollarPercentage,
        nNetIncome,
        nPlusDollars,
        nPlusPesos,
      });

      console.table({
        netIncome: netIncomeRestedDollar + nPlusPesos,
        netIncomeInDollars,
        netIncomePlusDolarBlue,
        plusDollars: nPlusDollars,
        plusPesos: nPlusPesos,
      });
    }

    return {
      netIncome: netIncomeRestedDollar + nPlusPesos,
      netIncomeInDollars,
      netIncomePlusDolarBlue,
      plusDollars: nPlusDollars,
      plusPesos: nPlusPesos,
    };
  };

  return {
    calculate,
  };
};

export default useSalaryCalculator;
