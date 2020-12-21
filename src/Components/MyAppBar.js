import React from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import { theme as color } from '../Theme/Theme';
import { CommentRounded, FolderSpecialRounded, Help, InfoRounded } from '@material-ui/icons';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import { FaBolt, FaPowerOff, FaTheaterMasks, FaUser } from 'react-icons/fa';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function MyAppBar(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {
                    props.uid ? (
                        <ListItem button key={"signin1"}>
                            <ListItemIcon><FaUser /></ListItemIcon>
                            <ListItemText primary={props.name} secondary={props.email} />
                        </ListItem>
                    ) : (
                            <div></div>
                        )
                }
                {
                    !props.uid ? (
                        <div onClick={() => {
                            window.Android.signin();
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
                    { name: 'Genres', icon: <FaTheaterMasks size="20px" /> }].map((text, index) => (
                        <Link to={text.to} >
                            <ListItem button key={text}>
                                <ListItemIcon>{text.icon}</ListItemIcon>
                                <ListItemText primary={text.name} />
                            </ListItem>
                        </Link>
                    ))}
                {
                    props.uid ? (
                        <div onClick={() => {
                            window.Android.LogOut();
                        }} >
                            <ListItem button key={"signin"} >
                                <ListItemIcon><FaPowerOff /></ListItemIcon>
                                <ListItemText primary="Log Out" />
                            </ListItem>
                        </div>
                    ) : (
                            <div></div>
                        )
                }
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
        </div>
    );

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                elevation={0}
                position="fixed"
                style={{ backgroundColor: color.palette.primary.dark, color: color.palette.primary.light, padding: "0px 10px" }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer("left", true)}
                        edge="start"
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
                        >
                            <SearchIcon />
                        </IconButton>
                    </Link>

                </Toolbar>
            </AppBar>
            <SwipeableDrawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
            >
                {list("left")}
            </SwipeableDrawer>
            <Toolbar />
        </React.Fragment>
    );
}
