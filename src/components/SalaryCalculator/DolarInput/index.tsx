import { Checkbox, FormControl, FormControlLabel } from "@mui/material";

type DolarInputProps = {
  dollar: boolean;
  setDolar: () => void;
};

const DolarInput = ({ dollar, setDolar }: DolarInputProps) => (
  <FormControl>
    <FormControlLabel
      control={<Checkbox color="success" value={dollar} onChange={setDolar} />}
      label="Part in dollars"
    />
  </FormControl>
);

export default DolarInput;
