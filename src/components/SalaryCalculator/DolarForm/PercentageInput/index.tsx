import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export type PercentageInputProps = {
  percentage: number;
  handlePercentageChange: (event: SelectChangeEvent<number>) => void;
};

const PercentageInput = ({
  percentage,
  handlePercentageChange,
}: PercentageInputProps) => (
  <FormControl>
    <InputLabel id="hours-input">Percentage</InputLabel>
    <Select
      labelId="hours-input"
      value={percentage}
      onChange={handlePercentageChange}
      label="Percentage"
      sx={{ maxWidth: 100, minWidth: 100 }}
    >
      <MenuItem value={0.15}>15%</MenuItem>
      <MenuItem value={0.2}>20%</MenuItem>
      <MenuItem value={0.35}>35%</MenuItem>
    </Select>
  </FormControl>
);

export default PercentageInput;
