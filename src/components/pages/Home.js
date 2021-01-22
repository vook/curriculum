import React, {} from 'react';
import {Box, makeStyles, Typography} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import * as Icon from '@material-ui/icons';
import {Element} from 'react-scroll'

const useStyle = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      minHeight: 'calc(100vh - 50px)',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: 'calc(100vh - 122px)',
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
    <Element className={classes.root} id='home'>
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
    </Element>
  );
}
