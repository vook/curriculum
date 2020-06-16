import React, {useState} from 'react';
import {Box, Typography, makeStyles, useTheme, Fade} from '@material-ui/core';
import LoadingBar from 'react-top-loading-bar';
import TopBar from './partials/TopBar';
import {i18nPromise} from '../config/i18n';
import NavigationBar from './partials/NavigationBar';
import About from './pages/About';
import {dataPromise} from '../hooks/DataHook';

const useStyles = makeStyles((theme) => ({
  body: {
    color: theme.palette.primary.contrastText,
    padding: 0,
  },
  content: {
    marginLeft: 200,
    padding: 50,
  },
}));

export default function App() {
  const [progress, setProgress] = useState(0);
  const [isInitialized, setInitialized] = useState(false);
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
        onLoaderFinished={() => setInitialized(true)}
      />
      {isInitialized && <Box>
        <NavigationBar/>
        <TopBar/>
        <Box className={classes.content}>
          <About/>
        </Box>
      </Box>}
    </Box>
  );
}
