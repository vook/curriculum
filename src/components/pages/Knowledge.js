import React from 'react';
import {makeStyles} from '@material-ui/core'
import {useTranslation} from "react-i18next";
import {Page} from "../partials/Page";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      minHeight: 'calc(100vh - 50px)',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: 'calc(100vh - 122px)',
    },
    marginBottom: 75,
  },
}));

export default function Knowledge() {
  const classes = useStyles();
  const {t} = useTranslation();
  return (
    <Page id='knowledge' title={t('knowledge')}>

    </Page>
  );
}
