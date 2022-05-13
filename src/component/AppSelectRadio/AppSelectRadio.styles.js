import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    formControl: {
        width: "150px",
        // margin: theme.spacing(0, 2, 0, 2),
        "& .MuiSelect-outlined.MuiSelect-outlined": {
            height: '42px',
            // paddingRight: '5px',

        },
        "& .MuiSelect-icon": {
            display: 'none',
        }
    }
}));