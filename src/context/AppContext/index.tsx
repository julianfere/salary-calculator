import { PropsWithChildren, createContext, useReducer } from "react";
import { initialContext, initialState } from "./initials";
import reducer from "./reducer";
import { useLocalStorage } from "hooks";

export const AppContext = createContext(initialContext);

const AppProvider = ({ children }: PropsWithChildren) => {
  const { getAll } = useLocalStorage();

  const storedState = getAll();
  console.log(storedState);
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...storedState,
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
