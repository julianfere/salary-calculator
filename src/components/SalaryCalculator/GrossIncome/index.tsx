import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";

type GrossIncomeInputProps = {
  handleGrossIncomeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const GrossIncomeInput = ({
  handleGrossIncomeChange,
}: GrossIncomeInputProps) => (
  <FormControl variant="outlined">
    <InputLabel id="salary-input">Gross Income</InputLabel>
    <OutlinedInput
      id="salary-input"
      label="Gross Income"
      type="tel"
      startAdornment={
        <InputAdornment position="end">
          <Typography paddingRight={0.5}>$</Typography>
        </InputAdornment>
      }
      onChange={handleGrossIncomeChange}
    />
  </FormControl>
);

export default GrossIncomeInput;
