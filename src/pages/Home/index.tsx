import { DolarCard, SalaryCalculator, WorkDaysCard } from "components";
import "./styles.css";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 8, sm: 8, md: 8 }}
      p={5}
    >
      <Grid item>
        <DolarCard />
      </Grid>
      <Grid item>
        <WorkDaysCard />
      </Grid>
      <Grid item>
        <SalaryCalculator />
      </Grid>
    </Grid>
  );
};

export default Home;
