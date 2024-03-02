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
    plusPesos
  }: CalculateProps): IFinalSalary => {
    const skipDollar = dollarPercentage === 1;

    const normalizedNetIncome = normalizeNumber(netIncome ?? 0);
    const normalizedPlusDollars = normalizeNumber(plusDollars ?? 0);
    const normalizedPlusPesos = normalizeNumber(plusPesos ?? 0);

    const netIncomeRestedHours = normalizedNetIncome * hoursPercentage 

    const netIncomeInDollars = ((netIncomeRestedHours + normalizedPlusPesos) * dollarPercentage) / dollar.blue.sell;
    const netIncomePlusDolarBlue = ((netIncomeInDollars + normalizedPlusDollars) *  dollar.blue.sell) + netIncomeRestedHours;
    const netIncomeRestedDollar = netIncomeRestedHours - (netIncomeInDollars * dollar.blue.sell);

    if (skipDollar) {
      return {
        netIncome: netIncomeRestedHours + normalizedPlusPesos,
        netIncomeInDollars: 0,
        netIncomePlusDolarBlue: 0,
        plusDollars: 0,
        plusPesos
      }
    }

    return {
      netIncome: netIncomeRestedDollar + normalizedPlusPesos,
      netIncomeInDollars,
      netIncomePlusDolarBlue,
      plusDollars: normalizedPlusDollars,
      plusPesos: normalizedPlusPesos
    }
  }

  return {
    calculate
  }
}

export default useSalaryCalculator;