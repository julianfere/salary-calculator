import { IFinalSalary } from "@entities/Salary";
import useDashboard from "@hooks/useDashboard";

type CalculateProps = {
  netIncome: number;
  hoursPercentage: number;
  dollarPercentage: number;
  plusDollars: number;
  plusPesos: number;
}

const normalizeNumber = (value: number) => {
  if (isNaN(value)) {
    return 0;
  }
  const str = value.toString();

  const fnumber = str.replace(/[,.]/g, "");
  const integer = parseInt(fnumber, 10);

  return integer;
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
    const nDollarPercentage = normalizeNumber(dollarPercentage);
    const nNetIncome = normalizeNumber(netIncome ?? 0);
    const nPlusDollars = normalizeNumber(plusDollars ?? 0);
    const nPlusPesos = normalizeNumber(plusPesos ?? 0);

    const netIncomeRestedHours =
      nNetIncome * nHoursPercentage;

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