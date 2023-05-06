import { DolarCard, WorkDaysCard } from 'components'
import './styles.css'
import { Grid } from '@mui/material'

const Home = () => {
  return (
    <Grid container spacing={2} padding={4} >
      <Grid item xs={2} md={4}>
        <DolarCard />
      </Grid>
      <Grid item xs={2} md={4}>
        <WorkDaysCard />
      </Grid>
      <Grid item xs={2} md={4}>
        <WorkDaysCard />
      </Grid>
      <Grid item xs={2} md={20}>
        <WorkDaysCard />
      </Grid>
    </Grid>
  )
}

export default Home