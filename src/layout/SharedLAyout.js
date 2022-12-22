import { Grid, makeStyles } from '@material-ui/core';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import OpenSidebar from './OpenSidebar';
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
const SharedLayout = () => {
    const classes = useStyles();
  return (
    <>
  
      <div className={classes.root}>
        <Grid container  >
          <Grid item xs={2}>
            <OpenSidebar />
          </Grid>
          <Grid style={{ padding:'10px' }} item xs={10}>
             <Outlet />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default SharedLayout;