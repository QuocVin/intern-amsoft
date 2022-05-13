import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    rootPag: {
        "& .MuiPaginationItem-outlinedPrimary.Mui-selected": {
            backgroundColor: "#3f51b5",
            color: "white"
        },
        "& .MuiPaginationItem-outlined": {
            color: "#3f51b5",
            borderColor: "#3f51b5",
            margin: 0,
            borderRadius: 0,
            lineHeight: 1
        },
        "& .MuiPaginationItem-page.Mui-disabled": {
            backgroundColor: '#cee2e3',
            opacity: 0.6
        }
    }
}));