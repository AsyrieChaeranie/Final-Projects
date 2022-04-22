// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';/*1. hooks with use useState */
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,/*2. Flex and Grid: here i use flex*/
  },
}));

const Navbar = () => {
  const classes = useStyles();


  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu"className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" className={classes.title}> <LibraryMusicIcon/> Musicophile  </Typography>
        <Button color="inherit" >
         
        </Button>
      </Toolbar>
     {/* <ModalDialog open={open} handleClose={handleClose} /> */}
    </AppBar>
  );
};

export default Navbar;