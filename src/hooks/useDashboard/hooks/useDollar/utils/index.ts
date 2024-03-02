import { IDollarData, IDollarHistory } from "@entities/Dollar";

const filterByType = (type: "Oficial" | "Blue") => (data: IDollarHistory[]) =>
  data.filter((d) => d.source === type);

const calculateStatus = (
  latest: IDollarHistory,
  before: IDollarHistory
) => {
  return latest.value_sell > before.value_sell
    ? "increased"
    : latest.value_sell < before.value_sell
    ? "decreased"
    : "equal";
};

const calculateLatestDollar = (history: IDollarHistory[]): IDollarData => {
  if (!history || history.length === 0) {
    return {
      official: { sell: 0, buy: 0, status: "equal", lastUpdate: "" },
      blue: { sell: 0, buy: 0, status: "equal", lastUpdate: "" },
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
      lastUpdate: officialLatest.date,
    },

    blue: {
      sell: blueLatest.value_sell,
      buy: blueLatest.value_buy,
      status: calculateStatus(blueLatest, beforeBlue),
      lastUpdate: blueLatest.date,
    },
  };
};

export { calculateLatestDollar };
