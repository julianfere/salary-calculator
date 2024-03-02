import { PropsWithChildren, createContext, useState } from "react";
import { IDashboardContext } from "./types";
import { initialContextValue } from "./initials";
import useDollar from "../hooks/useDollar";
import { useLocalStorage } from "@julianfere/react-utility-hooks";
import { IStore } from "@entities/Storage";

export const DashboardContext = createContext<IDashboardContext>(initialContextValue);

const DashboardProvider = ({children}: PropsWithChildren) => {
  const { getItem, setItem } = useLocalStorage<IStore>();
  const [store, setStore] = useState<IStore>(
    {
      salary: getItem("salary") || {lastUpdate: "", value: 0},
      config: getItem("config") || {},
      raise: {lastUpdate: "", value: 0}
    }
  );
  const { dollar } = useDollar();

  const updateContext = (newStore: Partial<IStore>) => {
    setStore({...store, ...newStore});
    
    if (newStore.config) setItem("config", newStore.config);
    if (newStore.salary) setItem("salary", newStore.salary);
  }

  const { config, raise, salary } = store;

  const value: IDashboardContext = {
    config,
    raise,
    salary,
    dollar,
    updateContext
  }

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
};

export default DashboardProvider;