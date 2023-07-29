import { AppStateProvider } from "providers/AppStateProvider";
import { ThemeProvider } from "providers/ThemeProvider";
import { ReactNode } from "react";

const AppProvider = ({ children }: { children: ReactNode }) => (
  <AppStateProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </AppStateProvider>
);

export { AppProvider };
