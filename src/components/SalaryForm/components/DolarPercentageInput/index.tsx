import { Select } from "antd";
import { StyledFormItem } from "@components/SalaryForm/styles";
import { Rule } from "antd/es/form";

const DolarPercentageInput = ({
  options,
  rules,
}: {
  options: { value: number; label: string }[];
  rules?: Rule[];
}) => {
  return (
    <StyledFormItem
      name="dolarPercentage"
      label="Porcentaje"
      labelAlign="right"
      rules={rules}
    >
      <Select options={options} />
    </StyledFormItem>
  );
};

export default DolarPercentageInput;
