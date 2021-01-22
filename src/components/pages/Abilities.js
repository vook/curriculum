import React, {} from 'react';
import {Typography, makeStyles} from '@material-ui/core'
import {Element} from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      minHeight: 'calc(100vh - 50px)',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: 'calc(100vh - 122px)',
    },
    marginBottom: 75,
  },
}));

export default function Abilities() {
  const classes = useStyles();
  return (
    <Element className={classes.root} id='abilities'>
      <Typography variant='h2'>
        Abilities
      </Typography>
    </Element>
  );

}
