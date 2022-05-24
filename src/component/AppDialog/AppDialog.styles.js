import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    rootDialog: {
        '& .MuiDialog-paperWidthSm': {
            maxWidth: '950px',
        },
        '& .MuiDialogContent-root': {
            // height: '145px',
        },
        '& .MuiDialogActions-root': {
            alignSelf: 'center',
            marginBottom: '15px'
        }
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowPage: {
        justifyContent: 'space-between'
    },
    rowlabel: {
        marginRight: '15px'
    },
    boxPag: {
        marginLeft: '25px'
    },
    boxTable: {
        margin: theme.spacing(3, 0),
    },
}));