import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppStateProvider } from "providers/AppStateProvider";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const AppProvider = ({ children }: { children: React.ReactNode }) => (
  <AppStateProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </AppStateProvider>
);

export { AppProvider };
