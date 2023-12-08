import { Form } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
`;

export const StyledFormItem = styled(Form.Item)`
  display: inline-block;

  & .ant-row .ant-form-item-row {
    width: 100%;
  }
`;

export const Column = styled.section`
  display: flex;
  gap: 1rem;
`;

export const RaiseFormContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
