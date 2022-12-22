import { Grid, makeStyles, Paper } from "@material-ui/core";
import { StackedBarChart } from "./StackedBarChart";
import { LineChart } from "./LineChart";
import { BarChart } from "./BarChart";
import { PieChart } from "./PieChart";
import { MixedChart } from "./MixedChart";
import { DonutChart } from "./DonutChart";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: "10px",
    padding: "16px",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function Charts() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={6} >
            <Paper className={classes.paper}>
              <LineChart />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper className={classes.paper}>
             <BarChart/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper className={classes.paper}>
              <StackedBarChart/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper className={classes.paper}>
             <MixedChart/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper className={classes.paper}>
             <PieChart/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper className={classes.paper}>
             <DonutChart/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Charts;
