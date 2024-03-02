import { theme } from "antd";

const useTheme = () => {
  const { token } = theme.useToken();

  return {
    ...token,
    resaltedText: "#451ec7",
    incrementText: "#d1361b",
    decrementText: "#51a861",
  };
};

export { useTheme };
