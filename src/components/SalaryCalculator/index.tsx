import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { Card } from "components";
import { useAppState } from "hooks/useAppSate";
import { useState } from "react";

import {
  PERCENTAGE_FOR_EIGHT_HOURS,
  PERCENTAGE_FOR_SIX_HOURS,
  PERCENTAGE_FOR_FOUR_HOURS,
  calculateNetIncome,
  FinalSalary,
} from "utils";

import { InfoCard } from "./InfoCard";

type ShiftDuration = 8 | 6 | 4;

const SalaryCalculator = () => {
  const { dolarValueSell } = useAppState();
  const [hours, setHours] = useState<ShiftDuration>(8);
  const [dollar, setDolar] = useState<boolean>(false);
  const [percentage, setPercentage] = useState<number>(0.15);
  const [gro, setGro] = useState<number>(0);
  const [final, setFinal] = useState<FinalSalary>({} as FinalSalary);

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
    const dollarPercentage = dollar ? percentage : undefined;

    setFinal(calculateNetIncome(gro, hours, dolarValueSell, dollarPercentage));
  };

  return (
    <Card>
      <Stack direction="column" spacing={2}>
        <Stack direction="column" spacing={2}>
          <Stack direction="row" spacing={2}>
            <FormControl variant="filled">
              <InputLabel id="salary-input">Gross Income</InputLabel>
              <OutlinedInput
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                onChange={handleGrossIncomeChange}
              />
            </FormControl>
            <FormControl sx={{ minWidth: 80 }}>
              <InputLabel id="hours-input">Hours</InputLabel>
              <Select
                labelId="hours-input"
                value={hours}
                onChange={handleHoursChange}
                label="Hours"
              >
                <MenuItem value={PERCENTAGE_FOR_EIGHT_HOURS}>8</MenuItem>
                <MenuItem value={PERCENTAGE_FOR_SIX_HOURS}>6</MenuItem>
                <MenuItem value={PERCENTAGE_FOR_FOUR_HOURS}>4</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 35 } }}
                    color="success"
                    value={dollar}
                    onChange={() => setDolar((dolar) => !dolar)}
                  />
                }
                label="Part in dollars"
              />
            </FormControl>
            {dollar && (
              <Stack direction="row" spacing={2}>
                <FormControl sx={{ minWidth: 339 }}>
                  <InputLabel id="hours-input">Percentage</InputLabel>
                  <Select
                    labelId="hours-input"
                    value={percentage}
                    onChange={handlePercentageChange}
                    label="Percentage"
                  >
                    <MenuItem value={0.15}>15%</MenuItem>
                    <MenuItem value={0.2}>20%</MenuItem>
                    <MenuItem value={0.35}>35%</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            )}
            <FormControl>
              <Button variant="contained" onClick={handleCalculate}>
                Calculate
              </Button>
            </FormControl>
          </Stack>
        </Stack>
        {final.netIncome && <InfoCard {...final} />}
      </Stack>
    </Card>
  );
};

export default SalaryCalculator;
