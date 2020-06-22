import React, {useState} from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Tooltip,
  makeStyles, Hidden, Menu, MenuItem,
} from '@material-ui/core';
import * as Icon from '@material-ui/icons';
import {useTranslation} from 'react-i18next';
import {startsWith} from 'lodash';
import {info} from '../../hooks/DataHook';

const useStyles = makeStyles((theme) => ({
  root: {
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
  const [langAnchor, setLangAnchor] = useState(null);
  const openLangMenu = (event) => {
    setLangAnchor(event.currentTarget);
  };
  const closeLangMenu = () => {
    setLangAnchor(null);
  };
  const setLangAndClose = (lang) => {
    i18n.changeLanguage(lang);
    closeLangMenu();
  };
  return (
    <AppBar position="static" elevation={0} className={classes.root}>
      <Menu
        anchorEl={langAnchor}
        keepMounted
        open={Boolean(langAnchor)}
        onClose={closeLangMenu}
      >
        <MenuItem
          disabled={startsWith(i18n.language, 'pt')}
          onClick={() => setLangAndClose('pt')}
        >
          {t('portuguese')}
        </MenuItem>
        <MenuItem
          disabled={startsWith(i18n.language, 'en')}
          onClick={() => setLangAndClose('en')}
        >
          {t('english')}
        </MenuItem>
      </Menu>
      <Toolbar>
        <Box className={classes.flex}/>
        <Hidden xsDown>
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
        </Hidden>
        <Hidden smUp>
          <Tooltip title={t('translate')}>
            <IconButton
              aria-controls="simple-menu" aria-haspopup="true"
              onClick={openLangMenu}
            >
              <Icon.Translate/>
            </IconButton>
          </Tooltip>
        </Hidden>
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
