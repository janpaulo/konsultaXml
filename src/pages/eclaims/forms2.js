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

// import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
// import InputBase from "@mui/material/InputBase";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";

// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";

import Divider from "@mui/material/Divider";

// import Paper from "@mui/material/Paper";

// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";

// import { styled } from "@mui/material/styles";
// import Stack from "@mui/material/Stack";

class forms2 extends React.Component {
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
            Health Care Institution(HCI) Information{" "}
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
                // label="Multiline"
                // multiline
                // maxRows={4}
                fullWidth
                name="pMemberPIN"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={6}>
              {" "}
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Name of health Care Institution</InputLabel>{" "}
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-flexible"
                // label="Last Name"
                // multiline
                // maxRows={4}
                fullWidth
                name="pMemberLastName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Address</InputLabel>{" "}
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-flexible"
                // label="First Name"
                // multiline
                // maxRows={4}
                fullWidth
                name="pMemberFirstName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
          </Grid>
          <br />
          <Divider>
            {" "}
            <Typography variant="h5" component="h5">
              {" "}
              Patient Confinement Information{" "}
            </Typography>
          </Divider>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              {/* <FormControl variant="standard">
                <InputLabel shrink htmlFor="bootstrap-input">
                  Bootstrap
                </InputLabel>
                <BootstrapInput 
                  fullWidth
                  defaultValue="react-bootstrap"
                  id="bootstrap-input"
                  onChange={this.props.onchange}
                />
              </FormControl> */}
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
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="outlined-multiline-flexible"
                label="Middle Name"
                // multiline
                // maxRows={4}
                fullWidth
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography>
                Was patien referred by another Health Care Institution (HCI)
              </Typography>
              <Typography>
                No?
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                Yes
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Confinement Period :</Typography>
              <br />
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Date Admited"
                    // multiline
                    // maxRows={4}
                    fullWidth
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    name="pMemberMiddleName"
                    size="small"
                    onChange={this.props.onchange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Time Admited"
                    // multiline
                    // maxRows={4}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="time"
                    name="pMemberMiddleName"
                    size="small"
                    onChange={this.props.onchange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography>
                    <Switch
                      name=""
                      // checked={value === 1}
                      // onChange={handleChecked}
                      inputProps={{ "aria-label": "switch" }}
                    />
                    Admission time is not indicated
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Date Discharge"
                    // multiline
                    // maxRows={4}
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    type="date"
                    name="pMemberMiddleName"
                    size="small"
                    onChange={this.props.onchange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Time Discharged"
                    // multiline
                    // maxRows={4}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="time"
                    name="pMemberMiddleName"
                    size="small"
                    onChange={this.props.onchange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography>
                    <Switch
                      name=""
                      // checked={value === 1}
                      // onChange={handleChecked}
                      inputProps={{ "aria-label": "switch" }}
                    />
                    Discharge time is not indicated
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography>Patient Disposition :</Typography>
              <br />
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  {" "}
                  <Typography>
                    <Switch
                      name=""
                      // checked={value === 1}
                      // onChange={handleChecked}
                      inputProps={{ "aria-label": "switch" }}
                    />
                    Improved
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                <Typography>
                    <Switch
                      name=""
                      // checked={value === 1}
                      // onChange={handleChecked}
                      inputProps={{ "aria-label": "switch" }}
                    />
                    Expired
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Date"
                    // multiline
                    // maxRows={4}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="date"
                    name="pMemberMiddleName"
                    size="small"
                    onChange={this.props.onchange}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Time"
                    // multiline
                    // maxRows={4}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="time"
                    name="pMemberMiddleName"
                    size="small"
                    onChange={this.props.onchange}
                  />
                </Grid>

                <Grid item xs={3}>
                  {" "}
                  <Typography>
                    <Switch
                      name=""
                      size="small"
                      // checked={value === 1}
                      // onChange={handleChecked}
                      inputProps={{ "aria-label": "switch" }}
                    />
                    Expired time is not indicated
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Typography>
                    <Switch
                      name=""
                      // checked={value === 1}
                      // onChange={handleChecked}
                      inputProps={{ "aria-label": "switch" }}
                    />
                    Recovered
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={6}>
                  {" "}
                  <Typography>
                    <Switch
                      name=""
                      // checked={value === 1}
                      // onChange={handleChecked}
                      inputProps={{ "aria-label": "switch" }}
                    />
                    Home/Discharged Againts Medical Advise
                  </Typography>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={3}>
                  {" "}
                  <Typography>
                    <Switch
                      name=""
                      // checked={value === 1}
                      // onChange={handleChecked}
                      inputProps={{ "aria-label": "switch" }}
                    />
                    Abscorded
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                {" "}
                  <Typography>
                    <Switch
                      name=""
                      // checked={value === 1}
                      // onChange={handleChecked}
                      inputProps={{ "aria-label": "switch" }}
                    />
                    Transferred/Refrred
                  </Typography>
                </Grid>
                <Grid item xs={4}></Grid>
              </Grid>
            </Grid>
          </Grid>

          <br />

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

export default forms2;
