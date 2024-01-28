import { Button, Form } from "antd";
import styled from "styled-components";

export const StyledFormItem = styled(Form.Item)`
  display: inline-block;
`;

export const StyledButton = styled(Button)`
  @media (max-width: 570px) {
    width: 100%;
  }
`;

export const FormControllContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
