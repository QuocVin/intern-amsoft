import React, { useMemo } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import clsx from 'clsx';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        // borderBottom: '3px solid black',
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

const AppTable = ({ columns = [], exactColumns = [], rows = [], action = {} }) => {
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
                    {columns.map((row, index) => {
                        return (
                            <TableRow key={index}>
                                {[
                                    ...(index === 0 ? [{ id: 'stt', label: 'STT', rowSpan: 2 }] : []),
                                    ...row,
                                    ...(index === 0 ? [{ id: 'act', label: 'Act', rowSpan: 2 }] : [])
                                ]?.map?.((col, idx) => {
                                    let _width = 'max-content'
                                    if (index !== 0) {
                                        _width = +col?.width + 70 + 'px'
                                    }
                                    return (
                                        <StyledTableCell key={`${idx}-${col.id}-table-cell-header`}
                                            style={{ width: _width }}
                                            rowSpan={col.rowSpan || 1} colSpan={col.colSpan || 1} >
                                            {col.label}
                                        </StyledTableCell>
                                    )
                                })}
                            </TableRow>
                        )
                    })}
                </TableHead>
                <TableBody>
                    {rows.map((row, idx) => (
                        <StyledTableRow key={`${idx}-table-row`}>
                            <StyledTableCell align="center" style={{ width: 70 }}>{idx + 1}</StyledTableCell>
                            {exactColumns.map((col) => {
                                const value = row[`${col}`];
                                return (
                                    <StyledTableCell key={`${col}-table-cell-header`} align={typeof value === 'number' ? 'right' : 'center'}>
                                        {col?.format && typeof value === 'number' ? col.format(value) : value}
                                    </StyledTableCell>
                                );
                            })}
                            {/* <StyledTableCell component="th" scope="row">sd</StyledTableCell> */}
                            <StyledTableCell align="center" style={{ width: 190 }}><CellAct info={info} edit={edit} del={del} /></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default AppTable;