import React, {} from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Tooltip,
  makeStyles,
} from '@material-ui/core';
import * as Icon from '@material-ui/icons';
import {useTranslation} from 'react-i18next';
import {startsWith} from 'lodash';
import {info} from '../../hooks/DataHook';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 200,
    width: 'auto',
  },
  flex: {
    flexGrow: 1,
  },
  buttonDisabled: {
    '&:disabled': {
      color: theme.palette.secondary.main,
    },
  },
}));

export default function TopBar() {
  const classes = useStyles();
  const {t, i18n} = useTranslation();
  console.log(info);
  return (
    <AppBar position="static" elevation={0} className={classes.root}>
      <Toolbar>
        <Box className={classes.flex}/>
        <Button
          onClick={() => i18n.changeLanguage('pt')}
          disabled={startsWith(i18n.language, 'pt')}
          className={classes.buttonDisabled}
        >
          {t('portuguese')}
        </Button>
        <Button
          onClick={() => i18n.changeLanguage('en')}
          disabled={startsWith(i18n.language, 'en')}
          className={classes.buttonDisabled}
        >
          {t('english')}
        </Button>
        <Tooltip title={t('email')}>
          <IconButton>
            <Icon.Email/>
          </IconButton>
        </Tooltip>
        <Tooltip title={t('phone')}>
          <IconButton>
            <Icon.Phone/>
          </IconButton>
        </Tooltip>
        <Tooltip title={t('linkedin')}>
          <IconButton
            href={info.linkedin} target='_blank'
          >
            <Icon.LinkedIn/>
          </IconButton>
        </Tooltip>
        <Tooltip title={t('github')}>
          <IconButton href={info.github} target='_blank'>
            <Icon.GitHub/>
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
