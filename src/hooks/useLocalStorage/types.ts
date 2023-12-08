export enum StorageKeys {
  LastSalary = "LastSalary",
  LastRaise = "LastRaise",
}

export type LastSalaryStorage = {
  salary: number;
  lastUpdated: string;
};

export type LastRaiseStorage = {
  raise: number;
  lastUpdated: string;
};

export type AppStorage = {
  LastSalary: LastSalaryStorage;
  LastRaise: LastRaiseStorage;
};
