import { BASE_URL } from "./constants";
import { DollarHistory, LatestDollarInfo } from "./types";

const getDollarHistoric = () => {
  return new Request(BASE_URL);
};

const calculateLatestDollar = (history: DollarHistory): LatestDollarInfo => {
  const latest = history[0];
  const beforeUpdate = history[1];

  const status =
    latest.value_sell > beforeUpdate.value_sell
      ? "increased"
      : latest.value_sell < beforeUpdate.value_sell
      ? "decreased"
      : "equal";

  const { value_sell: sell, value_buy: buy, date: lastUpdated } = latest;

  return { sell, buy, status, lastUpdated };
};

export { getDollarHistoric, calculateLatestDollar };
