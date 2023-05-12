import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";

export type PlusDolarInputProps = {
  setPlusDollars: (value: number) => void;
};

const PlusDolarInput = ({ setPlusDollars }: PlusDolarInputProps) => (
  <FormControl variant="outlined">
    <InputLabel id="plus-dollars-input">Plus Dollars</InputLabel>
    <OutlinedInput
      id="plus-dollars-input"
      label="Plus Dollars"
      type="tel"
      sx={{ maxWidth: 90 }}
      startAdornment={
        <InputAdornment position="end">
          <Typography paddingRight={0.5}>$</Typography>
        </InputAdornment>
      }
      onChange={(e) => setPlusDollars(parseInt(e.target.value))}
    />
  </FormControl>
);

export default PlusDolarInput;
