import React, {Fragment} from 'react';
import {AppBar, Box, Hidden, List, ListItem, ListItemIcon, ListItemText, makeStyles,} from '@material-ui/core';
import {Link} from 'react-scroll'

const useStyles = makeStyles((theme) => ({
  sideBar: {
    width: 200,
    height: '100%',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
  },
  bottomBar: {
    bottom: 0,
    top: 'auto',
  },
  toolbar: {
    borderTop: '2px solid ' + theme.palette.secondary.main,
    margin: 'auto',
    '& .MuiIconButton-root': {
      paddingRight: 20,
      paddingLeft: 20,
    },
    display: 'flex',
    flexDirection: 'row',
  },
  link: {
    cursor: 'pointer',
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

export default function NavigationBar(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <Hidden smDown>
        <Box className={classes.sideBar}>
          <Box className={classes.menu}>
            <List classes={classes.list}>
              {props.menu.map((menu, index) =>
                <Link key={index}
                      className={classes.link}
                      activeClass={classes.selected}
                      spy={true}
                      to={menu.elementId}
                      offset={-64}
                      smooth={true}>
                  <ListItem classes={{root: classes.item}}>
                    <ListItemIcon>
                      <menu.icon/>
                    </ListItemIcon>
                    <ListItemText
                        primary={menu.text}
                    />
                  </ListItem>
                </Link>
              )}
            </List>
          </Box>
        </Box>
      </Hidden>
      <Hidden mdUp>
        <AppBar position="fixed" elevation={0} className={classes.bottomBar}>
          <List className={classes.toolbar}>
            {props.menu.map((menu, index) =>
                <Link key={index}
                      activeClass={classes.selected}
                      spy={true}
                      to={menu.elementId}
                      offset={-64}
                      smooth={true}>
                  <ListItem>
                    <ListItemIcon>
                      <menu.icon/>
                    </ListItemIcon>
                  </ListItem>
                </Link>
            )}
          </List>
        </AppBar>
      </Hidden>
    </Fragment>
  );
}
