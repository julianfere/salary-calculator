import NumericInput from "@components/NumericInput";
import { StyledFormItem } from "@components/SalaryForm/styles";

const PlusPesosInput = () => {
  return (
    <StyledFormItem name="plusPesos" label="Plus Pesos" labelAlign="right">
      <NumericInput type="numeric" />
    </StyledFormItem>
  );
};

export default PlusPesosInput;
