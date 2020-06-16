import React, {} from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  makeStyles,
} from '@material-ui/core';
import * as Icon from '@material-ui/icons';
import {useTranslation} from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    height: '100%',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
  },
  menu: {
    width: '100%',
    margin: 'auto',
    borderRight: '2px solid ' + theme.palette.secondary.main,
    boxSizing: 'border-box',
    '& li': {
      padding: 25,
      paddingRight: 10,
    },
  },
  item: {
    '& .MuiListItemText-root': {
      visibility: 'hidden',
    },
    '&:hover .MuiListItemText-root': {
      visibility: 'visible',
    },
  },
  selected: {
    color: theme.palette.secondary.main,
    backgroundColor: 'inherit !important',
    '& .MuiSvgIcon-root': {
      color: theme.palette.secondary.main,
    },
  },
}));

export default function NavigationBar() {
  const classes = useStyles();
  const {t} = useTranslation();
  return (
    <Box className={classes.root}>
      <Box className={classes.menu}>
        <List classes={classes.list}>
          <ListItem
            href='#' selected
            classes={{root: classes.item, selected: classes.selected}}
          >
            <ListItemIcon>
              <Icon.Home/>
            </ListItemIcon>
            <ListItemText
              primary={t('home')}
            />
          </ListItem>
          <ListItem
            href='#' classes={{root: classes.item, selected: classes.selected}}
          >
            <ListItemIcon>
              <Icon.AssignmentInd/>
            </ListItemIcon>
            <ListItemText primary={t('about')}/>
          </ListItem>
          <ListItem
            href='#' classes={{root: classes.item, selected: classes.selected}}
          >
            <ListItemIcon>
              <Icon.BusinessCenter/>
            </ListItemIcon>
            <ListItemText primary={t('career')}/>
          </ListItem>
          <ListItem
            href='#' classes={{root: classes.item, selected: classes.selected}}
          >
            <ListItemIcon>
              <Icon.EmojiObjects/>
            </ListItemIcon>
            <ListItemText primary={t('knowledge')}/>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
