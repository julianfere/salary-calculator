import { Select } from "antd";
import { StyledFormItem } from "@components/SalaryForm/styles";
import { Rule } from "antd/es/form";

const HoursInput = ({
  options,
  rules,
}: {
  options: {
    value: number;
    label: string;
  }[];
  rules?: Rule[];
}) => {
  return (
    <StyledFormItem
      name="percentage"
      label="Horas"
      labelAlign="right"
      rules={rules}
    >
      <Select options={options} size="large" />
    </StyledFormItem>
  );
};

export default HoursInput;
