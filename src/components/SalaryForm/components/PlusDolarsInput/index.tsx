import { Input } from "antd";
import { StyledFormItem } from "components/SalaryForm/styles";

const PlusDolarsInput = () => {
  return (
    <StyledFormItem name="plusDollars" label="Plus (USD)" labelAlign="right">
      <Input type="phone" />
    </StyledFormItem>
  );
};

export default PlusDolarsInput;
