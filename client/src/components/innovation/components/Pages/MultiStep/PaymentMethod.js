import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import Gcash from "../../images/gcash.png";
import Paypal from "../../images/paypal.png";
import { makeStyles } from "@material-ui/core/styles";
import "./Multistep.css";
import { FormControlLabel, Radio } from "@material-ui/core";
export const PaymentMethod = ({ formData, setForm, navigation }) => {
  const { ModeOfPayment } = formData;
  return (
    <Container>
      <h3>Payment Method</h3>
      <h3>{ModeOfPayment}</h3>
      <div className="inButton">
        <RadioGroup
          name="ModeOfPayment"
          value={ModeOfPayment}
          onChange={setForm}
          row
          className="radio"
        >
          <FormControlLabel
            labelPlacement="bottom"
            className="in_Button"
            value="Gcash"
            control={<Radio color="blue" />}
            label={
              <span class="radio-btn">
                <i class="las la-check"></i>
                <div class="hobbies-icon">
                  <img src={Gcash} />
                  <h3>G Cash</h3>
                </div>
              </span>
            }
          />
          <FormControlLabel
            labelPlacement="bottom"
            className="in_Button"
            value="Paypal"
            control={<Radio />}
            label={
              <span class="radio-btn">
                <i class="las la-check"></i>
                <div class="hobbies-icon">
                  <img src={Paypal} />
                  <h3>Paypal</h3>
                </div>
              </span>
            }
          />
        </RadioGroup>
      </div>
      <div className="in_intructions">
        <h3>Kindly refer to the following account information and process</h3>
        <p>1. Add an Account Name and Account Number</p>
        <p>Account Name: Gonzales M.</p>
        <p>Account Number: 09XX-XXX-XXXX</p>
        <p>2. Add an amount and a number for "Send to".</p>
        <p>Send: 09XX-XXX-XXXX</p>
        <p>Amount: 'Amount of your Investment'</p>
        <p>
          3. Kindly double check if the Account name is matched on our given
          information before proceeding
        </p>
        <p>
          4. Once you've sent your investment, screenshot the receipt or the{" "}
          <br />
          text message that indicates your transaction and upload it as <br />
          your proof of payment
        </p>
      </div>
    </Container>
  );
};
