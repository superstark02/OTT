import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { theme } from '../Theme/Theme';
import Home from '../Pages/Home';
import Categories from '../Pages/Categories';
import Apps from '../Pages/Apps';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
      style={{ position: "fixed", top: "0", width: "100%", zIndex: "0", overflowY: "scroll", height: "100vh", paddingTop:"40px" }}
    >
      {value === index && (
        <div>
          <Typography>{children}</Typography>
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const AntTabs = withStyles({
  root: {
    flexGrow: 1,
    width: '100%',
    position: "fixed",
    bottom: "0",
    boxShadow: "0px -5px 5px rgba(0,0,0,0.3)",
    zIndex: "1000000",
    backgroundColor: theme.palette.primary.dark,
    height:"65px"
  },
  indicator: {
    backgroundColor: '#FFFF',
    position: "absolute",
    top:0,
    '& > span': {
      maxWidth: 0,
      width: '100%',
      backgroundColor: '#FFFF',
    },
  },
})(Tabs);

const AntTab = withStyles({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontFamily: "inherit",
    fontSize: "10px",
    padding: "0px",
    zIndex: "10000"
  },
  indicator: {
    '& > span': {
      maxWidth: 0,
      width: '100%',
      backgroundColor: 'white',
    },
  },
})((props) => <Tab {...props} TabIndicatorProps={{ children: <span /> }} />);


function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  icon: {
    margin: '0px',
  },
  tab:{
    position: "absolute",
    top: "0",
    width: '100%'
  }
}));

export default function BottomNavBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div  style={{ zIndex: "100000" }} >
      <AntTabs value={value} variant="fullWidth" onChange={handleChange} aria-label="ant example">
        <AntTab icon={<HomeRoundedIcon/>} className={classes.icon} label="Home" />
        <AntTab icon={<DashboardRoundedIcon/>} label="Apps" className={classes.icon} />
        <AntTab icon={<CategoryRoundedIcon />} label="Categories" className={classes.icon} />
        <AntTab icon={<AccountCircleRoundedIcon />} label="Account" className={classes.icon} />
      </AntTabs>
      <TabPanel value={value} className={classes.tab} index={0}>
          <Home/>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <Apps />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Categories />
      </TabPanel>
      <TabPanel value={value} index={3}>

      </TabPanel>
    </div>
  );
}
