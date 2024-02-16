import { Input } from "antd";
import { StyledFormItem } from "components/SalaryForm/styles";

const PlusPesosInput = () => {
  return (
    <StyledFormItem name="plusPesos" label="Plus Pesos" labelAlign="right">
      <Input type="phone" />
    </StyledFormItem>
  );
};

export default PlusPesosInput;
