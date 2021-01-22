import React from 'react';
import {makeStyles, Typography} from '@material-ui/core'
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

export default function Projects() {
  const classes = useStyles();
  return (
    <Element className={classes.root} id='projects'>
      <Typography variant='h2'>
        Projects
      </Typography>
    </Element>
  );
}
