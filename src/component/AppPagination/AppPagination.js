import React from 'react';
import { useStyles } from './AppPagination.styles';
import Pagination from '@material-ui/lab/Pagination';

export default function AppSelect({ className = '', count = 1, page = 1, onChange = () => { } }) {
    const classes = useStyles();

    return (
        <Pagination
            count={count}
            page={page}
            onChange={onChange}
            shape="rounded"
            variant="outlined"
            color="primary"
            showFirstButton
            showLastButton
            size="large"
            // siblingCount={0}
            // boundaryCount={2}
            className={[classes.rootPag, className].join(' ')}
        />
    );
}
