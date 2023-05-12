import { Button, FormControl, Grid, SelectChangeEvent } from "@mui/material";
import { Card } from "components";
import { useAppState } from "hooks/useAppSate";
import { useState } from "react";

import { calculateNetIncome, FinalSalary } from "utils";

import { InfoCard } from "./InfoCard";
import GrossIncomeInput from "./GrossIncome";
import HoursSelect, { ShiftDuration } from "./HoursSelect";
import DolarInput from "./DolarInput";
import DollarForm from "./DolarForm";

const SalaryCalculator = () => {
  const { dolarValueSell } = useAppState();
  const [hours, setHours] = useState<ShiftDuration>(8);
  const [dollar, setDolar] = useState<boolean>(false);
  const [percentage, setPercentage] = useState<number>(0.15);
  const [gro, setGro] = useState<number>(0);
  const [final, setFinal] = useState<FinalSalary>({} as FinalSalary);
  const [plusDollars, setPlusDollars] = useState<number>(0);

  const handleHoursChange = (event: SelectChangeEvent<ShiftDuration>) => {
    setHours(event.target.value as ShiftDuration);
  };

  const handlePercentageChange = (event: SelectChangeEvent<number>) => {
    setPercentage(event.target.value as number);
  };

  const handleGrossIncomeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGro(parseInt(event.target.value));
  };

  const handleCalculate = () => {
    const dollarPercentage = dollar ? percentage : 1;

    setFinal(
      calculateNetIncome(
        gro,
        hours,
        dolarValueSell,
        dollarPercentage,
        plusDollars
      )
    );
  };

  return (
    <Card>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <GrossIncomeInput handleGrossIncomeChange={handleGrossIncomeChange} />
        </Grid>
        <Grid item>
          <HoursSelect handleHoursChange={handleHoursChange} hours={hours} />
        </Grid>
        <Grid item>
          <DolarInput dollar={dollar} setDolar={setDolar} />
        </Grid>
        {dollar && (
          <Grid item>
            <DollarForm
              percentage={percentage}
              handlePercentageChange={handlePercentageChange}
              setPlusDollars={setPlusDollars}
            />
          </Grid>
        )}
        <Grid item>
          <FormControl>
            <Button variant="contained" onClick={handleCalculate}>
              Calculate
            </Button>
          </FormControl>
        </Grid>
        <Grid item>
          {final.netIncome !== undefined && <InfoCard {...final} />}
        </Grid>
      </Grid>
    </Card>
  );
};

export default SalaryCalculator;
