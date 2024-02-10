import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import Divider from "@mui/material/Divider";

import Professional from "./professional";
import ItemizzedBill from "./itemizzedBill";
import Itembills from "./Itembills";

class forms extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  render() {
    const {roomAndBoard} = this.props
    const {OtherFundSource} = this.props
    const {drugsAndMedicine} = this.props
    console.log(drugsAndMedicine)
    return (
      <>
        <Divider>
          {" "}
          <Typography variant="h5" component="h5">
            {" "}
            SUMMARY OF FEES{" "}
          </Typography>
        </Divider>
        <Box id="fullWidth">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <InputLabel>
                Philhealth Accreditation No. (PAN) of health Care Institution :
              </InputLabel>
              <TextField
                id="outlined-multiline-flexible"
                fullWidth
                name="pHciPan"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={4}>
              {" "}
            </Grid>
            <Grid item xs={12}>
              <InputLabel>
                <b>Room And Board</b>
              </InputLabel>{" "}
            </Grid>

            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="Senior Citizen Discount"
                // multiline
                // maxRows={4}
                fullWidth
                name="pSeniorCitizenDiscount"
                size="small"
                value={roomAndBoard.pSeniorCitizenDiscount}
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="PWD Discount"
                value={roomAndBoard.pPWDDiscount}
                fullWidth
                name="pPWDDiscount"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="PCSO"
                value={roomAndBoard.pPCSO}
                fullWidth
                name="pPCSO"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="DSWD"
                value={roomAndBoard.pDSWD}
                fullWidth
                name="pDSWD"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                id="outlined-multiline-flexible"
                label="DOH MAP"
                value={roomAndBoard.pDOHMAP}
                fullWidth
                name="pDOHMAP"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                id="outlined-multiline-flexible"
                label="HMO"
                value={roomAndBoard.pHMO}
                fullWidth
                name="pHMO"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="Actual Charges"
                value={roomAndBoard.pActualCharges}
                fullWidth
                name="pActualCharges"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>
                <b>Other Fundation Source</b>
              </InputLabel>{" "}
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="Description"
                value={OtherFundSource.pPWDDiscount}
                fullWidth
                name="pDescription"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="Amount"
                value={OtherFundSource.pPWDDiscount}
                fullWidth
                name="pAmount"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={4}></Grid>

            <Grid item xs={12}>
              <InputLabel>
                <b>Drugs And Medicine</b>
              </InputLabel>{" "}
            </Grid>

            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="Senior Citizen Discount"
                value={drugsAndMedicine.pSeniorCitizenDiscount}
                fullWidth
                name="pSeniorCitizenDiscount"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="PWD Discount"
                value={drugsAndMedicine.pPWDDiscount}
                fullWidth
                name="pPWDDiscount"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="PCSO"
                value={drugsAndMedicine.pPCSO}
                fullWidth
                name="pPCSO"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="DSWD"
                value={drugsAndMedicine.pDSWD}
                fullWidth
                name="pDSWD"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                id="outlined-multiline-flexible"
                label="DOH MAP"
                value={drugsAndMedicine.pDOHMAP}
                fullWidth
                name="pDOHMAP"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                id="outlined-multiline-flexible"
                label="HMO"
                value={drugsAndMedicine.pHMO}
                fullWidth
                name="pHMO"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="Actual Charges"
                value={drugsAndMedicine.pActualCharges}
                fullWidth
                name="pActualCharges"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel>
                <b>Laboratory And Diagnostic</b>
              </InputLabel>{" "}
            </Grid>

            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="Senior Citizen Discount"
                // multiline
                // maxRows={4}
                fullWidth
                name="pSeniorCitizenDiscount"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="PWD Discount"
                // multiline
                // maxRows={4}
                fullWidth
                name="pPWDDiscount"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="PCSO"
                // multiline
                // maxRows={4}
                fullWidth
                name="pPCSO"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="DSWD"
                // multiline
                // maxRows={4}
                fullWidth
                name="pDSWD"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                id="outlined-multiline-flexible"
                label="DOH MAP"
                // multiline
                // maxRows={4}
                fullWidth
                name="pDOHMAP"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                id="outlined-multiline-flexible"
                label="HMO"
                // multiline
                // maxRows={4}
                fullWidth
                name="pHMO"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="Actual Charges"
                // multiline
                // maxRows={4}
                fullWidth
                name="pActualCharges"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel>
                <b>Operating Room Fees</b>
              </InputLabel>{" "}
            </Grid>

            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="Senior Citizen Discount"
                // multiline
                // maxRows={4}
                fullWidth
                name="pSeniorCitizenDiscount"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="PWD Discount"
                // multiline
                // maxRows={4}
                fullWidth
                name="pPWDDiscount"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="PCSO"
                // multiline
                // maxRows={4}
                fullWidth
                name="pPCSO"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="DSWD"
                // multiline
                // maxRows={4}
                fullWidth
                name="pDSWD"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                id="outlined-multiline-flexible"
                label="DOH MAP"
                // multiline
                // maxRows={4}
                fullWidth
                name="pDOHMAP"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                id="outlined-multiline-flexible"
                label="HMO"
                // multiline
                // maxRows={4}
                fullWidth
                name="pHMO"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="Actual Charges"
                // multiline
                // maxRows={4}
                fullWidth
                name="pActualCharges"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel>
                <b>Medical Supplies</b>
              </InputLabel>{" "}
            </Grid>

            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="Senior Citizen Discount"
                // multiline
                // maxRows={4}
                fullWidth
                name="pSeniorCitizenDiscount"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="PWD Discount"
                // multiline
                // maxRows={4}
                fullWidth
                name="pPWDDiscount"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="PCSO"
                // multiline
                // maxRows={4}
                fullWidth
                name="pPCSO"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="DSWD"
                // multiline
                // maxRows={4}
                fullWidth
                name="pDSWD"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                id="outlined-multiline-flexible"
                label="DOH MAP"
                // multiline
                // maxRows={4}
                fullWidth
                name="pDOHMAP"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                id="outlined-multiline-flexible"
                label="HMO"
                // multiline
                // maxRows={4}
                fullWidth
                name="pHMO"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="Actual Charges"
                // multiline
                // maxRows={4}
                fullWidth
                name="pActualCharges"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <InputLabel>
                <b>PHILHEALTH</b>
              </InputLabel>{" "}
            </Grid>

            <Grid item xs={6}></Grid>
            <Grid item xs={4}>
              <TextField
                id="outlined-multiline-flexible"
                label="Total Case Rate Amount"
                // multiline
                // maxRows={4}
                fullWidth
                name="pTotalCaseRateAmount"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <InputLabel>
                <b>BALANCE</b>
              </InputLabel>{" "}
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={4}>
              <TextField
                id="outlined-multiline-flexible"
                label="Amount"
                // multiline
                // maxRows={4}
                fullWidth
                name="pAmount"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
          </Grid>

          <Professional />
          <ItemizzedBill />
          <Itembills itembills={this.props.itembills} dataItem={this.props.dataItem}   onDataChange={this.props.handleDataChange}  />

          <br />
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-end"
          >
            <Button
              variant="contained"
              color="success"
              endIcon={<SendIcon />}
              fullWidth
              onClick={() => this.props.handleClick()}
            >
              Submit
            </Button>
          </Grid>
        </Box>
      </>
    );
  }
}

export default forms;
