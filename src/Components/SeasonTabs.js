import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { theme as color } from '../Theme/Theme'
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import getSeasons from '../Database/getSeason';
import "../CSS/Pages/Display.css"
import "../CSS/Components/MyList.css"
import {Link } from "react-tiger-transition";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#fff',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: '#fff',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
        },
    },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    padding: {
        padding: theme.spacing(3),
    },
    demo2: {
        backgroundColor: color.palette.primary.dark,
    },
}));


export default function SeasonTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [tabs, setTabs] = React.useState([])
    const [s, setS] = React.useState([])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        var i = 0;
        var tabs = []

        for (i; i < parseInt(props.seasons); i++) {
            tabs.push(
                <StyledTab label={"Season " + (i + 1)} />
            )
            getSeasons(props.id, props.seasons).then(result => {
                s.push(result)
            })
        }

        setTabs(tabs)
    }, [props]);

    return (
        <div className={classes.root}>
            <div className={classes.demo2}>
                <StyledTabs value={value} variant="scrollable" scrollButtons="auto" onChange={handleChange} aria-label="styled tabs example">
                    {
                        tabs.map(item => {
                            return (
                                item
                            )
                        })
                    }
                </StyledTabs>
                {
                    tabs.map((item, index) => {
                        return (
                            <TabPanel value={value} index={index}>
                                <div className="ss-container" >
                                    {
                                        s[index] &&
                                        s[index].map(i => {
                                            return (
                                                <Link to={"/play/"} >
                                                    <img src={i.image} className="ss" alt="i" />
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </TabPanel>
                        )
                    })
                }
                <Typography className={classes.padding} />
            </div>
        </div>
    );
}

