import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    rootView: {
        backgroundColor: '#3f51b5',
        width: '100%',
        height: '100vh',
        position: 'relative',

    },
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 'fit-content',
        height: '320px',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '25px 25px 0 25px',
        borderRadius: '20px'
    },
    title: {
        textAlign: 'center',
        textDecoration: '4px underline #3f51b5'
    },
    row: {
        marginTop: '20px'
    },
    rowBtn: {
        textAlign: 'center'
    },
    btn: {
        padding: '8px',
        width: '170px',
    },
}));