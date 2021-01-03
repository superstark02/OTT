import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import { theme as color } from '../Theme/Theme';
import { CommentRounded, Help, InfoRounded } from '@material-ui/icons';
import RestoreRoundedIcon from '@material-ui/icons/RestoreRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import FolderSpecialRoundedIcon from '@material-ui/icons/FolderSpecialRounded';
import WidgetsRoundedIcon from '@material-ui/icons/WidgetsRounded';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';


export default function MyAppBar(props) {
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
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            style={{ width: "70vw" }}
        >
            <List>
                {
                    props.uid ? (
                        <ListItem button key={"signin1"}>
                            <ListItem button key={"signin"}>
                                <div style={{ display: "flex" }} >
                                    <div>
                                        <img alt="user" src={props.photo} style={{ borderRadius: "50%", width: "30px" }} />
                                    </div>
                                    <div>
                                        <div className="h7" >
                                            {props.name}
                                        </div>
                                        <div style={{ margin: "0px 20px" }} >
                                            {props.email}
                                        </div>
                                    </div>
                                </div>
                            </ListItem>
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
                                <ListItemIcon><AccountCircleRoundedIcon /></ListItemIcon>
                                <ListItemText primary={"SignIn"} secondary={"To access all features."} />
                            </ListItem>
                        </div>
                    ) : (
                            <div></div>
                        )
                }
                {[
                    { name: 'Watch Later', icon: <RestoreRoundedIcon />, to:"/watch-later" }, 
                    { name: 'Categories', icon: <FolderSpecialRoundedIcon />, to:"/category" },
                    { name: 'Plans', icon: <WidgetsRoundedIcon />, to:"/plans" }].map((text, index) => (
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
                                <ListItemIcon><PowerSettingsNewRoundedIcon /></ListItemIcon>
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
