import { Box, Stack, Typography } from "@mui/material";
import { Card } from "components";
import { FinalSalary, humanReadableNumber } from "utils";

const InfoCard = ({
  netIncome,
  netIncomeInDollars,
  netIncomePlusDolarBlue,
}: FinalSalary) => {
  return (
    <Card>
      <Stack
        direction="column"
        spacing={2}
        border={"1px solid #ccc"}
        padding={2}
        borderRadius={2}
      >
        <Box border={"1px solid #ccc"} padding={2}>
          <Typography color="primary.dark" variant="h5">
            Net Income
          </Typography>
          <Typography alignSelf="center">
            {humanReadableNumber(netIncome)}
          </Typography>
        </Box>
        {netIncomeInDollars > 0 && (
          <Box border={"1px solid #ccc"} padding={2}>
            <Typography color="primary.dark" variant="h5">
              Net Income (Dolar)
            </Typography>
            <Typography alignSelf="center">
              {humanReadableNumber(netIncomeInDollars)}
            </Typography>
          </Box>
        )}
        {netIncomePlusDolarBlue > 0 && (
          <Box border={"1px solid #ccc"} padding={2}>
            <Typography color="primary.dark" variant="h5">
              Net Income (+Dolar)
            </Typography>
            <Typography alignSelf="center">
              {humanReadableNumber(netIncomePlusDolarBlue)}
            </Typography>
          </Box>
        )}
      </Stack>
    </Card>
  );
};

export { InfoCard };
