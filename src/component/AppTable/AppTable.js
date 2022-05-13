import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';

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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function AppTable({ info, edit, del }) {
    const classes = useStyles();

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
            <>
                <BtnInfo info={info} /> <BtnEdit edit={edit} /> <BtnDel del={del} />
            </>
        )
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">STT</StyledTableCell>
                        <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                        <StyledTableCell align="right">Calories</StyledTableCell>
                        <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="center">Activity</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, idx) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell align="center">{idx + 1}</StyledTableCell>
                            <StyledTableCell component="th" scope="row">{row.name} </StyledTableCell>
                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="right">{row.protein}</StyledTableCell>
                            <StyledTableCell align="center"><CellAct info={info} edit={edit} del={del} /></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
