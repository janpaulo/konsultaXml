import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";

import Divider from "@mui/material/Divider";


class professional extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  render() {
    return (
      <>
        <Divider>
          {" "}
          <Typography variant="h5" component="h5">
            {" "}
            PROFESSIONAL FEES{" "}
          </Typography>
        </Divider>
        <Box id="fullWidth">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputLabel>
                <b>Professional Info</b>
              </InputLabel>{" "}
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="PAN NO."
                // multiline
                // maxRows={4}
                fullWidth
                name="pPAN"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-multiline-flexible"
                label="First Name"
                // multiline
                // maxRows={4}
                fullWidth
                name="pFirstName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-multiline-flexible"
                label="Middle Name"
                // multiline
                // maxRows={4}
                fullWidth
                name="pMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="Last Name"
                // multiline
                // maxRows={4}
                fullWidth
                name="pLastName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="Suffix Name"
                // multiline
                // maxRows={4}
                fullWidth
                name="pSuffixName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel>
                <b>Summary of Fees</b>
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

          <br />
          
        </Box>
      </>
    );
  }
}

export default professional;
