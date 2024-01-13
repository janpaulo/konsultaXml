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
// import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
// import InputBase from "@mui/material/InputBase";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";

import Divider from "@mui/material/Divider";

// import Paper from "@mui/material/Paper";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Forms2Table from "./forms2Table";
import ProfessionalTables from "./professionalTables";
import Certification from "./certification";

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
                <b>
                  Was patien referred by another Health Care Institution (HCI)
                </b>
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
              <Typography>
                <b>Confinement Period :</b>
              </Typography>
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
              <Typography>
                <b>Patient Disposition :</b>
              </Typography>
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
                    Transferred/Referred
                  </Typography>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={12}>
                  {" "}
                  <Typography>
                    <b>Type of Accommodation :</b>
                  </Typography>
                  <br />
                </Grid>

                <Grid item xs={3}>
                  {" "}
                  <Typography>
                    <Switch
                      name=""
                      // checked={value === 1}
                      // onChange={handleChecked}
                      inputProps={{ "aria-label": "switch" }}
                    />
                    Private
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
                    Non-Private(Charity/Service)
                  </Typography>
                </Grid>
                <Grid item xs={4}></Grid>
              </Grid>
            </Grid>
          </Grid>

          <br />
          <Divider>
            {" "}
            <Typography variant="h5" component="h5">
              {" "}
              Diagnosis{" "}
            </Typography>
          </Divider>
          <br />
          <Grid container spacing={2}>
            <Typography>
              <b>Admission Diagnosis/es :</b>
            </Typography>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                label=""
                multiline
                fullWidth
                rows={5}
              />
            </Grid>
          </Grid>

          <br />
          <Divider>
            {" "}
            <Typography variant="h5" component="h5">
              {" "}
              Special Considarations{" "}
            </Typography>
          </Divider>
          <br />
          <Grid container spacing={2}>
            <Typography>
              <b>
                a. For the following repetitive procedures, check box that
                applies and emunerate the procedure/session dates{" "}
              </b>
            </Typography>
            <Grid item xs={6}>
              <Typography>
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                Hemodialysis
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                Blood Transfusion
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                Peritoneal
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                Brachytherapy
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                Radiotherapy (LINAC)
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                Chemotherapy
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                Radiotherapy (COBALT)
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                Simple Debridement
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                Radiotherapy (IMRT)
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Typography>
            <b>b. For Z-Benefits Package </b>
          </Typography>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="Z-Benefits Package Group:"
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                // type="time"
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="Z-Benefits Package Code:"
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                // type="time"
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography>Pre-Authorization Type:</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                Manual
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                Electronic
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="Pre-Authorization Date:"
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
            <Grid item xs={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="Pre-Authorizztion Number"
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                // type="time"
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-flexible"
                label="For Additional Data"
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                // type="time"
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
          </Grid>
          <br />
          <Typography>
            <b>
              c. For MCP Package, emunerate four dates of pre-natal check-ups{" "}
            </b>
          </Typography>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                id="outlined-multiline-flexible"
                label="1 :"
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                // type="time"
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-multiline-flexible"
                label="2 :"
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                // type="time"
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-multiline-flexible"
                label="3 :"
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                // type="time"
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-multiline-flexible"
                label="4 :"
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                // type="time"
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>
                With O.R. Attached?
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                Yes
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="outlined-multiline-flexible"
                label="O.R. Amount"
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                // type="time"
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="Last Menstrual Period :"
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
            <Grid item xs={6}></Grid>
          </Grid>
          <br />
          <Typography>
            <b>d. For TB DOTS PAckage :</b>
          </Typography>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography>
                Treatment Phase:
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                Intensive
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                Maintenance
              </Typography>
            </Grid>

            <Grid item xs={6}></Grid>
          </Grid>
          <br />
          <Typography>
            <b>
              e. For Animal Bite Package, Write the dates(mm-dd-yyyy) when the
              following doses of vacine was given:
              <br />
              Remiders: Anti Rabies Vaccine (ARV), Rabies Immunoglobulin (RIG){" "}
            </b>
          </Typography>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="Day 0  ARV"
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                // type="date"
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="Day 3  ARV"
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                // type="date"
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="Day 7  ARV"
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                // type="date"
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="RIG"
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                // type="date"
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="Others"
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                // type="date"
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="Specify"
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                // type="date"
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
          </Grid>
          <br />
          <Typography>
            <b>f. Newborn Care Package </b>
          </Typography>
          <br />

          <Grid container spacing={2}>
            <Grid item xs={4}>
              {" "}
              <Typography>
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                Essential Newborn Care
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
                Newborn Screening Test
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
                Newborn Hearing Screening Test
              </Typography>
            </Grid>
            <Grid item xs={4}>
              {" "}
              <Typography>
                Tick Applicable Box
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                Check all
              </Typography>
            </Grid>
            <Grid item xs={4}>
              {" "}
              <Typography>
                With O.R Attached?
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                Yes
              </Typography>
            </Grid>
            <Grid item xs={4}>
              {" "}
              <Typography>
                With O.R Attached?
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                Yes
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Immediate drying of newborn, etc."
                  name=""
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Early skin-to-skin contact"
                  name=""
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Timely card clamping"
                  name=""
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Eye prophylaxis"
                  name=""
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Weighing of the newborn"
                  name=""
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Vitamin of the newborn"
                  name=""
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="BCG vaccination"
                  name=""
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Non-separation of mother/baby for early breastfeeding initiation"
                  name=""
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Hepatitis B vaccination"
                  name=""
                />
              </FormGroup>
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="outlined-multiline-flexible"
                label="Filter Card No."
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>
                With O.R Attached?
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                Yes
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Typography>
            <b>g.Outpatient HIV/AIDS Treatment Package </b>
          </Typography>
          <br />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="Laboratory Number"
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />{" "}
            </Grid>
            <Grid item xs={6}>
              <Typography>
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                Laboratory number is not indicated
              </Typography>
            </Grid>
          </Grid>

          <br />
          <Typography>
            <b>
              Other Cases :<br /> h.For NSD Package emunerate four dates of
              pre-natal check-ups{" "}
            </b>
          </Typography>
          <br />

          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                id="outlined-multiline-flexible"
                label="1 :"
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                // type="time"
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-multiline-flexible"
                label="2 :"
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                // type="time"
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-multiline-flexible"
                label="3 :"
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                // type="time"
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-multiline-flexible"
                label="4 :"
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                // type="time"
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography>
                With O.R. Attached?
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                Yes
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="outlined-multiline-flexible"
                label="O.R. Amount"
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                // type="time"
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="Last Menstrual Period :"
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
            <Grid item xs={6}></Grid>
          </Grid>

          <br />
          <Typography>
            <b>i. For Contact Package </b>
          </Typography>
          <br />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="outlined-multiline-flexible"
                label="Contract Pre-authorization Number"
                // multiline
                // maxRows={4}
                fullWidth
                InputLabelProps={{ shrink: true }}
                name="pMemberMiddleName"
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={12}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      For intraocular Lens Stickers
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>
                        <Switch
                          name=""
                          // checked={value === 1}
                          // onChange={handleChecked}
                          inputProps={{ "aria-label": "switch" }}
                        />
                        Present
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>
                        <Switch
                          name=""
                          // checked={value === 1}
                          // onChange={handleChecked}
                          inputProps={{ "aria-label": "switch" }}
                        />
                        Absent
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <InputLabel>(For left Eye) Sticker Number :</InputLabel>
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
                      <InputLabel>Date of Expiration :</InputLabel>
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
                      <InputLabel>(For Right Eye) Sticker Number :</InputLabel>
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
                      <InputLabel>Date of Expiration :</InputLabel>
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
                </CardContent>
                <CardActions>
                  {/* <Button size="small">Learn More</Button> */}
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <br />
          <Typography>
            <b>j. For Medical Detoxification Package </b>
          </Typography>
          <br />

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Checklist of Mandatory and other Services for Medical Detoxification Package"
                  name=""
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Detoxification Treatment Plan"
                  name=""
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Photocopy of Completely Accomplished Satisfaction Questionaire"
                  name=""
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Checklist of Requirement for Reimbursement of Medical Detoxification Package"
                  name=""
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Checklist of Co-Morbidity Form(if with co-morbidity only)"
                  name=""
                />
              </FormGroup>
            </Grid>
          </Grid>
          <br />
          <Divider>
            {" "}
            <Typography variant="h5" component="h5">
              {" "}
              Philhealth Benefits{" "}
            </Typography>
          </Divider>

          {/* This line of code is inside in table */}
          <Forms2Table />

          <br />
          <Divider>
            {" "}
            <Typography variant="h5" component="h5">
              {" "}
              Professional Fees / Charges{" "}
            </Typography>
          </Divider>

          {/* This line of code is inside in table ProfessionalTables*/}
          <ProfessionalTables />

          <br />
          <Divider>
            {" "}
            <Typography variant="h5" component="h5">
              {" "}
              Certification of Consumption of Benifits and Consent to Access
              Patient Record{" "}
            </Typography>
          </Divider>
          <br />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography>
                With Attached Statement of Account (SOA)
                <Switch
                  name=""
                  // checked={value === 1}
                  // onChange={handleChecked}
                  inputProps={{ "aria-label": "switch" }}
                />
                YES?
              </Typography>
            </Grid>
          </Grid>

          <Certification />

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