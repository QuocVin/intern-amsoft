import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // width: 'fit-content'
    },
    labelSpace: {
        width: '170px'
    },
    labelBorder: {
        padding: "15px 20px",
        borderTopLeftRadius: "5px",
        borderBottomLeftRadius: "5px",
        width: "170px",
        border: "1px solid #AEAAA8",
        backgroundColor: '#ebe6e3',
    },
    marginRight: {
        marginRight: theme.spacing(3),
    },
    marginLeft: {
        marginLeft: theme.spacing(3),
    },
    boxInput: {
        flexGrow: 1,
        "& .MuiOutlinedInput-notchedOutline": {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
        }
    },
}));