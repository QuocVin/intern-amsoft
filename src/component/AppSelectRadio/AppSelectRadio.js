import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useStyles } from './AppSelectRadio.styles';
import {
    FormControlLabel, FormControl, Select, MenuItem, InputLabel, InputBase,
    RadioGroup, Radio
} from '@material-ui/core';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

export default function AppSelectRadio({ value, options = [], handleChange = () => { } }) {
    const classes = useStyles();

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value}
            // onChange={handleChange}
            >
                <Select
                    labelId="simple-select-outlined-label"
                    id="simple-select-outlined"
                    value={value}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    {options.map((op, idx) => {
                        return (
                            <MenuItem key={idx + op.id} value={op.id}><FormControlLabel value={op.id} control={<Radio color="primary" />} label={op.label} /></MenuItem>
                        )
                    })}
                </Select>
            </RadioGroup>
        </FormControl>
    );
}
