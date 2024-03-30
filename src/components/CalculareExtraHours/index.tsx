import NumericInput from "@components/NumericInput";
import useDashboard from "@hooks/useDashboard";
import useExtraHourCalculator from "@hooks/useExtraHourCalculator";
import { humanReadableNumber } from "@utils/NumberUtils";
import { Button, Card, Descriptions, Form } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";

interface ExtraHoursForm {
  salary: number;
  hoursPerMonth: number;
  hoursDone: number;
}

interface ExtraHoursResponse {
  hourSalary: number;
  extraHours: number;
  extraSalary: number;
  total: number;
}

const CalculateExtraHours = () => {
  const [form] = Form.useForm<ExtraHoursForm>();
  const { salary } = useDashboard();
  const { calculate } = useExtraHourCalculator();
  const [response, setResponse] = useState<ExtraHoursResponse | null>(null);

  const handleSubmit = (values: ExtraHoursForm) => {
    const response = calculate(values);

    setResponse(response);
  };

  return (
    <Card title="Horas extra">
      <Form
        form={form}
        layout="vertical"
        size="large"
        onFinish={handleSubmit}
        requiredMark={false}
      >
        <FormItem label="Sueldo Actual" name="salary">
          <NumericInput defaultValue={salary.value} value={salary.value} />
        </FormItem>
        <FormItem label="Horas por mes" name="hoursPerMonth">
          <NumericInput addonBefore={null} />
        </FormItem>
        <FormItem label="Horas hechas" name="hoursDone">
          <NumericInput addonBefore={null} />
        </FormItem>
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Descriptions bordered>
            <Descriptions.Item label="Sueldo por hora">
              {humanReadableNumber(response?.hourSalary || 0) ?? "-"}
            </Descriptions.Item>
            <Descriptions.Item label="Sueldo por hora extra">
              {humanReadableNumber(response?.extraSalary || 0) ?? "-"}
            </Descriptions.Item>
            <Descriptions.Item label="Total">
              {humanReadableNumber(response?.total || 0) ?? "-"}
            </Descriptions.Item>
          </Descriptions>
          <section
            style={{
              display: "flex",
              gap: 10,
            }}
          >
            <Button type="dashed" onClick={() => form.resetFields()}>
              Limpiar
            </Button>
            <Button type="primary" htmlType="submit">
              Calcular
            </Button>
          </section>
        </section>
      </Form>
    </Card>
  );
};

export default CalculateExtraHours;
