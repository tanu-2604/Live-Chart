import { Grid, makeStyles, Paper } from "@material-ui/core";
import LineChart from "./LineChart";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function FusionChart() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={1} >
      <Grid item xs={6}>
        <Paper className={classes.paper}>
        <LineChart/>
        </Paper>
      </Grid>
      
        </Grid>
        
      </div>
    </>
  );
}

export default FusionChart;
