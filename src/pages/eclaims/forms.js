import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
// import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";

import Divider from "@mui/material/Divider";

// import Paper from "@mui/material/Paper";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

// import { styled } from "@mui/material/styles";
// import Stack from "@mui/material/Stack";

class forms extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  render() {
    console.log(this.props.itemCf)
    return (
      <>
        <Divider>
          {" "}
          <Typography variant="h5" component="h5">
            {" "}
            Personal Information{" "}
          </Typography>
        </Divider>
        <Box id="fullWidth">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <InputLabel>
                Philhealth Identification No. (PIN) Member :
              </InputLabel>
              <TextField
                id="outlined-multiline-flexible"
                // label="Multiline"
                // multiline
                // maxRows={4}
                value={this.props.itemCf.pMemberPIN}
                fullWidth
                name="pMemberPIN"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={4}>
              {" "}
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Name of Member</InputLabel>{" "}
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-multiline-flexible"
                label="Last Name"
                // multiline
                // maxRows={4}
                fullWidth
                value={this.props.itemCf.pMemberLastName}
                name="pMemberLastName"
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
                name="pMemberFirstName"
                value={this.props.itemCf.pMemberFirstName}
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="Extension Name"
                // multiline
                // maxRows={4}
                fullWidth
                size="small"
                name="pMemberSuffix"
                value={this.props.itemCf.pMemberSuffix}
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="Middle Name"
                // multiline
                // maxRows={4}
                fullWidth
                name="pMemberMiddleName"
                value={this.props.itemCf.pMemberMiddleName}
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="Date of Birth"
                // multiline
                // maxRows={4}
                type="date"
                InputLabelProps={{ shrink: true, required: true }}
                fullWidth
                value={this.props.itemCf.pMemberBirthDate}
                name="pMemberBirthDate"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Member Category</InputLabel>
              <TextField
                id="outlined-multiline-flexible"
                // label="Middle Name"
                // multiline
                // maxRows={4}
                fullWidth
                name="pMemberShipType"
                value={this.props.itemCf.pMemberShipType}
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="outlined-multiline-flexible"
                label="Mailing Address"
                // multiline
                // maxRows={4}
                fullWidth
                name="pMailingAddress"
                value={this.props.itemCf.pMailingAddress}
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>{" "}
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="Zip Code"
                // multiline
                // maxRows={4}
                fullWidth
                name="pZipCode"
                value={this.props.itemCf.pZipCode}
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>{" "}
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Gender"
                  size="small"
                  value={this.props.itemCf.pMemberSex}
                  name="pMemberSex"
                  onChange={this.props.onchange}
                  // onChange={handleChange}
                >
                  <MenuItem value={1}>Male</MenuItem>
                  <MenuItem value={2}>Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Contact Information</InputLabel>{" "}
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-multiline-flexible"
                label="Landline No."
                // multiline
                // maxRows={4}
                fullWidth
                name="pLandlineNo"
                value={this.props.itemCf.pLandlineNo}
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-multiline-flexible"
                label="Mobile No."
                // multiline
                // maxRows={4}
                fullWidth
                name="pMobileNo"
                value={this.props.itemCf.pMobileNo}
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="Email Address"
                // multiline
                // maxRows={4}
                fullWidth
                name="pEmailAddress"
                value={this.props.itemCf.pEmailAddress}
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
          </Grid>

          {/* <Divider>
            {" "}
            <Typography variant="h5" component="h5">
              {" "}
              Patient Information{" "}
            </Typography>
          </Divider>

          <Grid item xs={12}>
            <InputLabel>
              .....................................................................
            </InputLabel>{" "}
          </Grid> */}
          <br />
          <Divider>
            {" "}
            <Typography variant="h6" component="h6">
              {" "}
              Member Certification{" "}
            </Typography>
          </Divider>

          <br />
          {/* Member Certification Form */}
          <Grid container spacing={2}>
            <Grid item xs={3}>
              - With signature of member?{" "}
            </Grid>
            <Grid item xs={3}>
              <FormGroup>
                {/* <FormControlLabel label="YES" labelPlacement="start"/> */}
                <FormControlLabel
                  control={<Switch/>}
                  label="YES ?"
                />
                {/* <FormControlLabel label="NO" labelPlacement="end"/> */}
              </FormGroup>
            </Grid>

            <Grid item xs={3}>
              Date Signed
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-multiline-flexible"
                label=""
                // multiline
                // maxRows={4}
                type="date"
                fullWidth
                value={this.props.itemCf.pEmailAddress}
                name="pEmailAddress"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={3}>
              - With signature of member's representative?{" "}
            </Grid>
            <Grid item xs={3}>
              <FormGroup>
                {/* <FormControlLabel label="YES" labelPlacement="start"/> */}
                <FormControlLabel
                  control={<Switch/>}
                  label="YES ?"
                />
                {/* <FormControlLabel label="NO" labelPlacement="end"/> */}
              </FormGroup>
            </Grid>

            <Grid item xs={3}>
              Date Signed
            </Grid>

            <Grid item xs={3}>
              <TextField
                id="outlined-multiline-flexible"
                label=""
                // multiline
                // maxRows={4}
                fullWidth
                type="date"
                value={this.props.itemCf.pEmailAddress}
                name="pEmailAddress"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={3}>
              - Relationship of the Representative of the Member?{" "}
            </Grid>
            <Grid item xs={3}>
              <FormGroup>
                {/* <FormControlLabel label="YES" labelPlacement="start"/> */}
                <FormControlLabel
                  control={<Switch/>}
                  label="YES ?"
                />
                {/* <FormControlLabel label="NO" labelPlacement="end"/> */}
              </FormGroup>
            </Grid>

            <Grid item xs={3}>
              Date Signed
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-multiline-flexible"
                label=""
                // multiline
                // maxRows={4}
                fullWidth
                type="date"
                name="pEmailAddress"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={3}>
              - Reason for Signing on Behalf of the member{" "}
            </Grid>
            <Grid item xs={3}>
              <FormGroup>
                {/* <FormControlLabel label="YES" labelPlacement="start"/> */}
                <FormControlLabel
                  control={<Switch/>}
                  label="Member is Incapacitated"
                />
                {/* <FormControlLabel label="NO" labelPlacement="end"/> */}
              </FormGroup>
            </Grid>

            <Grid item xs={3}>
              Other Reason
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-multiline-flexible"
                label=""
                // multiline
                // maxRows={4}
                fullWidth
                name="pEmailAddress"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={3}>
              - With thumbmark of the Member/representative?{" "}
            </Grid>
            <Grid item xs={6}>
              <FormGroup>
                {/* <FormControlLabel label="YES" labelPlacement="start"/> */}
                <FormControlLabel
                  control={<Switch/>}
                  label="YES ?"
                />
                {/* <FormControlLabel label="NO" labelPlacement="end"/> */}
              </FormGroup>
            </Grid>
          </Grid>

          <Divider>
            {" "}
            <Typography variant="h6" component="h6">
              {" "}
              Health care institution, Confinement and other Information{" "}
            </Typography>
          </Divider>

          <Grid container spacing={2}>
            <Grid item xs={7}>
              <InputLabel>
                Philhealth Identification No. (PIN) Member :
              </InputLabel>
              <TextField
                id="outlined-multiline-flexible"
                // label="Multiline"
                // multiline
                // maxRows={4}
                fullWidth
                name="pMemberPIN"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={4}>
              {" "}
            </Grid>
            <Grid item xs={8}>
              <InputLabel>FullName :</InputLabel>
              <TextField
                id="outlined-multiline-flexible"
                // label="Multiline"
                // multiline
                // maxRows={4}
                fullWidth
                name="pMemberPIN"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={4}>
              {" "}
            </Grid>

            <Grid item xs={12}>
              <InputLabel>Address :</InputLabel>
              <TextField
                id="outlined-multiline-flexible"
                // label="Multiline"
                // multiline
                // maxRows={4}
                fullWidth
                name="pMemberPIN"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={4}>
              <InputLabel>Category :</InputLabel>
              <TextField
                id="outlined-multiline-flexible"
                // label="Multiline"
                // multiline
                // maxRows={4}
                fullWidth
                name="pMemberPIN"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={4}>
              <InputLabel>Classification :</InputLabel>
              <TextField
                id="outlined-multiline-flexible"
                // label="Multiline"
                // multiline
                // maxRows={4}
                fullWidth
                name="pMemberPIN"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={4}>
              <InputLabel>Accreditation Period :</InputLabel>
              <TextField
                id="outlined-multiline-flexible"
                // label="Multiline"
                // multiline
                // maxRows={4}
                fullWidth
                name="pMemberPIN"
                type="date"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
          </Grid>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <InputLabel>Admission Date :</InputLabel>
                      <TextField
                        id="outlined-multiline-flexible"
                        // label="Multiline"
                        // multiline
                        // maxRows={4}
                        fullWidth
                        name="pMemberPIN"
                        type="date"
                        size="small"
                        onChange={this.props.onchange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <InputLabel>Discharge Date :</InputLabel>
                      <TextField
                        id="outlined-multiline-flexible"
                        // label="Multiline"
                        // multiline
                        // maxRows={4}
                        fullWidth
                        name="pMemberPIN"
                        type="date"
                        size="small"
                        onChange={this.props.onchange}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <InputLabel>Recieve Date :</InputLabel>
                      <TextField
                        id="outlined-multiline-flexible"
                        // label="Multiline"
                        // multiline
                        // maxRows={4}
                        fullWidth
                        name="pMemberPIN"
                        type="date"
                        size="small"
                        onChange={this.props.onchange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Typography>
                            Refiled?
                            <Switch
                              name=""
                              // checked={value === 1}
                              // onChange={handleChecked}
                              inputProps={{ "aria-label": "switch" }}
                            />
                            Yes
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            id="outlined-multiline-flexible"
                            // label="Multiline"
                            // multiline
                            // maxRows={4}
                            fullWidth
                            name="pMemberPIN"
                            size="small"
                            onChange={this.props.onchange}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <br />
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Typography>Remarks </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <FormControlLabel
                            control={<Checkbox/>}
                            label="Direct Filed"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox/>}
                          label="Refer to Membership"
                        />
                        <FormControlLabel
                          control={<Checkbox/>}
                          label="Refer to legal"
                        />
                        <FormControlLabel
                          control={<Checkbox/>}
                          label="Refer Accreditation"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={4}>
                    <FormGroup>
                        <FormControlLabel
                          control={<Checkbox/>}
                          label="Pending Due to Policy Issues "
                        />
                        <FormControlLabel
                          control={<Checkbox/>}
                          label="Pending Due to System issues"
                        />
                        <FormControlLabel
                          control={<Checkbox/>}
                          label="Refer to collection"
                        />
                      </FormGroup>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">Learn More</Button> */}
                </CardActions>
              </Card>
            </Grid>
          </Grid>
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
