import React, {} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box, Grid, Typography} from "@material-ui/core";
import {info} from '../../hooks/DataHook';
import moment from 'moment'
import {useTranslation} from "react-i18next";
import {startsWith} from "lodash";

const useStyle = makeStyles((theme) => ({
  root: {

  },
  timeline: {
    height: '100%',
  },
  dateContainer: {
    borderRightStyle: 'solid',
    borderRightWidth: 2,
    borderRightColor: theme.palette.primary.light,
    paddingTop: 30,
    paddingRight: 35,
    position: 'relative',
    '&::after': {
      content: "''",
      position: 'absolute',
      width: 12,
      height: 12,
      right: -7,
      backgroundColor: theme.palette.secondary.main,
      top: 40,
      borderRadius: '50%',
      zIndex: 1,
    }
  },
  textContainer: {
    paddingLeft: 50,
    paddingTop: 25,
    paddingBottom: 30,
  }
}));

export default function Timeline() {
  const classes = useStyle();
  const {i18n, t} = useTranslation();
  return <Box className={classes.root}>
    {info.experience.map((exp, key) => {
      const start = moment({year: exp.start_year, month: exp.start_month});
      const end = moment({year: exp.end_year, month: exp.end_month});
      return <Grid key={key} container className={classes.timeline}>
        <Grid item xs={2} className={classes.dateContainer}>
          <Typography variant='h6' color='secondary'>
            {start.format('MM/yyyy')}
            &nbsp;-&nbsp;
            {exp.end_year ? end.format('MM/yyyy') : t('actual')}
          </Typography>
        </Grid>
        <Grid item xs={10} className={classes.textContainer}>
          <Typography variant='h4' color='secondary'>
            {startsWith(i18n.language, 'en') ? exp.en_role : exp.pt_role} - {exp.company}
          </Typography>
          <Typography>
            {startsWith(i18n.language, 'en') ? exp.en_description : exp.pt_description }
          </Typography>
        </Grid>
      </Grid>
    })}
  </Box>;
}
