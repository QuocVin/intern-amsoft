import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import clsx from 'clsx';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        borderBottom: '3px solid black',
        borderRight: '1px solid #ebe6e3',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    body: {
        fontSize: 14,
        borderRight: '1px solid #ebe6e3',
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        // tableLayout: 'fixed',
        width: 'max-content'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btn: {
        "& .MuiButton-root": {
            padding: '6px',
            minWidth: 'max-content',
        }
    },
});

export default function AppTable({ columns = [], rows = [], action = {} }) {
    const classes = useStyles();
    const { info, edit, del } = action

    const CellAct = ({ info = false, edit = false, del = false }) => {
        const BtnInfo = ({ info }) => {
            if (info) {
                return <Button> <InfoIcon color="primary" /> </Button>
            } else return
        }
        const BtnEdit = ({ edit }) => {
            if (edit) {
                return <Button> <EditIcon color="primary" /> </Button>
            } else return
        }
        const BtnDel = ({ del }) => {
            if (del) {
                return <Button> <DeleteIcon color="secondary" /> </Button>
            } else return
        }

        return (
            <div className={clsx(classes.row, classes.btn)}>
                <BtnInfo info={info} />
                <BtnEdit edit={edit} />
                <BtnDel del={del} />
            </div>
        )
    }

    return (
        <TableContainer className={classes.table} component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center" style={{ width: 70 }}>STT</StyledTableCell>
                        {columns.map((col, idx) => (
                            <StyledTableCell key={`${idx}-${col.id}-table-cell-header`} style={{ width: col.width + 70 }}>{col.label}</StyledTableCell>
                        ))}
                        <StyledTableCell align="center">Activity</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, idx) => (
                        <StyledTableRow key={`${idx}-table-row`}>
                            <StyledTableCell align="center">{idx + 1}</StyledTableCell>
                            {columns.map((col) => {
                                const value = row[col.id];
                                return (
                                    <StyledTableCell key={`${col.id}-table-cell-header`} align={col.align}>
                                        {col?.format && typeof value === 'number' ? col.format(value) : value}
                                    </StyledTableCell>
                                );
                            })}
                            {/* <StyledTableCell component="th" scope="row">sd</StyledTableCell> */}
                            <StyledTableCell align="center"><CellAct info={info} edit={edit} del={del} /></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
