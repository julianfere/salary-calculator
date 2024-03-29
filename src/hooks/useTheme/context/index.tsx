import { ConfigProvider, ThemeConfig, theme } from "antd";
import { ReactNode } from "react";

const { darkAlgorithm } = theme;

const themeCustom: ThemeConfig = {
  algorithm: darkAlgorithm,
  // token: {
  //   colorPrimary: "#00ff66",
  //   colorSuccess: "#52c41a",
  //   colorWarning: "#d1a91b",
  //   colorLink: "#2cb809",
  //   wireframe: true,
  //   borderRadius: 2,
  // },
  token: {
    colorPrimary: "#6b49de",
    colorSuccess: "#9451a8",
    colorInfo: "#6b49de",
  },
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ConfigProvider theme={themeCustom}>{children}</ConfigProvider>;
};

export { ThemeProvider };
