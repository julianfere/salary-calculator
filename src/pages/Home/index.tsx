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
      <Grid item xs={2} sm={4} md={4}>
        <DolarCard />
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <WorkDaysCard />
      </Grid>
      <Grid item xs={8} sm={8} md={8}>
        <SalaryCalculator />
      </Grid>
    </Grid>
  );
};

export default Home;
