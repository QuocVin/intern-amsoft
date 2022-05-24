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
import { AppPagination, AppTable, AppSelect, AppInputIcon, AppSelectRadio, AppSelectCheckbox, AppForm, AppDialog } from '../../component';
import { ROUTES } from '../../comon';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useForm, Controller } from "react-hook-form";

const options = [
    { id: 'option1', label: { title: 'option 1' }, xs: 6, component: { textField: true } },
    { id: 'option2', label: { title: 'option 2' }, xs: 6, component: { textField: true } },
    { id: 'option3', label: { title: 'option 3', checkboxLabel: 'checkbox label option 3' }, xs: 6, component: { checkbox: true } },
    { id: 'option4', label: { title: 'option 4' }, xs: 6, component: { textField: true } },
]

const obj = [
    { id: '1', label: '1' },
    { id: '2', label: '2' },
    { id: '3', label: '3' },
    { id: '4', label: '4' },
]

const columns = [
    { id: 'col1', label: 'column 1', align: 'right', },
    { id: 'col2', label: 'column 2', align: 'right', },
    { id: 'col3', label: 'column 3', align: 'right', },
    { id: 'col4', label: 'column 4', align: 'right', },
    { id: 'col5', label: 'column 5', align: 'right', },
    { id: 'col6', label: 'column 6', align: 'right', },
    { id: 'col7', label: 'column 7', align: 'right', },
]

function createData(col1, col2, col3, col4, col5, col6, col7) {
    return { col1, col2, col3, col4, col5, col6, col7 };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DeviceStatusView() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const { watch, control, setValue, getValues } = useForm()

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleRegistration = () => {
        setOpen(false);
        console.info(getValues())
        console.info('call submit')
    }

    const [page, setPage] = useState(2);

    const handlePage = (event, value) => {
        setPage(value);
    };

    const handlePageSel = (event) => {
        setPage(+event.target.value);
    };

    return (
        <Box className={classes.rootView}>
            <Box>
                <AppDialog
                    fields={options}
                    useForm={{ control, setValue, getValues }}
                    table={{ columns: columns, rows: rows, action: { info: true, edit: true }, tableView: true }}
                    dialogAct={{ open: open, handleClose: handleClose, handleSubmit: handleRegistration }}
                    pagePag={{ page: page, tagPages: obj, pageLength: 4, handlePage: handlePage, handlePageSel: handlePageSel }}
                    title={ROUTES.DEVICE_STATUS.NAME}
                />
                <Button onClick={handleClickOpen} >submit</Button>
            </Box>
        </Box>
    )
}