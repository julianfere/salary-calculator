import { AppConfig } from "context/AppContext/types";
import { AppStorage, StorageKeys, StorageKeysEnum, StoredData } from "./types";

const useLocalStorage = () => {
  const get = <T>(key: StorageKeys) => {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  };

  const set = (key: StorageKeys, value: StoredData) => {
    if (!value) return;

    localStorage.setItem(key, JSON.stringify(value));
  };

  const saveConfig = (value: AppConfig) => {
    if (!value) return;

    localStorage.setItem(StorageKeysEnum.Config, JSON.stringify(value));
  };

  const clear = (key: StorageKeys) => {
    localStorage.removeItem(key);
  };

  const getAll = (): AppStorage => {
    return Object.values(StorageKeysEnum).reduce((acc, key) => {
      const value = localStorage.getItem(key);
      return { ...acc, [key]: value ? JSON.parse(value) : {} };
    }, {} as AppStorage);
  };

  const getConfig = (): AppConfig => {
    const value = localStorage.getItem(StorageKeysEnum.Config);
    return value ? JSON.parse(value) : {};
  };

  return { get, set, clear, getAll, saveConfig, getConfig };
};

export default useLocalStorage;
