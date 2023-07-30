import {
  Button,
  Card,
  Col,
  Descriptions,
  Form,
  Input,
  Row,
  Select,
  Switch,
} from "antd";
import { useTheme } from "hooks";
import { useAppState } from "hooks/useAppSate";
import { useState } from "react";
import {
  FinalSalary,
  PERCENTAGE_FOR_EIGHT_HOURS,
  PERCENTAGE_FOR_FOUR_HOURS,
  PERCENTAGE_FOR_SIX_HOURS,
  calculateNetIncome,
  humanReadableNumber,
} from "utils";

const hourOptions = [
  {
    value: PERCENTAGE_FOR_EIGHT_HOURS,
    label: "8",
  },
  {
    value: PERCENTAGE_FOR_SIX_HOURS,
    label: "6",
  },
  {
    value: PERCENTAGE_FOR_FOUR_HOURS,
    label: "4",
  },
];

const dollarOptions = [
  {
    value: 0.15,
    label: "15%",
  },
  {
    value: 0.2,
    label: "20%",
  },
  {
    value: 0.35,
    label: "35%",
  },
];

const SalaryForm = () => {
  const [showDollarForm, setShowDollarForm] = useState(false);
  const [salaryData, setSalaryData] = useState<FinalSalary | null>(null);
  const [form] = Form.useForm();
  const { dolarValueSell } = useAppState();
  const { colorPrimary } = useTheme();

  const handleSubmit = (values: any) => {
    const data = calculateNetIncome(
      values.salary,
      values.percentage,
      dolarValueSell,
      values.dolarPercentage,
      values.plusDollars
    );

    setSalaryData(data);
  };

  return (
    <Row justify="center">
      <Col>
        <Card title="Calculadora" type="inner">
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
                  label="Sueldo bruto"
                  labelAlign="right"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xl={4} xs={24}>
                <Form.Item name="percentage" label="Horas" labelAlign="right">
                  <Select options={hourOptions} size="large" />
                </Form.Item>
              </Col>
              <Col xl={4} xs={24}>
                <Form.Item label="Parte en dolares" labelAlign="right">
                  <Switch onChange={() => setShowDollarForm((old) => !old)} />
                </Form.Item>
              </Col>
              {showDollarForm && (
                <>
                  <Col xl={3} xs={24}>
                    <Form.Item
                      name="dolarPercentage"
                      label="Porcentaje"
                      labelAlign="right"
                    >
                      <Select options={dollarOptions} />
                    </Form.Item>
                  </Col>
                  <Col xl={4} xs={24}>
                    <Form.Item
                      name="plusDollars"
                      label="Plus (USD)"
                      labelAlign="right"
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </>
              )}
              <Col xl={4} xs={24}>
                <Form.Item label>
                  <Button type="primary" htmlType="submit">
                    Calcular
                  </Button>
                </Form.Item>
              </Col>
              {salaryData && (
                <Col span={24}>
                  <Descriptions title="Cuenta final" bordered>
                    <Descriptions.Item
                      label="Neto"
                      labelStyle={{ color: colorPrimary }}
                    >
                      {humanReadableNumber(salaryData.netIncome)}
                    </Descriptions.Item>
                    {showDollarForm && (
                      <>
                        <Descriptions.Item
                          label="Dolares"
                          labelStyle={{ color: colorPrimary }}
                        >
                          {humanReadableNumber(salaryData.netIncomeInDollars)}
                        </Descriptions.Item>
                        <Descriptions.Item
                          label="Neto con dolares"
                          labelStyle={{ color: colorPrimary }}
                        >
                          {humanReadableNumber(
                            salaryData.netIncomePlusDolarBlue
                          )}
                        </Descriptions.Item>
                      </>
                    )}
                  </Descriptions>
                </Col>
              )}
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default SalaryForm;
