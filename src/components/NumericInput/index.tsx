import { InputNumberProps } from "antd";
import { StyledInputNumber } from "./styles";

const NumericInput = (props: InputNumberProps) => {
  return <StyledInputNumber {...props} addonBefore="$" inputMode="decimal" />;
}

export default NumericInput;