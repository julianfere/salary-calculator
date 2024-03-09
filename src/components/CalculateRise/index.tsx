import { Button, Descriptions, Form, Card } from "antd";
import { useTheme } from "@hooks/useTheme";
import { useLocalStorage } from "@julianfere/react-utility-hooks"
import { useState } from "react";

import { humanReadableNumber } from "@utils/NumberUtils";
import { Column, RaiseFormContainer, StyledFormItem } from "./styles";
import useDashboard from "@hooks/useDashboard";
import { IStore } from "@entities/Storage";
import NumericInput from "@components/NumericInput";

const CalculateRise = () => {
  const [form] = Form.useForm();
  const [result, setResult] = useState<string>();
  const { updateContext } = useDashboard();
  const { setItem } = useLocalStorage<IStore>();

  const handleSubmit = () => {
    const { salary, percentage } = form.getFieldsValue();
    if (!salary || !percentage) return;
    const s = parseFloat(salary);
    const p = parseFloat(percentage);

    if (s < 0 || p < 0) return;

    const raisedAmount = s * (p / 100);
    const res = s + raisedAmount;

    setItem("raise", {
      value: raisedAmount,
      lastUpdate: new Date().toString(),
    });
    updateContext({ raise: { value: raisedAmount, lastUpdate: new Date().toString() } });

    setResult(() => humanReadableNumber(res));
  };

  const { colorPrimary } = useTheme();

  const requiredRule = { required: true, message: "Campo requerido" };

  return (
    <Card title="Calcular aumento">
      <Form
        form={form}
        layout="vertical"
        size="large"
        onFinish={handleSubmit}
        requiredMark={false}
      >
        <RaiseFormContainer>
          <Column>
            <StyledFormItem
              name="salary"
              label="Ultimo sueldo bruto"
              labelAlign="right"
              rules={[requiredRule]}
            >
              <NumericInput />
            </StyledFormItem>
            <StyledFormItem
              name="percentage"
              label=" "
              style={{ width: "5rem" }}
              rules={[requiredRule]}
            >
              <NumericInput addonBefore="%" />
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
