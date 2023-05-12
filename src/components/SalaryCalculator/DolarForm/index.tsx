import { Grid } from "@mui/material";
import PercentageInput, { PercentageInputProps } from "./PercentageInput";
import PlusDolarInput, { PlusDolarInputProps } from "./PlusDolarInput";

type DollarFormProps = PercentageInputProps & PlusDolarInputProps;

const DollarForm = ({
  percentage,
  handlePercentageChange,
  setPlusDollars,
}: DollarFormProps) => (
  <Grid container>
    <Grid item>
      <PercentageInput
        percentage={percentage}
        handlePercentageChange={handlePercentageChange}
      />
    </Grid>
    <Grid item>
      <PlusDolarInput setPlusDollars={setPlusDollars} />
    </Grid>
  </Grid>
);

export default DollarForm;
