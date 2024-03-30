import { InputNumberProps } from "antd";
import { StyledInputNumber } from "./styles";

const NumericInput = (props: InputNumberProps) => {
  return <StyledInputNumber addonBefore="$" inputMode="decimal" {...props} />;
};

export default NumericInput;
