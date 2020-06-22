import React, {} from 'react';
import {Box, makeStyles, Typography} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import * as Icon from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      minHeight: 'calc(100vh - 167px)',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: 'calc(100vh - 223px)',
    },
    alignContent: 'center',
    display: 'flex',
  },
  content: {
    margin: 'auto',
    width: '100%',
  },
  name: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
    display: 'flex',
  },
}));

export default function Home() {
  const {t} = useTranslation();
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <Typography variant='h2'>
          {t('hello')}
        </Typography>
        <Typography variant='h1' className={classes.name}>
          {t('name')}
        </Typography>
        <Typography variant='h4' style={{flexGrow: 1, flexDirection: 'column'}}>
          {t('introduction')}
        </Typography>
        <Icon.MoreHoriz fontSize='large'/>
      </Box>
    </Box>
  );
}
