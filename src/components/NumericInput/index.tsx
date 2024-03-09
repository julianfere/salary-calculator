import { InputNumberProps } from "antd";
import { StyledInputNumber } from "./styles";

const NumericInput = (props: InputNumberProps) => {
  return (
    <StyledInputNumber
      {...props}
      addonBefore="$"
      pattern="[0-9]*"
      inputMode="numeric"
    />
  );
}

export default NumericInput;