import React from 'react';
import {makeStyles} from "@material-ui/core";
import 'react-vertical-timeline-component/style.min.css';
import {Page} from "../partials/Page";
import {useTranslation} from "react-i18next";
import Timeline from "../partials/Timeline";

const useStyles = makeStyles((theme) => ({}));

export default function Career() {
  const classes = useStyles();
  const {t} = useTranslation();
  return (
    <Page id='career' title={t('career')}>
      <Timeline/>
    </Page>
  );
}
