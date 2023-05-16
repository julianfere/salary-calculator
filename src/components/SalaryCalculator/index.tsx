import { Button, FormControl, Grid, SelectChangeEvent } from "@mui/material";
import { Card } from "components";
import { useAppState } from "hooks/useAppSate";
import { useState } from "react";

import { FinalSalary, calculateNetIncome } from "utils";

import { InfoCard } from "./InfoCard";
import GrossIncomeInput from "./GrossIncome";
import HoursSelect, { ShiftDuration } from "./HoursSelect";
import DolarInput from "./DolarInput";
import DollarForm from "./DolarForm";

type SalaryState = {
  hours: ShiftDuration;
  percentage: number;
  dollar: boolean;
  gro: number;
  plusDollars: number;
  final: FinalSalary;
};

const initialState: SalaryState = {
  hours: 8,
  percentage: 1,
  dollar: false,
  gro: 0,
  plusDollars: 0,
  final: {
    netIncome: 0,
    netIncomeInDollars: 0,
    netIncomePlusDolarBlue: 0,
    plusDollars: 0,
  },
};

const SalaryCalculator = () => {
  const { dolarValueSell } = useAppState();
  const [data, setData] = useState<SalaryState>(initialState);
  const { hours, dollar, percentage, final } = data;

  const handleHoursChange = (event: SelectChangeEvent<ShiftDuration>) => {
    setData((data) => ({
      ...data,
      hours: event.target.value as ShiftDuration,
    }));
  };

  const handlePercentageChange = (event: SelectChangeEvent<number>) => {
    setData((data) => ({ ...data, percentage: event.target.value as number }));
  };

  const handleGrossIncomeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setData((data) => ({ ...data, gro: parseInt(event.target.value) }));
  };

  const handleCalculate = () => {
    const { hours, gro, dollar, percentage, plusDollars } = data;
    const dollarPercentage = dollar ? percentage : 1;

    const final = calculateNetIncome(
      gro,
      hours,
      dolarValueSell,
      dollarPercentage,
      plusDollars
    );

    setData((data) => ({ ...data, final }));
  };

  const setDolar = () => {
    setData((data) => ({ ...data, dollar: !data.dollar }));
  };

  const setPlusDollars = (plusDollars: number) => {
    setData((data) => ({ ...data, plusDollars }));
  };

  return (
    <Card>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
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
        {final.netIncome > 0 && (
          <Grid item>
            <InfoCard {...final} />
          </Grid>
        )}
      </Grid>
    </Card>
  );
};

export default SalaryCalculator;
