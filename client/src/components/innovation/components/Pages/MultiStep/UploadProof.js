import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Gcash from "../../images/gcash.png";
import Paypal from "../../images/paypal.png";
import FileBase64 from "react-file-base64";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  text_input: {
    display: "inline-block",
    width: "200px",
    marginTop: "30px",
  },
  in_input: {
    lineHeight: "2em",
    width: "22em",
    marginBottom: "16px",
    fontSize: "20px",
  },
  inputdiv: {
    display: "flex",
    justifyContent: "center",
  },
  form1: {
    width: 700,
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px",
  },
}));
export const UploadProof = ({ formData, setForm, navigation }) => {
  const { Amount, RecieptNumber, UploadProof, Remarks } = formData;
  const classes = useStyles();
  const [upload, setUpload] = useState("");

  return (
    <Container className={classes.form1}>
      <h3>Payment Method</h3>
      <h5>Amount Invested: {Amount}</h5>

      <div className={classes.inputdiv}>
        <Typography className={classes.text_input}>Reciept Number:</Typography>
        <TextField
          name="RecieptNumber"
          value={RecieptNumber}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          className={classes.in_input}
          type="number"
        />
      </div>
      <div className={classes.inputdiv}>
        <Typography className={classes.text_input}>Contact Number:</Typography>

        <FileBase64
          multiple={true}
          onDone={({ base64 }) =>
            setUpload({
              ...upload,
              image: base64,
            })
          }
        />
      </div>
      <div className={classes.inputdiv}>
        <Typography className={classes.text_input}>Remarks: </Typography>
        <TextField
          label="Remarks"
          name="Remarks"
          value={Remarks}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          className={classes.in_input}
        />
      </div>
    </Container>
  );
};
