import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useStyles } from './AppSelectCheckbox.styles';
import {
    FormControlLabel, FormControl, Select, MenuItem, InputLabel, InputBase,
    ListItemText, Checkbox
} from '@material-ui/core';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


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

const getValueByKey = (arr, key) => {
    return arr.map((item) => { return item[`${key}`] })
}

export default function AppSelectRadio({ options = [], selectChecked, setSelectChecked, handleChange = () => { } }) {
    // export default function AppSelectRadio({ options = [] }) {
    const classes = useStyles();

    // const [selectChecked, setSelectChecked] = React.useState([]);

    // const arrId = getValueByKey(options, 'id')

    // const handleChange = (event) => {
    //     if (event.target.value.includes('optionAll')) {
    //         if (selectChecked.length > 0 && selectChecked.includes('optionAll')) {
    //             let arr = [...event.target.value]
    //             arr.shift()
    //             setSelectChecked(arr);
    //             // setSelectChecked(event.target.value);
    //         } else {
    //             setSelectChecked(arrId)
    //         }
    //     } else if (!event.target.value.includes('optionAll')) {
    //         if (selectChecked.length === 0 || (selectChecked.length > 0 && !selectChecked.includes('optionAll'))) {
    //             setSelectChecked(event.target.value);
    //         } else {
    //             setSelectChecked([])
    //         }
    //     } else {
    //         setSelectChecked(event.target.value);
    //     }
    // };

    return (
        <div>
            <h1 onClick={() => { console.info('selectChecked', selectChecked) }}>click</h1>
            <FormControl className={classes.formControl}>
                <Select
                    labelId="demo-mutiple-checkbox-label"
                    id="demo-mutiple-checkbox"
                    multiple
                    value={selectChecked}
                    onChange={handleChange}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                    input={<BootstrapInput />}
                >
                    {options.map((opt, idx) => (
                        <MenuItem key={idx + opt.id} value={opt.id}>
                            <Checkbox color='primary' checked={selectChecked.indexOf(opt.id) > -1} />
                            <ListItemText primary={opt.label} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}
