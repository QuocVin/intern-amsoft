import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputLeft: {
        width: '73px',
        backgroundColor: '#ebe6e3',
        "& .MuiOutlinedInput-notchedOutline": {
            // borderTopLeftRadius: 0,
            // borderBottomLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderRight: 0,
        },
        "& .MuiInputLabel-formControl": {
            top: '-9px',
            left: '5px',
        }
    },
    inputRight: {
        width: '350px',
        "& .MuiOutlinedInput-notchedOutline": {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
        }
    }
}));