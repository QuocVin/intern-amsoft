import React, { useState } from "react";
import {
    Box, Typography,
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid,
    FormControlLabel, Checkbox,
    Radio, RadioGroup, FormControl, TextField
} from '@material-ui/core';
import { useStyles } from './AccountList.styles';
import { AppPagination, AppSelect, AppTable, AppInputIcon, AppTextField } from '../../component';
import { ROUTES } from '../../comon';

const obj = [
    { id: '1', label: '1' },
    { id: '2', label: '2' },
    { id: '3', label: '3' },
]

export default function AccountListView() {
    const classes = useStyles();
    const [sel, setSel] = useState('');
    const [count, setCount] = useState(4);

    const handleChange = (event) => {
        setSel(event.target.value);
    };

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [value, setValue] = React.useState('female');

    const handleChange2 = (event) => {
        setValue(event.target.value);
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

            <Dialog className={classes.rootDialog} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{ROUTES.ACCOUNT_LIST.NAME}</DialogTitle>
                <DialogContent >
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <AppTextField label={'row content'} control={{ textField: true }} />
                        </Grid>
                        <Grid item xs={12}>
                            <AppTextField label={'row content'} control={{ textField: true }} />
                        </Grid>
                        <Grid item xs={12}>
                            <AppTextField label={'row content'} control={{ textField: true }} />
                        </Grid>
                        <Grid item xs={12}>
                            <AppTextField control={{ checkbox: true }} />
                        </Grid>
                        <Grid item xs={12}>
                            <AppTextField label={'row content'} control={{ textField: true }} />
                        </Grid>
                        <Grid item xs={12} className={classes.rowInput}>
                            <AppTextField label={'row content'} control={{ radio: true }} />
                        </Grid>
                        <Grid item xs={12} className={classes.rowInput}>
                            <AppTextField label={'row content'} control={{ checkbox: true }} />
                        </Grid>
                        <Grid item xs={12} className={classes.rowInput}>
                            <AppTextField label={'row content'} control={{ checkbox: true }} />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" variant="contained">
                        Sumit
                    </Button>
                </DialogActions>
            </Dialog>

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