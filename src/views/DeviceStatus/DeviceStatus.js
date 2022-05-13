import React, { useState } from "react";
import {
    Box, Typography,
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid,
    TextField,
    FormControlLabel, FormControl, Select, MenuItem, InputLabel, InputBase,
    RadioGroup, Radio,
    Checkbox, FormLabel, FormGroup, FormHelperText
} from '@material-ui/core';
import { useStyles } from './DeviceStatus.styles';
import { AppPagination, AppSelect, AppInputIcon, AppSelectRadio, AppSelectCheckbox } from '../../component';
import { ROUTES } from '../../comon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const options = [
    { id: 'optionAll', label: 'Tất cả' },
    { id: 'option1', label: 'option 1' },
    { id: 'option2', label: 'option 2' },
    { id: 'option3', label: 'option 3' },
    { id: 'option4', label: 'option 4' },
    { id: 'option5', label: 'option 5' },
    { id: 'option6', label: 'option 6' },
]

const getValueByKey = (arr, key) => {
    return arr.map((item) => { return item[`${key}`] })
}

export default function DeviceStatusView() {
    const classes = useStyles();
    // const [sel, setSel] = useState('');
    // const [count, setCount] = useState(4);

    // const handleChange = (event) => {
    //     setSel(event.target.value);
    // };

    const arrId = getValueByKey(options, 'id')

    const [selectChecked, setSelectChecked] = React.useState([]);
    const handleChange = (event) => {
        console.info(event.target.value)
        if (event.target.value.includes('optionAll')) {
            if (selectChecked.length > 0 && selectChecked.includes('optionAll')) {
                let arr = [...event.target.value]
                arr.shift()
                setSelectChecked(arr);
            } else {
                setSelectChecked(arrId)
            }
        } else if (!event.target.value.includes('optionAll')) {
            if (selectChecked.length === 0 || (selectChecked.length > 0 && !selectChecked.includes('optionAll'))) {
                setSelectChecked(event.target.value);
            } else {
                setSelectChecked([])
            }
        } else {
            setSelectChecked(event.target.value);
        }
    };

    return (
        <Box className={classes.rootView}>
            {/* <Box className={[classes.row, classes.rowPage].join(' ')}>
                <Box><Typography>row index in table</Typography></Box>
                <Box className={classes.row}>
                    <Typography className={classes.rowlabel}>page </Typography>
                    <AppSelect tags={obj} onChange={(e) => handleChange(e)} />
                    <AppPagination className={classes.boxPag} count={count} />
                </Box>
            </Box> */}
            <Box>
                <AppSelectCheckbox options={options} selectChecked={selectChecked} setSelectChecked={setSelectChecked} handleChange={handleChange} />
            </Box>
        </Box>
    )
}