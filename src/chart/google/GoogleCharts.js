import { Grid, makeStyles, Paper } from "@material-ui/core";
import { BarChart } from "./BarChart";
import { ComboChart } from "./ComboChart";
import { GeoChart } from "./GeoChart";
import { LineChart } from "./LineChart";
import { PieChart } from "./PieChart";

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
function GoogleCharts() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}  md={6} lg={6}>
            <Paper className={classes.paper}>
              <h4>Bar Chart</h4>
              <BarChart />
            </Paper>
          </Grid>
          <Grid item xs={12}  md={6} lg={6}>
            <Paper className={classes.paper}>
              <h4>Line And Bar Chart</h4>
              <ComboChart />
            </Paper>
          </Grid>
          <Grid item xs={12}  md={6} lg={6}>
            <Paper className={classes.paper}>
              <h4>Pie Chart</h4>
              <PieChart />
            </Paper>
          </Grid>
          <Grid item xs={12}  md={6} lg={6}>
            <Paper className={classes.paper}>
               <h4>Line Chart</h4>
              <LineChart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper className={classes.paper}>
              <h4>Geo Chart</h4>
              <GeoChart />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default GoogleCharts;
