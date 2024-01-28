import { Button, Form, Input, Select, Switch, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import Card from "components/Card";
import { dollarOptions, hourOptions } from "components/SalaryForm/constants";
import { setConfig } from "context/AppContext/actions";
import { AppConfig } from "context/AppContext/types";
import { useLocalStorage } from "hooks";
import useApp from "hooks/useApp";
import { useState } from "react";

const Config = () => {
  const { state, dispatch } = useApp();
  const [form] = Form.useForm<AppConfig>();
  const [dolarSwitch, setDolarSwitch] = useState(state.config.dolar);
  const [plusSwitch, setPlusSwitch] = useState(state.config.plus);
  const { saveConfig } = useLocalStorage();
  const [messageApi, contextHolder] = message.useMessage();

  const handleSumit = (values: AppConfig) => {
    console.log(values);
    dispatch(setConfig(values));
    saveConfig(values);
    messageApi.success("Configuración guardada");
  };

  const handleSwitch = (value: boolean) => {
    if (!value) {
      form.resetFields(["percentage", "plus"]);
    }

    form.setFieldValue("dolar", value);
    setDolarSwitch(value);
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
    dispatch(setConfig({} as AppConfig));
    saveConfig({} as AppConfig);
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
          hours: state.config.hours,
          dolar: state.config.dolar,
          percentage: state.config.percentage,
          plus: state.config.plus,
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
                defaultChecked={state.config.dolar}
              />{" "}
              {dolarSwitch ? "Sí" : "No"}
            </FormItem>
          </section>
          <FormItem label="Que porcentage?" name="percentage">
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
                defaultChecked={state.config.dolar}
                disabled={!dolarSwitch}
              />{" "}
              {plusSwitch ? "Sí" : "No"}
            </FormItem>
          </section>
          <FormItem label="Agregar plus en dolares" name="plusAmount">
            <Input disabled={!plusSwitch} />
          </FormItem>
          <section
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button type="primary" htmlType="submit">
              Guardar
            </Button>
            <Button type="dashed" onClick={handleReset}>
              Reiniciar valores
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
