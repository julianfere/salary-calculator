import { Dispatch, SetStateAction } from "react";
import { Checkbox, FormControl, FormControlLabel } from "@mui/material";

type DolarInputProps = {
  dollar: boolean;
  setDolar: Dispatch<SetStateAction<boolean>>;
};

const DolarInput = ({ dollar, setDolar }: DolarInputProps) => (
  <FormControl>
    <FormControlLabel
      control={
        <Checkbox
          color="success"
          value={dollar}
          onChange={() => setDolar((dolar) => !dolar)}
        />
      }
      label="Part in dollars"
    />
  </FormControl>
);

export default DolarInput;
