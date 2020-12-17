import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { theme as color } from '../Theme/Theme'
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import "../CSS/Pages/Display.css"
import "../CSS/Components/MyList.css"
import getSubCollection from '../Database/getSubCollection';

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
                <Box p={3} style={{padding:"10px 0px"}} >
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
    const [s] = React.useState([])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        var i = 0;

        for (i; i < parseInt(props.seasons); i++) {
            tabs.push(
                <StyledTab label={"Season " + (i + 1)} />
            )
            getSubCollection("Content", props.id, "Season-"+(i+1)).then(r=>{
                s.push(r)
            })
        }

        setTabs(tabs)
    },[tabs]);

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
                        if(index < 9 ){
                            return (
                                <TabPanel value={value} index={index}>
                                    <div className="ss-container" >
                                        {
                                            s[index] &&
                                            s[index].map((i, episode) => {
                                                if(episode < 9){
                                                    return (
                                                        <a href={"/play/" + props.id + "/Season-" + (index + 1) + "/episode-0" + (episode + 1 )} >
                                                            <div style={{
                                                                background:"url("+i.image+")",
                                                                backgroundSize:"cover", 
                                                                backgroundPosition:"center", 
                                                                height:"30vw", 
                                                                width:"45vw",
                                                                marginRight:"10px",
                                                                borderRadius:"2px",
                                                                boxShadow:"0px 10px 10px  rgba(0, 0, 0, 0.5)",
                                                                display:"flex",
                                                                flexDirection:"column",
                                                                justifyContent:"flex-end"
                                                                }} >
                                                                <div style={{ bottom:"0", width:'20%', padding:"1px 0px", backgroundColor:"white"}} >
        
                                                                </div>
                                                            </div>
                                                            <div style={{fontSize:"12px", textOverflow:"ellipsis", width:"40vw", whiteSpace:"nowrap", overflow:"hidden", marginTop:"10px"}} >
                                                               {i.name} 
                                                            </div>
                                                            <div style={{fontSize:"10px",color:"grey",textTransform:"uppercase"}} >
                                                               Season-{(index+1)} Episode-{(episode+1)} 
                                                            </div>
                                                            <div style={{fontSize:"10px",color:"grey",textTransform:"uppercase"}} >
                                                               {i.date}
                                                            </div>
                                                        </a>
                                                    )
                                                }else{
                                                    return (
                                                        <a href={"/play/" + props.id + "/Season-" + (index + 1) + "/episode-" + (episode + 1 )} >
                                                            <div style={{
                                                                background:"url("+i.image+")",
                                                                backgroundSize:"cover", 
                                                                backgroundPosition:"center", 
                                                                height:"30vw", 
                                                                width:"45vw",
                                                                marginRight:"10px",
                                                                borderRadius:"2px",
                                                                boxShadow:"0px 10px 10px  rgba(0, 0, 0, 0.5)",
                                                                display:"flex",
                                                                flexDirection:"column",
                                                                justifyContent:"flex-end"
                                                                }} >
                                                            </div>
                                                            <div style={{fontSize:"12px", textOverflow:"ellipsis", width:"40vw", whiteSpace:"nowrap", overflow:"hidden", marginTop:"10px"}} >
                                                               {i.name} 
                                                            </div>
                                                            <div style={{fontSize:"10px",color:"grey",textTransform:"uppercase"}} >
                                                               Season-{(index+1)} Episode-{(episode+1)} 
                                                            </div>
                                                            <div style={{fontSize:"10px",color:"grey",textTransform:"uppercase"}} >
                                                               {i.date}
                                                            </div>
                                                        </a>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </TabPanel>
                            )
                        }else{

                        }
                    })
                }
                <Typography className={classes.padding} />
            </div>
        </div>
    );
}

