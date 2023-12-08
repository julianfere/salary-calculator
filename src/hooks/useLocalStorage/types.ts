export enum StorageKeysEnum {
  LastSalary = "LastSalary",
  LastRaise = "LastRaise",
}

export type StorageKeys = keyof typeof StorageKeysEnum;

export type StoredData = {
  value: number;
  lastUpdated: string;
};

export type AppStorage = {
  lastSalary: StoredData;
  lastRaise: StoredData;
};
