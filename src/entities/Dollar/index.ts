type DollarStatus = 'increased' | 'decreased' | 'equal';

interface IDollar {
  sell: number;
  buy: number;
  lastUpdate: string;
  status: DollarStatus;
}

interface IDollarData {
  official: IDollar;
  blue: IDollar;
}

interface IDollarHistory {
  date: string;
  source: "Oficial" | "Blue";
  value_sell: number;
  value_buy: number;
}


export type { IDollar, IDollarData, DollarStatus, IDollarHistory };