import { IStore } from "@entities/Storage";
import useDashboard from "@hooks/useDashboard";
import { ICalculatorConfig } from "@hooks/useDashboard/context/types";
import { useLocalStorage } from "@julianfere/react-utility-hooks";
import { Button, Card, Form, Input, Select, Switch, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";
import { dollarOptions, hourOptions } from "src/constants";

const Config = () => {
  const { config, updateContext } = useDashboard();
  const [form] = Form.useForm<ICalculatorConfig>();
  const [dolarSwitch, setDolarSwitch] = useState(!!config.dollarPercentage);
  const [plusSwitch, setPlusSwitch] = useState(!!config.dollarPlus);
  const [pesosPlusSwitch, setPesosPlusSwitch] = useState(
    !!config.pesosPlus
  );
  const { setItem } = useLocalStorage<IStore>();
  const [messageApi, contextHolder] = message.useMessage();

  const handleSumit = (values: ICalculatorConfig) => {
    updateContext({
      config: {
        ...config,
        ...values,
      },
    });
    setItem('config', values);
    messageApi.success("Configuración guardada");
  };

  const handleSwitch = (value: boolean) => {
    if (!value) {
      form.resetFields(["percentage", "plus"]);
    }

    form.setFieldValue("dolar", value);
    setDolarSwitch(value);
  };

  const handlePesosPlusSwitch = (value: boolean) => {
    if (!value) {
      form.resetFields(["pesosPlus"]);
    }

    setPesosPlusSwitch(value);
  };

  const handlePlusSwitch = (value: boolean) => {
    if (!value) {
      form.resetFields(["plusValue"]);
    }

    form.setFieldValue("plus", value);
    setPlusSwitch(value);
  };

  const handleReset = () => {
    form.resetFields();
    updateContext({
      config: {} as ICalculatorConfig,
    });
    setItem('config', {});
    messageApi.info("Valores reiniciados");
  };

  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSumit}
        initialValues={{
          hours: config.hours,
          pesosPlus: config.pesosPlus,
          dollarPercentage: dollarOptions.find( x => x.value === config.dollarPercentage),
          dollarPlus: config.dollarPlus,
        }}
      >
        <Card title="Configuración">
          <FormItem label="Cuantas horas trabajas?" name="hours">
            <Select options={hourOptions} />
          </FormItem>
          <section
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <FormItem label="Cobras en dólares?" name="dolar">
              <Switch
                onChange={handleSwitch}
                defaultChecked={!!config.dollarPercentage}
              />{" "}
              {dolarSwitch ? "Sí" : "No"}
            </FormItem>
          </section>
          <FormItem label="Que porcentage?" name="dollarPercentage">
            <Select options={dollarOptions} disabled={!dolarSwitch} />
          </FormItem>
          <section
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <FormItem label="Cobras un plus en dólares?" name="plus">
              <Switch
                onChange={handlePlusSwitch}
                defaultChecked={plusSwitch}
                disabled={!dolarSwitch}
              />{" "}
              {plusSwitch ? "Sí" : "No"}
            </FormItem>
          </section>
          <FormItem label="Agregar plus en dolares" name="dollarPlus">
            <Input type="phone" disabled={!plusSwitch} />
          </FormItem>
          <FormItem label="Cobras un plus en pesos?" name="pesosPlusSwitch">
            <Switch
              onChange={handlePesosPlusSwitch}
              defaultChecked={pesosPlusSwitch}
            />{" "}
            {pesosPlusSwitch ? "Sí" : "No"}
          </FormItem>
          <FormItem label="Agregar plus en pesos" name="pesosPlus">
            <Input type="phone" disabled={!pesosPlusSwitch} />
          </FormItem>
          <section
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button type="dashed" onClick={handleReset}>
              Reiniciar valores
            </Button>
            <Button type="primary" htmlType="submit">
              Guardar
            </Button>
          </section>
          <section
            style={{
              marginTop: "1rem",
            }}
          >
            <p>La configuracion es guardada en el navegador</p>
          </section>
        </Card>
      </Form>
    </div>
  );
};

export default Config;
