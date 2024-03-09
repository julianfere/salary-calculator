import NumericInput from "@components/NumericInput";
import { StyledFormItem } from "@components/SalaryForm/styles";
import { Rule } from "antd/es/form";

const PlusDolarsInput = ({ rules }: { rules?: Rule[] }) => {
  return (
    <StyledFormItem
      name="plusDollars"
      label="Plus (USD)"
      labelAlign="right"
      rules={rules}
    >
      <NumericInput
        type="numeric"
        style={{
          width: "100%!important",
          display: "block",
        }}
      />
    </StyledFormItem>
  );
};

export default PlusDolarsInput;
