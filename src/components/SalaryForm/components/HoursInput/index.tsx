import { Select } from "antd";
import { StyledFormItem } from "@components/SalaryForm/styles";

const HoursInput = ({
  options,
}: {
  options: {
    value: number;
    label: string;
  }[];
}) => {
  return (
    <StyledFormItem name="percentage" label="Horas" labelAlign="right">
      <Select options={options} size="large" />
    </StyledFormItem>
  );
};

export default HoursInput;
