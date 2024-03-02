import NumericInput from "@components/NumericInput";
import { StyledFormItem } from "@components/SalaryForm/styles";

const SalaryInput = () => {
  return (
    <StyledFormItem name="salary" label="Sueldo neto" labelAlign="right">
      <NumericInput type="numeric" />
    </StyledFormItem>
  );
};

export default SalaryInput;
