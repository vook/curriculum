import React, {useState} from 'react';
import {Box, makeStyles, useTheme} from '@material-ui/core';
import LoadingBar from 'react-top-loading-bar';
import TopBar from './partials/TopBar';
import {i18nPromise} from '../config/i18n';
import NavigationBar from './partials/NavigationBar';
import {dataPromise} from '../hooks/DataHook';
import Home from './pages/Home';
import About from "./pages/About";
import Career from "./pages/Career";
import Knowledge from "./pages/Knowledge";
import * as Icon from '@material-ui/icons';
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme) => ({
  body: {
    color: theme.palette.primary.contrastText,
    padding: 0,
  },
  content: {
    [theme.breakpoints.up('md')]: {
      marginLeft: 200,
    },
    padding: 50,
  },
  pageBottomMargin: {
    marginBottom: 75
  }
}));

export default function App() {
  const [progress, setProgress] = useState(0);
  const [isInitialized, setInitialized] = useState(false);
  const {t} = useTranslation();
  Promise.all([i18nPromise, dataPromise]).then(() => {
    setProgress(100);
  });

  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box className={classes.body}>
      <LoadingBar
        progress={progress}
        height={3}
        color={theme.palette.secondary.main}
        onLoaderFinished={() => {
          setInitialized(true)
        }}
      />
      {isInitialized && <Box>
        <NavigationBar menu={[
          {
            icon: Icon.Home,
            text: t('home'),
            elementId: 'home'
          },
          {
            icon: Icon.AssignmentInd,
            text: t('about'),
            elementId: 'about'
          },
          {
            icon: Icon.BusinessCenter,
            text: t('career'),
            elementId: 'career'
          },
          {
            icon: Icon.EmojiObjects,
            text: t('knowledge'),
            elementId: 'knowledge'
          },
        ]}/>
        <TopBar/>
        <Box className={classes.content}>
          <Home/>
          <About/>
          <Career/>
          <Knowledge/>
        </Box>
      </Box>}
    </Box>
  );
}
