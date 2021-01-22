import React from 'react';
import {Avatar, Box, Grid, makeStyles, Typography} from '@material-ui/core'
import {Page} from "../partials/Page";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    border: '4px solid ' + theme.palette.secondary.main,
    width: 350,
    height: 350,
  },
  spotlight: {
    color: theme.palette.secondary.main
  },
  textGrid: {
    display: 'flex',
    alignItems: 'center'
  },
  textContainer: {
    height: 'fit-content'
  }
}));

export default function About() {
  const classes = useStyles();
  const {t} = useTranslation();
  return (
    <Page id='about' title={t('about')}>
      <Grid container className={classes.container}>
        <Grid item md={12} lg={4} className={classes.avatarContainer}>
          <Avatar className={classes.avatar} src={process.env.PUBLIC_URL + '/img/photo.jpg'}/>
        </Grid>
        <Grid item md={12} lg={8} className={classes.textGrid}>
          <Box className={classes.textCotainer}>
            <Typography variant='body2' paragraph={true}>
              <span className={classes.spotlight}>{t('about_sl')}</span> {t('about_p_1')}
            </Typography>
            <Typography variant='body2'>{t('about_p_2')}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Page>
  );
}
