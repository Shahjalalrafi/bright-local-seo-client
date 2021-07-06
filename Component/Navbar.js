import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import logo from '../public/svg/brightlocal_logo.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  nav: {
    background: '#ffffff',
    color: 'black'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  btn: {
    fontWeight: '600',
    margin: '0 20px'
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.nav}  position="static">
        <Toolbar>
          <Link href="/">
            <Typography>
              <Image src={logo} alt="logo" width={250} height={30} />
            </Typography>
          </Link>
          <Button className={classes.btn} color="inherit">Product</Button>
          <Button className={classes.btn} color="inherit">Resources</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}