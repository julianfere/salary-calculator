import { Card, Descriptions, Form, FormRule, Tooltip } from "antd";
import { useTheme } from "@hooks/useTheme";
import { useLocalStorage } from "@julianfere/react-utility-hooks";
import { useState } from "react";
import { FormControllContainer } from "./styles";
import { dollarOptions, hourOptions } from "../../constants";
import SalaryInput from "./components/SalaryInput";
import HoursInput from "./components/HoursInput";
import DolarPercentageInput from "./components/DolarPercentageInput";
import PlusDolarsInput from "./components/PlusDolarsInput";
import SubmitBtn from "./components/SubmitBtn";
import ResetBtn from "./components/ResetBtn";
import PlusPesosInput from "./components/PlusPesosInput";
import useDashboard from "@hooks/useDashboard";
import { IStore } from "@entities/Storage";
import { IFinalSalary } from "@entities/Salary";
import useSalaryCalculator from "@hooks/useSalaryCalculator";
import { humanReadableNumber } from "@utils/NumberUtils";
import { Rule } from "antd/es/form";

interface SalaryFormProps {
  hours?: boolean;
  percentage?: boolean;
  plusDollars?: boolean;
  dolar?: boolean;
  pesosPlus?: boolean;
}

const SalaryForm = (props: SalaryFormProps) => {
  const [salaryData, setSalaryData] = useState<IFinalSalary | null>(null);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [form] = Form.useForm();
  const { setItem } = useLocalStorage<IStore>();
  const { config, updateContext } = useDashboard();
  const { colorPrimary } = useTheme();
  const { calculate } = useSalaryCalculator();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: any) => {
    const data = calculate({
      netIncome: values.salary,
      hoursPercentage: values.percentage ?? config.hours,
      dollarPercentage: values.dolarPercentage ?? config.dollarPercentage,
      plusDollars: values.plusDollars ?? config.dollarPlus,
      plusPesos: values.plusPesos ?? config.pesosPlus,
    });

    setItem("salary", {
      value: data.netIncome,
      lastUpdate: new Date().toString(),
    });

    updateContext({
      salary: { value: data.netIncome, lastUpdate: new Date().toString() },
    });

    setSalaryData(data);
    setIsTooltipOpen(true);
    setTimeout(() => {
      setIsTooltipOpen(false);
    }, 3000);
  };

  const requiredRule: Rule = {
    required: true,
    message: "Campo requerido",
  };

  return (
    <Card title="Calcular sueldo">
      <Form
        form={form}
        layout="vertical"
        size="large"
        onFinish={handleSubmit}
        requiredMark={false}
      >
        <FormControllContainer>
          <SalaryInput rules={[requiredRule]} />
          {props.hours && (
            <HoursInput options={hourOptions} rules={[requiredRule]} />
          )}
          {props.percentage && (
            <DolarPercentageInput
              options={dollarOptions}
              rules={[requiredRule]}
            />
          )}
          {props.plusDollars && <PlusDolarsInput rules={[requiredRule]} />}
          {props.pesosPlus && <PlusPesosInput />}
          <section
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <ResetBtn onclick={() => form.resetFields()} />
            <SubmitBtn />
          </section>

          <section>
            <Tooltip
              title="El valor de Dolares y Neto con dolares podria variar dependiendo la tasa de conversion que se tome en la fecha del pago"
              color="#6b49de"
              placement="bottom"
              open={isTooltipOpen}
            >
              <Descriptions title="Cuenta final" bordered>
                <Descriptions.Item
                  label="Neto"
                  labelStyle={{ color: colorPrimary }}
                >
                  {humanReadableNumber(salaryData?.netIncome ?? 0) ?? "-"}
                </Descriptions.Item>
                {props.dolar && (
                  <>
                    <Descriptions.Item
                      label="Dolares"
                      labelStyle={{ color: colorPrimary }}
                    >
                      {humanReadableNumber(
                        salaryData?.netIncomeInDollars ?? 0
                      ) ?? "-"}
                    </Descriptions.Item>
                    <Descriptions.Item
                      label="Neto con dolares"
                      labelStyle={{ color: colorPrimary }}
                    >
                      {humanReadableNumber(
                        salaryData?.netIncomePlusDolarBlue ?? 0
                      ) ?? "-"}
                    </Descriptions.Item>
                  </>
                )}
                {props.pesosPlus && (
                  <Descriptions.Item
                    label="Plus en pesos"
                    labelStyle={{ color: colorPrimary }}
                  >
                    {humanReadableNumber(
                      config.pesosPlus ?? salaryData?.plusPesos ?? 0
                    ) ?? "-"}
                  </Descriptions.Item>
                )}
              </Descriptions>
            </Tooltip>
          </section>
        </FormControllContainer>
      </Form>
    </Card>
  );
};

export default SalaryForm;
