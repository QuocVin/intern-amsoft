import React from "react";
import {
    Typography, Box, Button,
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';
import { AppTable, AppPagination, AppSelect, AppForm } from '../../component'
import { useStyles } from './AppDialog.styles';


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

export default function AppDialog({ fields = [], useForm = {}, table = {}, dialogAct = {}, pagePag = {}, title, }) {
    const classes = useStyles();
    const { control, setValue, getValues } = useForm;
    const { columns = [], rows = [], action = {}, tableView = false } = table
    const { info, edit, del } = action
    const { open = false, handleClose = () => { }, handleSubmit = () => { } } = dialogAct
    const { page, tagPages = [], pageLength = 1, handlePage = () => { }, handlePageSel = () => { } } = pagePag

    return (
        <Dialog className={classes.rootDialog} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <DialogContent >
                <AppForm fields={fields} control={control} getValues={getValues} setValue={setValue} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit} color="primary" variant="contained">
                    Sumit
                </Button>
            </DialogActions>
            {tableView ? <DialogContent>
                <Box className={[classes.row, classes.rowPage].join(' ')}>
                    <Box><Typography>row index in table</Typography></Box>
                    <Box className={classes.row}>
                        <Typography className={classes.rowlabel}>page </Typography>
                        <AppSelect value={page} tags={tagPages} onChange={handlePageSel} />
                        <AppPagination className={classes.boxPag} count={pageLength} page={page} onChange={handlePage} />
                    </Box>
                </Box>
                <Box className={classes.boxTable}>
                    <AppTable columns={columns} rows={rows} action={{ info: info, edit: edit, del: del }} />
                </Box>
            </DialogContent> : <></>}
        </Dialog>
    );

};