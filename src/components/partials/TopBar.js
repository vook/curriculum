import React, {useState} from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  Hidden,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@material-ui/core';
import {pink} from '@material-ui/core/colors';
import * as Icon from '@material-ui/icons';
import {useTranslation} from 'react-i18next';
import {startsWith} from 'lodash';
import {info} from '../../hooks/DataHook';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    color: theme.palette.secondary.main,
  },
  flex: {
    flexGrow: 1,
  },
  buttonDisabled: {
    '&:disabled': {
      color: theme.palette.secondary.main,
    },
  },
  avatar: {
    '& .MuiSvgIcon-root': {
      color: '#fff',
    },
    backgroundColor: pink[500]
  },
  dialog: {
    display: 'flex',
    alignItems: 'center'
  }
}));

export default function TopBar() {
  const classes = useStyles();
  const {t, i18n} = useTranslation();
  const [langAnchor, setLangAnchor] = useState(null);
  const [mailDialog, setOpenMailDialog] = useState(false);
  const [phoneDialog, setOpenPhoneDialog] = useState(false);
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
    <AppBar position="fixed" elevation={0} className={classes.root}>
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
        <Dialog open={mailDialog} onBackdropClick={() => setOpenMailDialog(false)}>
          <DialogContent className={classes.dialog}>
            <Tooltip title={t('copy')}>
              <IconButton onClick={() => {
                navigator.clipboard.writeText(info.email);
                setOpenMailDialog(false);
              }}>
                <Avatar className={classes.avatar}>
                  <Icon.FileCopy/>
                </Avatar>
              </IconButton>
            </Tooltip>
            &nbsp;
            <Typography variant='h4'>{info.email}</Typography>
          </DialogContent>
        </Dialog>
        <Tooltip title={t('email') + ' : ' + info.email}>
          <IconButton onClick={() => setOpenMailDialog(!mailDialog)}>
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
