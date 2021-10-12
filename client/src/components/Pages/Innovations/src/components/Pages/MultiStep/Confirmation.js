import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Gcash from '../../../images/gcash.png'
import Paypal from '../../../images/paypal.png'
export const Confirmation = ({ formData, setForm, navigation }) => {
  const { Name, ContactNumber,EmailAddress,Amount,ModeOfPayment,RecieptNumber,UploadProof,Remarks, } = formData;
  return (
    <Container maxWidth="xs">
      <h3>Confirmation</h3>
      <h5>{Name}</h5>
      <h5>{ContactNumber}</h5>
      <h5>{EmailAddress}</h5>
      <h5>{Amount}</h5>
      <h5>{ModeOfPayment}</h5>
      <h5>{RecieptNumber}</h5>
      <h5>{UploadProof}</h5>
      <h5>{Remarks}</h5>
    </Container>
  );
};