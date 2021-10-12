import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, Grid, Step, StepLabel, Stepper, Typography } from '@material-ui/core';

import React, { useState } from 'react';
import * as yup from 'yup'
import './InnovationThree.css'
import Gcash from '../../images/gcash.png'
import Paypal from '../../images/paypal.png'
import { MultiStepForm } from './MultiStep/Multistepform';
import { useLocation } from "react-router"

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh"
    },
    stepper:{
        margin: "auto",
    },
    form1: {
        width: 700,
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        margin: "30px",
    },
    form2: {

    },
    typo: {
        marginBottom: "30px",
        fontSize: "17px"
    },
    text_input: {
        display: "inline-block",
        width: "200px",
    },
    in_input: {
        lineHeight: "2em",
        width: "22em",
        marginBottom: "16px",
        fontSize: "20px"
    },
    inButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));

export default function InnovationThree() {

  const location = useLocation()
  const innovation = location.state.innovation


    const classes = useStyles();
    return (
        <div className = {classes.root}>
            <Grid container>
                <Grid item xs={5}>
                    <div className = "in3_1">
                        <h2>INVEST</h2>
                        <img src={innovation.innovation_pictures}/>
                        <h3>{innovation.innovation_title}</h3>
                        <p>Innovator/s: #{innovation.innovator_id}</p>
                        <p>{innovation.innovation_description}</p>
                        <span>Status: {innovation.innovation_status}</span>
                    </div>
                </Grid>
                
                <Grid item xs={7} >
                    <Card>
                        <CardContent>
                           <MultiStepForm/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}