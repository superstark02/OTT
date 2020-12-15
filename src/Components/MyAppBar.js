import React from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import { theme as color } from '../Theme/Theme';
import { CommentRounded, FolderSpecialRounded, Help, InfoRounded, PowerOff, } from '@material-ui/icons';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import { FaBolt, FaTheaterMasks, FaUser } from 'react-icons/fa';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(0),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function MyAppBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [signin, setSignin] = React.useState({})
    const [logOut, setLogOut] = React.useState({})

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        if (!props.uid) {
            setSignin({ name: "Sign In", icon: <FaUser />, to: "/sign-in" })
            setLogOut({})
        } else {
            setLogOut({ name: "Logout", icon: <PowerOff /> })
            setSignin({})
        }
    }, [props])

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                elevation={0}
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                style={{ backgroundColor: color.palette.primary.dark, color: color.palette.primary.light, padding: "0px 10px" }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap className="wrap" style={{ fontFamily: "mosaic" }} >
                        MOSAIC
                    </Typography>

                    <Link to="/search" style={{ color: "inherit" }} >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <SearchIcon />
                        </IconButton>
                    </Link>

                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {
                        props.uid ? (
                            <ListItem button key={"signin1"}>
                                <ListItemText primary={props.email} />
                            </ListItem>
                        ) : (
                                <div></div>
                            )
                    }
                    {
                        !props.uid ? (
                            <div onClick={()=>{
                                //window.Android.signin();
                            }} >
                                <ListItem button key={"signin"}>
                                    <ListItemIcon><FaUser /></ListItemIcon>
                                    <ListItemText primary="Sign In" />
                                </ListItem>
                            </div>
                        ) : (
                                <div></div>
                            )
                    }
                    {[
                        { name: 'Premium', icon: <StarRoundedIcon /> }, { name: "Trending", icon: <FaBolt /> }, { name: 'Channels', icon: <FolderSpecialRounded /> },
                        { name: 'Genres', icon: <FaTheaterMasks size="20px" /> }, logOut].map((text, index) => (
                            <Link to={text.to} >
                                <ListItem button key={text}>
                                    <ListItemIcon>{text.icon}</ListItemIcon>
                                    <ListItemText primary={text.name} />
                                </ListItem>
                            </Link>
                        ))}
                </List>
                <Divider />
                <List>
                    {[{ name: 'About', icon: <InfoRounded />, to: "/about" }, { name: "Help", icon: <Help />, to: "/help" },
                    { name: "Feedback", icon: <CommentRounded />, to: "/feedback" }].map((text, index) => (
                        <Link to={text.to}  >
                            <ListItem button key={text}>
                                <ListItemIcon>{text.icon}</ListItemIcon>
                                <ListItemText primary={text.name} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
            <Toolbar />
        </React.Fragment>
    );
}
