import { Row, Col, Card, Input, Button, Descriptions, Form } from "antd";
import { useTheme } from "hooks";
import { useState } from "react";

import { humanReadableNumber } from "utils";

const CalculateRise = () => {
  const [form] = Form.useForm();
  const [result, setResult] = useState<string>();

  const handleSubmit = () => {
    const { salary, percentage } = form.getFieldsValue();
    if (!salary || !percentage) return;
    const s = parseFloat(salary);
    const p = parseFloat(percentage);

    if (s < 0 || p < 0) return;

    const res = s + s * (p / 100);
    setResult(() => humanReadableNumber(res));
  };
  const { colorPrimary } = useTheme();

  return (
    <Row justify="center">
      <Col>
        <Card title="Calcular aumento" type="inner">
          <Form
            form={form}
            layout="vertical"
            size="large"
            onFinish={handleSubmit}
          >
            <Row justify="center" align="middle" gutter={10}>
              <Col xl={7} xs={24}>
                <Form.Item
                  name="salary"
                  label="Ultimo sueldo bruto"
                  labelAlign="right"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xl={4} xs={24}>
                <Form.Item name="percentage" label="%">
                  <Input />
                </Form.Item>
              </Col>
              <Col xl={4} xs={24}>
                <Form.Item label>
                  <Button type="primary" htmlType="submit">
                    Calcular
                  </Button>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Descriptions bordered>
                  <Descriptions.Item
                    label="Resultado"
                    labelStyle={{ color: colorPrimary }}
                  >
                    {result ?? "-"}
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default CalculateRise;
