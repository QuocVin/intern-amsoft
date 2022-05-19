import React, { useState } from "react";
import {
    Box, Typography,
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid,
    FormControlLabel, Checkbox,
    Radio, RadioGroup, FormControl, TextField
} from '@material-ui/core';
import { useStyles } from './AccountList.styles';
import { AppPagination, AppSelect, AppTable, AppInputIcon, AppInput, AppForm } from '../../component';
import { ROUTES } from '../../comon';
import { useForm, Controller } from "react-hook-form";

const obj = [
    { id: '1', label: '1' },
    { id: '2', label: '2' },
    { id: '3', label: '3' },
]

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

export default function AccountListView() {
    const classes = useStyles();
    const [sel, setSel] = useState('');
    const [count, setCount] = useState(4);
    const { watch, control, setValue, getValues } = useForm()

    const handleChange = (event) => {
        setSel(event.target.value);
    };

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        console.info(getValues())
    };

    return (
        <Box className={classes.rootView}>
            <Box className={[classes.row, classes.rowPage, classes.spacingBottom].join(' ')}>
                <Box></Box>
                <Box className={classes.row}>
                    <Button className={classes.btn} onClick={handleClickOpen} color="primary" variant="contained">btn act</Button>
                    <Button className={classes.btn} onClick={handleClickOpen} color="primary" variant="contained">btn act</Button>
                </Box>
            </Box>

            <div>
                <Dialog className={classes.rootDialog} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">{ROUTES.ACCOUNT_LIST.NAME}</DialogTitle>
                    <DialogContent >
                        <AppForm fields={options} control={control} getValues={getValues} setValue={setValue} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary" variant="contained">
                            Sumit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

            <Box className={[classes.row, classes.rowPage].join(' ')}>
                <Box><Typography>row index in table</Typography></Box>
                <Box className={classes.row}>
                    <Typography className={classes.rowlabel}>page </Typography>
                    <AppSelect tags={obj} onChange={(e) => handleChange(e)} />
                    <AppPagination className={classes.boxPag} count={count} />
                </Box>
            </Box>
            <Box className={classes.boxTable}>
                <AppTable info={true} edit={true} del={true} />
            </Box>

            <Box className={[classes.row, classes.rowPage].join(' ')}>
                <Box><Typography>row index in table</Typography></Box>
                <Box className={classes.row}>
                    <Typography className={classes.rowlabel}>page </Typography>
                    <AppSelect tags={obj} onChange={(e) => handleChange(e)} />
                    <AppPagination className={classes.boxPag} count={count} />
                </Box>
            </Box>
        </Box>
    )
}