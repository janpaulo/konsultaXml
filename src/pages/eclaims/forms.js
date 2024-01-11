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
import Switch from "@mui/material/Switch";

import Divider from "@mui/material/Divider";
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// const BootstrapInput = styled(InputBase)(({ theme }) => ({
//   "label + &": {
//     marginTop: theme.spacing(3),
//   },
//   "& .MuiInputBase-input": {
//     borderRadius: 4,
//     position: "relative",
//     backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
//     border: "1px solid",
//     borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
//     fontSize: 16,
//     width: "auto",
//     padding: "10px 12px",
//     transition: theme.transitions.create([
//       "border-color",
//       "background-color",
//       "box-shadow",
//     ]),
//     // Use the system font instead of the default Roboto font.
//     fontFamily: [
//       "-apple-system",
//       "BlinkMacSystemFont",
//       '"Segoe UI"',
//       "Roboto",
//       '"Helvetica Neue"',
//       "Arial",
//       "sans-serif",
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(","),
//     "&:focus": {
//       boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
//       borderColor: theme.palette.primary.main,
//     },
//   },
// }));
class forms extends React.Component {
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
            Personal Information{" "}
          </Typography>
        </Divider>
        <Box id="fullWidth">
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
            <Grid item xs={2}>
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
            <Grid item xs={2}>
              <TextField
                id="outlined-multiline-flexible"
                label="Date of Birth"
                // multiline
                // maxRows={4}
                type="date"
                InputLabelProps={{ shrink: true, required: true }}
                fullWidth
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
                  name="pMemberSex"
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
                size="small"
                onChange={this.props.onchange}
              />
            </Grid>
          </Grid>

          <Divider>
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
          </Grid>

          <Divider>
            {" "}
            <Typography variant="h6" component="h6">
              {" "}
              Member Certification{" "}
            </Typography>
          </Divider>

          {/* Member Certification Form */}
          <Grid container spacing={2}>
            <Grid item xs={3}>
              - With signature of member?{" "}
            </Grid>
            <Grid item xs={3}>
              <FormGroup>
                {/* <FormControlLabel label="YES" labelPlacement="start"/> */}
                <FormControlLabel
                  control={<Switch defaultChecked />}
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
                  control={<Switch defaultChecked />}
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
              - Relationship of the Representative of the Member?{" "}
            </Grid>
            <Grid item xs={3}>
              <FormGroup>
                {/* <FormControlLabel label="YES" labelPlacement="start"/> */}
                <FormControlLabel
                  control={<Switch defaultChecked />}
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
                  control={<Switch defaultChecked />}
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
                  control={<Switch defaultChecked />}
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
              <InputLabel>
                FullName :
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
            <InputLabel>
                Address :
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
            <InputLabel>
                Category :
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
            <InputLabel>
                Classification :
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
            <InputLabel>
                Accreditation Period :
              </InputLabel>
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
