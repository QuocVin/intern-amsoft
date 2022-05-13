import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

export default function AppHeader({ open, handleOpen, classes }) {

    return (
        <AppBar position="fixed"
            // className={clsx(classes.appBar, {
            //     [classes.appBarShift]: open,
            // })}
            className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                    ALINCO Sensor FOX
                </Typography>
                <div className={classes.grow} />
                <div >
                    <IconButton color="inherit" >
                        <AccountCircleIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}
