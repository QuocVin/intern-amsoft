import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from './Drawer'
import Header from './Header'
import Main from './Main'
import { useStyles } from './AppLayout-styles'

export default function AppLayout({ children }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = (event, reason) => {
        setOpen(false);
        // if (reason === 'clickaway') {
        //     setOpen(false);
        //     console.info('pass')
        // }
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header open={open} handleOpen={handleDrawerOpen} classes={classes} />

            <Drawer open={open} handleClose={handleDrawerClose} classes={classes} />

            <Main open={open} classes={classes} >
                {children}
            </Main>
        </div>
    );
}
