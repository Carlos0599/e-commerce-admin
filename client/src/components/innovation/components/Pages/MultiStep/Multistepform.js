import React, { useState } from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Confirmation } from "./Confirmation";
import { PaymentMethod } from "./PaymentMethod";
import { PersonalInfo } from "./PersonalInfo";
import { UploadProof } from "./UploadProof";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
const defaultData = {
  Name: "",
  ContactNumber: "",
  EmailAddress: "",
  Amount: "",
  ModeOfPayment: "",
  RecieptNumber: "",
  UploadProof: "",
  Remarks: "",
};

const steps = [
  { id: "PersonalInformation", idnum: 1 },
  { id: "PaymentMethod", idnum: 2 },
  { id: "UploadProof", idnum: 3 },
  { id: "Confirmation", idnum: 4 },
  //{ id: "submit" },
];

export const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);

  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };
  function getSteps() {
    return [
      "Personal Information",
      "Payment Method",
      "Upload Proof of Payment",
      "Confirmation",
    ];
  }
  const inStep = getSteps();
  function getStepsContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <PersonalInfo {...props} />;
      case 1:
        return <PaymentMethod {...props} />;
      case 2:
        return <UploadProof {...props} />;
      case 3:
        return <Confirmation {...props} />;
      /* case "submit":
               return <Submit {...props} />;*/
    }
  }
  const [activeStep, setActiveStep] = useState(0);
  const nextStep = () => {
    setActiveStep((currentStep) => currentStep + 1);
  };
  const previousStep = () => {
    setActiveStep((currentStep) => currentStep - 1);
  };
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {inStep.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        "Finished"
      ) : (
        <>
          {getStepsContent(activeStep)}
          <Button disabled={activeStep === 0} onClick={() => previousStep()}>
            back
          </Button>
          <Button onClick={() => nextStep()}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </>
      )}
    </div>
  );
};
