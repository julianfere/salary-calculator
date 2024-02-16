import { Input } from "antd";
import { StyledFormItem } from "components/SalaryForm/styles";

const SalaryInput = () => {
  return (
    <StyledFormItem name="salary" label="Sueldo bruto" labelAlign="right">
      <Input type="phone" />
    </StyledFormItem>
  );
};

export default SalaryInput;
