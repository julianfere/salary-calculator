import { DolarCard, WorkDaysCard } from "components";
import "./styles.css";
import { Grid, Stack } from "@mui/material";

const Home = () => {
  return (
    <Grid container spacing={2} padding={4}>
      <Grid item xs={2} md={4}>
        <Stack spacing={1}>
          <DolarCard />
          <WorkDaysCard />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Home;
