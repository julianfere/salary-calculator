import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import {
  PERCENTAGE_FOR_EIGHT_HOURS,
  PERCENTAGE_FOR_SIX_HOURS,
  PERCENTAGE_FOR_FOUR_HOURS,
} from "utils";

export type ShiftDuration = 8 | 6 | 4;

type HoursSelectProps = {
  hours: ShiftDuration;
  handleHoursChange: (event: SelectChangeEvent<ShiftDuration>) => void;
};

const HoursSelect = ({ handleHoursChange, hours }: HoursSelectProps) => (
  <FormControl>
    <InputLabel id="hours-input">Hours</InputLabel>
    <Select
      labelId="hours-input"
      value={hours}
      onChange={handleHoursChange}
      label="Hours"
      sx={{ minWidth: 60 }}
    >
      <MenuItem value={PERCENTAGE_FOR_EIGHT_HOURS}>8</MenuItem>
      <MenuItem value={PERCENTAGE_FOR_SIX_HOURS}>6</MenuItem>
      <MenuItem value={PERCENTAGE_FOR_FOUR_HOURS}>4</MenuItem>
    </Select>
  </FormControl>
);

export default HoursSelect;
