import { BASE_URL } from "./constants";
import { DolarInfo, DollarHistory } from "./types";

const getDollarHistoric = () => {
  return new Request(BASE_URL);
};

const filterByType = (type: "Oficial" | "Blue") => (data: DollarHistory) =>
  data.filter((d) => d.source === type);

const calculateStatus = (
  latest: DollarHistory[0],
  before: DollarHistory[0]
) => {
  return latest.value_sell > before.value_sell
    ? "increased"
    : latest.value_sell < before.value_sell
    ? "decreased"
    : "equal";
};

const calculateLatestDollar = (history: DollarHistory): DolarInfo => {
  if (!history || history.length === 0) {
    return {
      official: { sell: 0, buy: 0, status: "equal", lastUpdated: "" },
      blue: { sell: 0, buy: 0, status: "equal", lastUpdated: "" },
    };
  }
  const official = filterByType("Oficial")(history);
  const blue = filterByType("Blue")(history);
  const officialLatest = official[0];
  const beforeOfficial = official[1];

  const blueLatest = blue[0];
  const beforeBlue = blue[1];
  return {
    official: {
      sell: officialLatest.value_sell,
      buy: officialLatest.value_buy,
      status: calculateStatus(officialLatest, beforeOfficial),
      lastUpdated: officialLatest.date,
    },

    blue: {
      sell: blueLatest.value_sell,
      buy: blueLatest.value_buy,
      status: calculateStatus(blueLatest, beforeBlue),
      lastUpdated: blueLatest.date,
    },
  };
};

export { getDollarHistoric, calculateLatestDollar };
