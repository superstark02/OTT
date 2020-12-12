import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { theme as color } from '../Theme/Theme';
import { ArrowBackRounded } from '@material-ui/icons'
import Typography from '@material-ui/core/Typography';



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

export default function SubAppBar(props) {
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
                        onClick={() => { window.history.back() }}
                        edge="start"
                    >
                        <ArrowBackRounded />
                    </IconButton>
                    <Typography variant="h6" noWrap >
                        {props.name}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </React.Fragment>
    );
}
