import { Grid, makeStyles, Paper } from "@material-ui/core";
import { StackedBarChart } from "./StackedBarChart";
import { LineChart } from "./LineChart";
import { BarChart } from "./BarChart";
import { PieChart } from "./PieChart";
import { MixedChart } from "./MixedChart";
import { DonutChart } from "./DonutChart";
import { CustomChart } from "../../components/CustomChart";
import { data, options,styleData } from "../../data/groupBar";
import { barOptions,barData ,barStyle} from "../../data/barData";
import { mixedData, mixedOptions, mixedStyle } from "../../data/mixedData";
import { pieData, pieOptions } from "../../data/pieData";
import { stackedData, stackedOptions } from "../../data/stackedData";
import { mixedStackedData, mixedStackedOptions, mixedStackedStyle } from "../../data/StackedLineData";




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
  console.log(barData)
  const datas = Object.keys(barData)
  const values = Object.values(barData)
  const data={
    "labels": datas.map((item)=> item),
    "datasets": [
        {
            "label": "Dataset 1",
            "data":values.map((item)=>item.Success),
            "borderColor": "rgb(255, 99, 132)",
            "backgroundColor": "rgba(237, 220, 51, 1)"
        },
        {
            "label": "Dataset 2",
            "data":values.map((item)=>item.Failure),
            "borderColor": "rgb(53, 162, 235)",
            "backgroundColor": "rgba(237, 220, 51, 1)"
        },
        {
            "label": "Dataset 2",
            "data":values.map((item)=>item.SuccessPercetage),
            "borderColor": "rgb(53, 162, 235)",
            "backgroundColor": "rgba(237, 220, 51, 1)"
        }
    ]
}
 
  console.log(data,values)
  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={6} >
            <Paper className={classes.paper}>
           <CustomChart data={data} options={options} styleData={styleData} chartType="Charts"/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper className={classes.paper}>
             <CustomChart data={data} options={barOptions} styleData={barStyle} chartType="Charts" />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper className={classes.paper}>
              <CustomChart data={stackedData} options={stackedOptions} styleData={barStyle} chartType="Stacked" />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper className={classes.paper}>
             <CustomChart data={mixedData} options={mixedOptions} styleData={mixedStyle} chartType="Charts" />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper className={classes.paper}>
             <CustomChart data={pieData} options={pieOptions} chartType="PieChart" />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper className={classes.paper}>
              <CustomChart data={mixedStackedData} options={mixedStackedOptions} styleData={mixedStackedStyle} chartType="Stacked" />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Charts;
