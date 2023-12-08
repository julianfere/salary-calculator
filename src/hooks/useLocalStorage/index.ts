import { AppStorage, StorageKeys } from "./types";

const useLocalStorage = () => {
  const get = <T>(key: keyof typeof StorageKeys) => {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  };

  const set = (key: keyof typeof StorageKeys, value: AppStorage[typeof key]) => {
    if (!value) return;

    localStorage.setItem(key, JSON.stringify(value));
  };

  const clear = (key: keyof typeof StorageKeys) => {
    localStorage.removeItem(key);
  };

  const getAll = (): AppStorage => {
    return Object.keys(StorageKeys).reduce((acc, key) => {
      const value = localStorage.getItem(key);
      return { ...acc, [key]: value ? JSON.parse(value) : null };
    }, {} as AppStorage);
  };

  return { get, set, clear, getAll };
};

export default useLocalStorage;
