import React, {} from 'react';
import {Box, Typography} from "@material-ui/core";
import {Element} from "react-scroll";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      minHeight: 'calc(100vh - 64px)',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: 'calc(100vh - 122px)',
    },
  },
  title: {
    marginTop: 75,
    width: '100%',
  },
  body: {
    height: '100%',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  }
}));

export function Page(props) {
  const classes = useStyles();
  return <Element className={classes.root} id={props.id}>
    <Box className={classes.title}>
      <Typography variant='h2'>
        {props.title}
      </Typography>
    </Box>
    <Box className={classes.body}>
      {props.children}
    </Box>
  </Element>
}
