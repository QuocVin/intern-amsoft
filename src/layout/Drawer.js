import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { DRAWERS } from '../comon'
import { useNavigate } from "react-router-dom";

export default function AppDrawer({ open, handleClose, classes }) {
  const theme = useTheme();
  const navigate = useNavigate()

  const handleDrawerItem = (item) => {
    navigate(item);
  }

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      {/* <Divider /> */}
      <List>
        {Object.values(DRAWERS).map((route, idx) => (
          <ListItem button key={route.ID + idx} onClick={() => handleDrawerItem(route.PATH)}>
            <ListItemText primary={route.NAME} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
