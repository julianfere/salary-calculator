import { StyledButton, StyledFormItem } from "components/SalaryForm/styles";

const SubmitBtn = () => {
  return (
    <StyledFormItem label>
      <StyledButton type="primary" htmlType="submit">
        Calcular
      </StyledButton>
    </StyledFormItem>
  );
};

export default SubmitBtn;
