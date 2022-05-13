import React from 'react';
import {
    Box, TextField,
} from '@material-ui/core';
import { useStyles } from './AppInputIcon.styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function AppInputIcon({ className = '', icon, handlePage = () => { } }) {
    const classes = useStyles();

    return (
        <Box className={classes.row}>
            <TextField
                id="outlined-name"
                label={<>{icon}</>}
                variant="outlined"
                disabled
                className={classes.inputLeft}
            />
            <TextField
                id="outlined-name"
                // value={name}
                // onChange={handleChange}
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
                className={classes.inputRight}
            />
        </Box>
    )
}
