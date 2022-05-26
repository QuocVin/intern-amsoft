import React, { useState } from "react";
import {
    Box, Typography,
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid,
} from '@material-ui/core';
import { useStyles } from './AccountList.styles';
import { AppPagination, AppSelect, AppTable, AppDialog, AppInput, AppForm } from '../../component';
import { ROUTES } from '../../comon';
import { useForm, Controller } from "react-hook-form";

const obj = [
    { id: '1', label: '1' },
    { id: '2', label: '2' },
    { id: '3', label: '3' },
    { id: '4', label: '4' },
]

const options = [
    { id: 'optionAll', label: { title: 'Tất cả' }, xs: 12, component: { textField: true } },
    { id: 'option1', label: { title: 'option 1' }, xs: 12, component: { textField: true } },
    { id: 'option2', label: { title: 'option 2' }, xs: 12, component: { textField: true } },
    { id: 'option3', label: { title: '', checkboxLabel: 'checkbox label option 3' }, xs: 12, component: { checkbox: true } },
    { id: 'option4', label: { title: 'option 4' }, xs: 12, component: { textField: true } },
    { id: 'option5', label: { title: 'option 5' }, xs: 12, component: { radio: true } },
    { id: 'option6', label: { title: 'option 6', checkboxLabel: 'checkbox label option 6' }, xs: 12, component: { checkbox: true } },
    { id: 'option7', label: { title: 'option 7', checkboxLabel: 'checkbox label option 7' }, xs: 12, component: { checkbox: true } },
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

export default function AccountListView() {
    const classes = useStyles();
    const [sel, setSel] = useState('');
    const [count, setCount] = useState(4);
    const { control, setValue, getValues } = useForm()

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

    const handleRegistration = () => {
        setOpen(false);
        console.info(getValues())
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
            <Box className={[classes.row, classes.rowPage, classes.spacingBottom].join(' ')}>
                <Box></Box>
                <Box className={classes.row}>
                    <Button className={classes.btn} onClick={handleClickOpen} color="primary" variant="contained">btn act</Button>
                    <Button className={classes.btn} onClick={handleClickOpen} color="primary" variant="contained">btn act</Button>
                </Box>
            </Box>

            <AppDialog
                fields={options}
                useForm={{ control, setValue, getValues }}
                dialogAct={{ open: open, handleClose: handleClose, handleSubmit: handleRegistration }}
                title={ROUTES.DEVICE_STATUS.NAME}
            />

            <Box className={[classes.row, classes.rowPage].join(' ')}>
                <Box><Typography>row index in table</Typography></Box>
                <Box className={classes.row}>
                    <Typography className={classes.rowlabel}>page </Typography>
                    <AppSelect value={page} tags={obj} onChange={handlePageSel} />
                    <AppPagination className={classes.boxPag} count={count} page={page} onChange={handlePage} />
                </Box>
            </Box>
            <Box className={classes.boxTable}>
                <AppTable columns={columns} rows={rows} action={{ info: true, edit: true, del: true }} />
            </Box>

            <Box className={[classes.row, classes.rowPage].join(' ')}>
                <Box><Typography>row index in table</Typography></Box>
                <Box className={classes.row}>
                    <Typography className={classes.rowlabel}>page </Typography>
                    <AppSelect value={page} tags={obj} onChange={handlePageSel} />
                    <AppPagination className={classes.boxPag} count={count} page={page} onChange={handlePage} />
                </Box>
            </Box>
        </Box>
    )
}