import React, { useState } from "react";
import {
    Box, Typography,
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid,
} from '@material-ui/core';
import { useStyles } from './AccountLog.styles';
import { AppPagination, AppSelect, AppTable, AppInputIcon } from '../../component';
import { ROUTES } from '../../comon';

const obj = [
    { id: '1', label: '1' },
    { id: '2', label: '2' },
    { id: '3', label: '3' },
]

export default function AccountLogView() {
    const classes = useStyles();
    const [sel, setSel] = useState('');
    const [count, setCount] = useState(1);

    const handleChange = (event) => {
        setSel(event.target.value);
    };

    return (
        <Box className={classes.rootView}>
            <Box><AppInputIcon icon={<Typography>label</Typography>} /></Box>

            <Box className={[classes.row, classes.rowPage, classes.spacingBottom].join(' ')}>
                <Box></Box>
                <Box className={classes.row}>
                    <Button className={classes.btn} color="primary" variant="contained">btn act</Button>
                </Box>
            </Box>

            <Box className={[classes.row, classes.rowPage].join(' ')}>
                <Box><Typography>row index in table</Typography></Box>
                <Box className={classes.row}>
                    <Typography className={classes.rowlabel}>page </Typography>
                    <AppSelect tags={obj} onChange={(e) => handleChange(e)} />
                    <AppPagination className={classes.boxPag} count={count} />
                </Box>
            </Box>
            <Box className={classes.boxTable}>
                <AppTable info={true} />
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