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
import { AppPagination, AppSelect, AppInputIcon, AppSelectRadio, AppSelectCheckbox, AppForm } from '../../component';
import { ROUTES } from '../../comon';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useForm, Controller } from "react-hook-form";

const options = [
    { id: 'optionAll', label: { title: 'Tất cả' }, xs: 12, component: { textField: true } },
    { id: 'option1', label: { title: 'option 1' }, xs: 12, component: { textField: true } },
    { id: 'option2', label: { title: 'option 2' }, xs: 12, component: { textField: true } },
    { id: 'option3', label: { title: 'option 3', checkboxLabel: 'checkbox label option 3' }, xs: 12, component: { checkbox: true } },
    { id: 'option4', label: { title: 'option 4' }, xs: 12, component: { textField: true } },
    { id: 'option5', label: { title: 'option 5' }, xs: 12, component: { radio: true } },
    { id: 'option6', label: { title: 'option 6', checkboxLabel: 'checkbox label option 6' }, xs: 12, component: { checkbox: true } },
    { id: 'option7', label: { title: 'option 7', checkboxLabel: 'checkbox label option 7' }, xs: 12, component: { checkbox: true } },
]

export default function DeviceStatusView() {
    const classes = useStyles();
    const { watch, control, setValue, getValues } = useForm()
    const handleRegistration = () => {
        console.info(getValues())
    }

    // const [sel, setSel] = useState('');
    // const [count, setCount] = useState(4);

    // const handleChange = (event) => {
    //     setSel(event.target.value);
    // };

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
                <AppForm fields={options} control={control} getValues={getValues} setValue={setValue} />
                <Button onClick={handleRegistration} >submit</Button>
            </Box>
        </Box>
    )
}