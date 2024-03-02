import NumericInput from "@components/NumericInput";
import { StyledFormItem } from "@components/SalaryForm/styles";

const PlusDolarsInput = () => {
  return (
    <StyledFormItem name="plusDollars" label="Plus (USD)" labelAlign="right">
      <NumericInput type="numeric" style={{
        width:'100%!important',
        display:'block',
      }}/>
    </StyledFormItem>
  );
};

export default PlusDolarsInput;
