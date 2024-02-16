import { Card, Descriptions, Form, Tooltip } from "antd";
import { useTheme } from "hooks";
import useApp from "hooks/useApp";
import useLocalStorage from "hooks/useLocalStorage";
import { useState } from "react";
import { FinalSalary, calculateNetIncome, humanReadableNumber } from "utils";
import { FormControllContainer } from "./styles";
import { setLastSalary } from "context/AppContext/actions";
import { dollarOptions, hourOptions } from "./constants";
import SalaryInput from "./components/SalaryInput";
import HoursInput from "./components/HoursInput";
import DolarPercentageInput from "./components/DolarPercentageInput";
import PlusDolarsInput from "./components/PlusDolarsInput";
import SubmitBtn from "./components/SubmitBtn";
import ResetBtn from "./components/ResetBtn";
import PlusPesosInput from "./components/PlusPesosInput";

interface SalaryFormProps {
  hours?: boolean;
  percentage?: boolean;
  plusDollars?: boolean;
  dolar?: boolean;
  pesosPlus?: boolean;
}

const SalaryForm = (props: SalaryFormProps) => {
  const [salaryData, setSalaryData] = useState<FinalSalary | null>(null);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [form] = Form.useForm();
  const { dispatch } = useApp();
  const { set } = useLocalStorage();
  const {
    state: { dolarInfo, config },
  } = useApp();
  const { colorPrimary } = useTheme();

  const handleSubmit = (values: any) => {
    const data = calculateNetIncome(
      values.salary,
      values.percentage ?? config.hours,
      dolarInfo.blue.sell,
      values.dolarPercentage ?? config.percentage,
      values.plusDollars ?? config.plusAmount,
      values.plusPesos ?? config.plusAmount
    );

    set("lastSalary", {
      value: data.netIncome,
      lastUpdated: new Date().toString(),
    });

    dispatch(setLastSalary(data.netIncome));

    setSalaryData(data);
    setIsTooltipOpen(true);
    setTimeout(() => {
      setIsTooltipOpen(false);
    }, 3000);
  };

  return (
    <Card title="Calcular sueldo">
      <Form form={form} layout="vertical" size="large" onFinish={handleSubmit}>
        <FormControllContainer>
          <SalaryInput />
          {props.hours && <HoursInput options={hourOptions} />}
          {props.percentage && <DolarPercentageInput options={dollarOptions} />}
          {props.plusDollars && <PlusDolarsInput />}
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
                {salaryData?.plusPesos && (
                  <Descriptions.Item
                    label="Plus en pesos"
                    labelStyle={{ color: colorPrimary }}
                  >
                    {humanReadableNumber(salaryData?.plusPesos ?? 0) ?? "-"}
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
