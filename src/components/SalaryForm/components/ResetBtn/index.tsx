import { StyledButton, StyledFormItem } from "@components/SalaryForm/styles";

const ResetBtn = ({ onclick }: { onclick: () => void }) => {
  return (
    <StyledFormItem label>
      <StyledButton type="link" onClick={onclick}>
        Borrar valores
      </StyledButton>
    </StyledFormItem>
  );
};

export default ResetBtn;
