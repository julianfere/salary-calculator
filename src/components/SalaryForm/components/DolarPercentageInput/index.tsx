import { Select } from "antd";
import { StyledFormItem } from "components/SalaryForm/styles";

const DolarPercentageInput = ({
  options,
}: {
  options: { value: number; label: string }[];
}) => {
  return (
    <StyledFormItem
      name="dolarPercentage"
      label="Porcentaje"
      labelAlign="right"
    >
      <Select options={options} />
    </StyledFormItem>
  );
};

export default DolarPercentageInput;
