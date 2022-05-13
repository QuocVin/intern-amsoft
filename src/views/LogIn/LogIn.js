import React, { useState } from "react";
import {
    Box, Typography, Button,
} from '@material-ui/core';
import { useStyles } from './LogIn.styles';
import { AppInputIcon } from '../../component';
import { Controller, useForm } from "react-hook-form"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

export default function LogIn({ onSubmit = () => { } }) {
    const classes = useStyles();

    return (
        <div className={classes.rootView}>
            <Box className={classes.content}>
                <Typography className={classes.title} variant="h4">Log In</Typography>
                <Box className={classes.row}>
                    <AppInputIcon icon={<AccountCircleIcon fontSize="large" />} />
                </Box>
                <Box className={classes.row}>
                    <AppInputIcon icon={<VpnKeyIcon fontSize="large" />} />
                </Box>
                <Box className={[classes.row, classes.rowBtn].join(' ')}>
                    <Button className={classes.btn} onClick={onSubmit} color="primary" variant="contained">Sign In</Button>
                </Box>
            </Box>
        </div>
    )
}