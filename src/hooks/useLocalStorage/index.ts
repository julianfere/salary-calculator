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

  const clear = (key: StorageKeys) => {
    localStorage.removeItem(key);
  };

  const getAll = (): AppStorage => {
    return Object.values(StorageKeysEnum).reduce((acc, key) => {
      const value = localStorage.getItem(key);
      return { ...acc, [key]: value ? JSON.parse(value) : {} };
    }, {} as AppStorage);
  };

  return { get, set, clear, getAll };
};

export default useLocalStorage;
