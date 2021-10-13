import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    button: {

    },
    stepper: {
        margin: "auto",
    },
    form1: {
        width: 700,
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        margin: "30px",
    },
    text_input: {
        display: "inline-block",
        width: "200px",
        marginTop: "30px"
    },
    in_input: {
        lineHeight: "2em",
        width: "22em",
        marginBottom: "16px",
        fontSize: "20px"
        
    },
    inputdiv:{
        display: "flex",
        justifyContent: "center",
    },
}));
export const PersonalInfo = ({ formData, setForm, navigation }) => {
    const classes = useStyles();
    const { Name, ContactNumber, EmailAddress, Amount } = formData;
    return (
        <Container className={classes.form1}>
            <div className = {classes.inputdiv}>
                <Typography className={classes.text_input}>Name:</Typography>
                <TextField
                    label="Name"
                    name="Name"
                    value={Name}
                    onChange={setForm}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    className={classes.in_input}
                />

            </div>
            <div className = {classes.inputdiv}>
                <Typography className={classes.text_input}>Contact Number:</Typography>
                <TextField
                    label="Contact Number" name="ContactNumber" value={ContactNumber} onChange={setForm}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    className={classes.in_input}
                />
            </div>
            <div className = {classes.inputdiv}>
                <Typography className={classes.text_input}>Email Address: </Typography>
                <TextField
                    label="Email Address" name="EmailAddress" value={EmailAddress}
                    onChange={setForm}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    className={classes.in_input}
                />
            </div>
            <div className = {classes.inputdiv}>
            <Typography className={classes.text_input}>Amount: </Typography>
            <TextField
                    id="amount" label="Amount" name="Amount" type="number" value={Amount}
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