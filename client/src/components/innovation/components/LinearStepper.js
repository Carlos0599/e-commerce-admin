import React, { useState } from "react";
import { Typography, TextField, Button, Stepper, Step, StepLabel, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller, FormProvider, useFormContext, } from "react-hook-form";
import Gcash from '../images/gcash.png'
import Paypal from '../images/paypal.png'
import './LinearStepper.css'



const LinearStepper = () => {
  const [amount, setAmount] = useState(0)
  const useStyles = makeStyles((theme) => ({
    button: {
  
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
    inButton:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
  
  }));
  function getSteps() {
    return [
      "Basic information",
      "Contact Information",
      "Personal Information",
      "Upload Proof of Payment",
    ];
  }
  function handleChange(e) {
    setAmount(e.target.value);
    console.log(e.target.value)
  }
  const BasicForm = () => {
    const { control } = useFormContext();
    const classes = useStyles();
    return (
      <>
        <form className={classes.form1}>
          <div>
            <Typography className={classes.text_input}>Name: </Typography>
            <Controller
              className={classes.formControl}
              control={control}
              name="in_name"
              render={({ field }) => (
                <input className={classes.in_input} id="name" placeholder="Enter Name" {...field} />
              )}
            />
          </div>
          <div>
            <Typography className={classes.text_input}>Contact Number: </Typography>
            <Controller
              className={classes.formControl}
              control={control}
              name="in_contactNumber"
              render={({ field }) => (
                <input className={classes.in_input} id="contactNumber" placeholder="Enter Contact Number" {...field} />
              )}
            />
          </div>
          <div>
            <Typography className={classes.text_input}>Email: </Typography>
            <Controller
              className={classes.formControl}
              control={control}
              name="in_email"
              render={({ field }) => (
                <input className={classes.in_input} id="email" placeholder="Enter Email" {...field} />
              )}
            />
          </div>
          <div>
            <Typography className={classes.text_input}>Amount: </Typography>
            <Controller
              className={classes.formControl}
              control={control}
              name="in_amount"
              render={({ field }) => (
                <input className={classes.in_input} id="amount" placeholder="Enter Amount" {...field} 
                  onChange={handleChange} />
              )}
            />
          </div>
        </form>
      </>
    );
  };
  const ContactForm = () => {
    const { control } = useFormContext();
    const classes = useStyles();
    return (
      <>
        <div>
          <div className ={classes.inButton}>
            <label class="custom-radio">
              <input type="radio" name="radio" checked />
              <span class="radio-btn"
              ><i class="las la-check"></i>
                <div class="hobbies-icon">
                  <img src={Gcash} />
                  <h3>G Cash</h3>
                </div>
              </span>
            </label>
            <label class="custom-radio">
              <input type="radio" name="radio" />
              <span class="radio-btn"
              ><i class="las la-check"></i>
                <div class="hobbies-icon">
                  <img src={Paypal} />
                  <h3>Paypal</h3>
                </div>
              </span>
            </label>
          </div>
          <div className ="in_intructions">
            <h3>Kindly refer to the following account information and process</h3>
            <p>1. Add an Account Name and Account Number</p>
            <p>Account Name: Gonzales M.</p>
            <p>Account Number: 09XX-XXX-XXXX</p>
            <p>2. Add an amount and a number for "Send to".</p>
            <p>Send: 09XX-XXX-XXXX</p>
            <p>Amount: 'Amount of your Investment'</p>
            <p>3. Kindly double check if the Account name is matched on our given
            information before proceeding</p>
            <p>4. Once you've sent your investment, screenshot the receipt or the <br/>
            text message that indicates your transaction and upload it as <br/>
            your proof of payment</p>
          </div>
        </div>
      </>
    );
  };
  const PersonalForm = () => {
    const { control } = useFormContext();
    return (
      <>
        3
      </>
    );
  };
  const PaymentForm = () => {
    const { control } = useFormContext();
    return (
      <>
        <div>
          <div className = "in_invested">
            <h3>Amount Invested: </h3>
          </div>
        </div>
      </>
    );
  };
function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;
    case 1:
      return <ContactForm />;
    case 2:
      return <PersonalForm />;
    case 3:
      return <PaymentForm />;
    default:
      return "unknown step";
  }
}
  const classes = useStyles();
  
  const methods = useForm({
    defaultValues: {
      in_name: "",
      in_contactNumber: "",
      in_email: "",
      in_amount:"",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};

          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)} className={classes.form2}>
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinearStepper;