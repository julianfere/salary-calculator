import NumericInput from "@components/NumericInput";
import { StyledFormItem } from "@components/SalaryForm/styles";
import { Rule } from "antd/es/form";

const SalaryInput = ({ rules }: { rules?: Rule[] }) => {
  return (
    <StyledFormItem
      name="salary"
      label="Sueldo neto"
      labelAlign="right"
      rules={rules}
    >
      <NumericInput type="numeric" />
    </StyledFormItem>
  );
};

export default SalaryInput;
