import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        borderBottom: '3px solid black',
        borderRight: '1px solid #ebe6e3',
        fontWeight: 'bold',
    },
    body: {
        fontSize: 14,
        borderRight: '1px solid #ebe6e3'
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
        minWidth: 700,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
});

export default function AppTable({ columns = [], rows = [], action = {} }) {
    const classes = useStyles();
    const { info, edit, del } = action

    const CellAct = ({ info = false, edit = false, del = false }) => {
        const BtnInfo = ({ info }) => {
            if (info) {
                return <> <InfoIcon color="primary" /> </>
            } else return
        }
        const BtnEdit = ({ edit }) => {
            if (edit) {
                return <> <EditIcon color="primary" /> </>
            } else return
        }
        const BtnDel = ({ del }) => {
            if (del) {
                return <> <DeleteIcon color="secondary" /> </>
            } else return
        }

        return (
            <div className={classes.row}>
                <Button><BtnInfo info={info} /></Button>
                <Button><BtnEdit edit={edit} /></Button>
                <Button><BtnDel del={del} /></Button>
            </div>
        )
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">STT</StyledTableCell>
                        {columns.map((col, idx) => (
                            <StyledTableCell key={`${idx}-${col.id}-table-cell-header`}>{col.label}</StyledTableCell>
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
                                    <StyledTableCell key={`${col.id}-table-cell-header`} align={col.align} >
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
