import { DolarCard, WorkDaysCard } from "components";
import "./styles.css";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={2} sm={4} md={4}>
        <DolarCard />
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <WorkDaysCard />
      </Grid>
    </Grid>
  );
};

export default Home;
