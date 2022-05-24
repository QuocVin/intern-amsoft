import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    rootView: {
        padding: '20px'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    // ------------------------
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
    boxTable: {
        margin: theme.spacing(3, 0),
    },
    boxPag: {
        marginLeft: '25px'
    },
    // -----------------------
    rootSel: {
        width: "120px",
        margin: theme.spacing(0, 2, 0, 2),
    },
    spacingBottom: {
        marginBottom: theme.spacing(2),
    },
    btn: {
        marginLeft: theme.spacing(2),
    },

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
}));