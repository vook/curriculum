import React, {Fragment} from 'react';
import {Box, Typography, makeStyles} from '@material-ui/core';
import * as Icon from '@material-ui/icons';
import {useTranslation} from 'react-i18next';

const useStyle = makeStyles((theme) => ({
  name: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
    display: 'flex',
  },
  root: {
    minHeight: window.innerHeight - 167,
  },
}));

export default function About() {
  const {t} = useTranslation();
  const classes = useStyle();
  return (
    <Box className={classes.root}>
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
  );

}
