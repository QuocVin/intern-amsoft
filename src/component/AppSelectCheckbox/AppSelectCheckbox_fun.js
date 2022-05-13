import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useStyles } from './AppSelectCheckbox.styles';
import {
    FormControlLabel, FormControl, Select, MenuItem, InputLabel, InputBase,
    RadioGroup, Radio, Checkbox,
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

const options = [
    { id: 'optionAll', label: 'Tất cả', value: false },
    { id: 'option1', label: 'option 1', value: false },
    { id: 'option2', label: 'option 2', value: false },
    { id: 'option3', label: 'option 3', value: false },
    { id: 'option4', label: 'option 4', value: false },
    { id: 'option5', label: 'option 5', value: false },
    { id: 'option6', label: 'option 6', value: false },
]

export default function AppSelectRadio() {
    const classes = useStyles();
    const [checkStates, setCheckStates] = useState(options);
    // useEffect(() => { setCheckStates(options) }, [options]);

    const handleChange2 = (e) => {
        // let idx = options.indexOf(options.find(ee => ee.id === e.target.value));
        // // console.log(e.target.value, idx)
        // checkStates[idx].value = !checkStates[idx].value;
        // console.log(checkStates[idx].value)
        // setCheckStates(checkStates)

    }

    const [sel, checSel] = useState({
        id: null,
        label: null,
        value: false
    });
    const handleChange3 = (event) => {
        // checSel({
        //     id: event.target.value
        // });
        console.info(event.target)
    };

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    // return (
    //     <FormControl variant="outlined" className={classes.formControl}>
    //         <Select
    //             labelId="simple-select-outlined-label"
    //             id="simple-select-outlined"
    //             defaultValue={options[0].id}
    //             onChange={handleChange2}
    // input={<BootstrapInput />}
    //         >
    //             {options.map((op, idx) => {
    //                 // console.log(op)
    //                 return (
    //                     <MenuItem key={idx + op.id} value={op.id}>
    //                         <Checkbox onChange={handleChange2} color="primary" inputProps={{ 'aria-label': 'primary checkbox' }} checked={!!checkStates[idx].value} />{op.label}
    //                     </MenuItem>
    //                 )
    //             })}
    //         </Select>
    //     </FormControl>
    // );
    return (
        // <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} onClick={handleChange3} />
        <FormControl variant="outlined" className={classes.formControl}>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={sel}
                onChange={handleChange3}
                input={<BootstrapInput />}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10} checked={checked}><Checkbox color="primary" checked={checked} />Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    );
}
