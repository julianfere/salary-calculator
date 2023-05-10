import { Box, Stack, Typography } from "@mui/material";
import { Card } from "components";
import { FinalSalary, humanReadableNumber } from "utils";

const InfoCard = ({
  netIncome,
  netIncomeInDollars,
  netIncomePlusDolarBlue,
  plusDollars,
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
              In dollars
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography alignSelf="center">
                {humanReadableNumber(netIncomeInDollars)}
                {plusDollars > 0 && (
                  <>
                    <Typography
                      color="#81c784"
                      variant="overline"
                      marginLeft={1}
                    >
                      + {humanReadableNumber(plusDollars)}
                    </Typography>
                    <Typography color="#81c784" variant="overline">
                      = {humanReadableNumber(netIncomeInDollars + plusDollars)}
                    </Typography>
                  </>
                )}
              </Typography>
            </Stack>
          </Box>
        )}
        {netIncomePlusDolarBlue > 0 && (
          <Box border={"1px solid #ccc"} padding={2}>
            <Typography color="primary.dark" variant="h5">
              Net Income{" "}
              <Typography variant="overline">
                (plus dollars blue in pesos)
              </Typography>
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
