import { Button, Card, Descriptions, Form, Input, Select } from "antd";
import {
  PERCENTAGE_FOR_EIGHT_HOURS,
  PERCENTAGE_FOR_FOUR_HOURS,
  PERCENTAGE_FOR_SIX_HOURS,
} from "config/contstants";
import { useTheme } from "hooks";
import useApp from "hooks/useApp";
import useLocalStorage from "hooks/useLocalStorage";
import { useState } from "react";
import { FinalSalary, calculateNetIncome, humanReadableNumber } from "utils";
import { StyledFormItem } from "./styles";

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
  const [salaryData, setSalaryData] = useState<FinalSalary | null>(null);
  const [form] = Form.useForm();
  const { set } = useLocalStorage();
  const {
    state: { dolarValueSell },
  } = useApp();
  const { colorPrimary } = useTheme();

  const handleSubmit = (values: any) => {
    const data = calculateNetIncome(
      values.salary,
      values.percentage,
      dolarValueSell,
      values.dolarPercentage,
      values.plusDollars
    );

    set("LastSalary", {
      salary: data.netIncome,
      lastUpdated: new Date().toString(),
    });
    setSalaryData(data);
  };

  return (
    <Card title="Calcular sueldo">
      <Form form={form} layout="vertical" size="large" onFinish={handleSubmit}>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <StyledFormItem name="salary" label="Sueldo bruto" labelAlign="right">
            <Input />
          </StyledFormItem>
          <StyledFormItem name="percentage" label="Horas" labelAlign="right">
            <Select options={hourOptions} size="large" />
          </StyledFormItem>
          <StyledFormItem
            name="dolarPercentage"
            label="Porcentaje"
            labelAlign="right"
          >
            <Select options={dollarOptions} />
          </StyledFormItem>
          <StyledFormItem
            name="plusDollars"
            label="Plus (USD)"
            labelAlign="right"
          >
            <Input />
          </StyledFormItem>
          <StyledFormItem label>
            <Button type="primary" htmlType="submit">
              Calcular
            </Button>
          </StyledFormItem>
          <section>
            <Descriptions title="Cuenta final" bordered>
              <Descriptions.Item
                label="Neto"
                labelStyle={{ color: colorPrimary }}
              >
                {humanReadableNumber(salaryData?.netIncome ?? 0) ?? "-"}
              </Descriptions.Item>
              <Descriptions.Item
                label="Dolares"
                labelStyle={{ color: colorPrimary }}
              >
                {humanReadableNumber(salaryData?.netIncomeInDollars ?? 0) ??
                  "-"}
              </Descriptions.Item>
              <Descriptions.Item
                label="Neto con dolares"
                labelStyle={{ color: colorPrimary }}
              >
                {humanReadableNumber(salaryData?.netIncomePlusDolarBlue ?? 0) ??
                  "-"}
              </Descriptions.Item>
            </Descriptions>
          </section>
        </section>
      </Form>
    </Card>
  );
};

export default SalaryForm;
