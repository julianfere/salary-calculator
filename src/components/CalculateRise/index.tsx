import { Input, Button, Descriptions, Form } from "antd";
import { useTheme } from "hooks";
import useLocalStorage from "hooks/useLocalStorage";
import { useState } from "react";

import { humanReadableNumber } from "utils";
import { Column, RaiseFormContainer, StyledFormItem } from "./styles";
import Card from "components/Card";

const CalculateRise = () => {
  const [form] = Form.useForm();
  const [result, setResult] = useState<string>();
  const { set } = useLocalStorage();

  const handleSubmit = () => {
    const { salary, percentage } = form.getFieldsValue();
    if (!salary || !percentage) return;
    const s = parseFloat(salary);
    const p = parseFloat(percentage);

    if (s < 0 || p < 0) return;

    const res = s + s * (p / 100);

    set("LastRaise", {
      raise: res,
      lastUpdated: new Date().toString(),
    });

    setResult(() => humanReadableNumber(res));
  };

  const { colorPrimary } = useTheme();

  return (
    <Card title="Calcular aumento">
      <Form form={form} layout="vertical" size="large" onFinish={handleSubmit}>
        <RaiseFormContainer>
          <Column>
            <StyledFormItem
              name="salary"
              label="Ultimo sueldo bruto"
              labelAlign="right"
            >
              <Input />
            </StyledFormItem>
            <StyledFormItem
              name="percentage"
              label="%"
              style={{ width: "5rem" }}
            >
              <Input />
            </StyledFormItem>
            <StyledFormItem label>
              <Button type="primary" htmlType="submit">
                Calcular
              </Button>
            </StyledFormItem>
          </Column>
          <Descriptions bordered>
            <Descriptions.Item
              label="Resultado"
              labelStyle={{ color: colorPrimary }}
            >
              {result ?? "-"}
            </Descriptions.Item>
          </Descriptions>
        </RaiseFormContainer>
      </Form>
    </Card>
  );
};

export default CalculateRise;
