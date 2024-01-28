export enum StorageKeysEnum {
  LastSalary = "lastSalary",
  LastRaise = "lastRaise",
  Config = "config",
}

export type StorageKeys = `${StorageKeysEnum}`;

export type StoredData = {
  value: number;
  lastUpdated: string;
};

export type AppStorage = {
  lastSalary: StoredData;
  lastRaise: StoredData;
};
