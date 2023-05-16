import { DolarCard, SalaryCalculator, WorkDaysCard } from "components";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} p={5} justifyContent="center">
      <Grid item>
        <DolarCard />
      </Grid>
      <Grid item>
        <WorkDaysCard />
      </Grid>
      <Grid item xs={12}>
        <SalaryCalculator />
      </Grid>
    </Grid>
  );
};

export default Home;
