import React from 'react';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';

export default function AppMain({ children, open, classes }) {
    const child = React.useMemo(() => children, []);

    return (
        <main
            id="main-body"
            className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}
        >
            <div className={classes.drawerHeader} />
            {child}
        </main>
    );
}
