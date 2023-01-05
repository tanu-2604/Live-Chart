import { Grid, makeStyles, Paper } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import FusionChart from "./chart/fusion/FusionChart";
import GoogleCharts from "./chart/google/GoogleCharts";
import Charts from "./chart/reactChart/Charts";
import { CustomChart } from "./components/CustomChart";
import Navbar from "./layout/Navbar";
import OpenSidebar from "./layout/OpenSidebar";
import SharedLayout from "./layout/SharedLAyout";

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
function App() {
  const classes = useStyles();
  return (
    <>
        <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<GoogleCharts />} />
          <Route path='google' element={<GoogleCharts />} />
          <Route path='React' element={<Charts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  {/* <Grid md={6}>
    <Paper>
        <CustomChart/>
    </Paper>npm start
  </Grid>
       */}
    </>
  );
}

export default App;
