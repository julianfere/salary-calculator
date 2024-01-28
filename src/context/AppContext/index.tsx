import { PropsWithChildren, createContext, useReducer } from "react";
import { initialContext, initialState } from "./initials";
import reducer from "./reducer";
import { useLocalStorage } from "hooks";

export const AppContext = createContext(initialContext);

const AppProvider = ({ children }: PropsWithChildren) => {
  const { getAll, getConfig } = useLocalStorage();

  const storedState = getAll();
  const config = getConfig();
  console.log(config);
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    config,
    storedData: { ...initialState.storedData, ...storedState },
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
