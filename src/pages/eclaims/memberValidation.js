// export default AutocompleteComponent;
import React, { Component } from "react";
import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { parseString } from "xml2js";
// import Xml2js from "xml2js";
import { Button } from "@mui/material";
import moment from "moment";

class memberValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      loading: false,
      selectedOptions: [], // Track selected options
      searchText: this.props.searchText,
    };
  }

  handleSubmit = () => {
    const item = this.state.searchText;

    // console.log(moment(new Date(item.bday)).format("MM-DD-YYYY") )

    if (
      item.lastname === "" ||
      item.firstname === "" ||
      item.middlename === "" ||
      item.bday === ""
    ) {
      // alert("Please fill out all fields");
      // console.log(this.state.searchText);
    } else {
      // Define the SOAP request body
      const soapRequest = `
    <Envelope xmlns="https://schemas.xmlsoap.org/soap/envelope/">
    <Body>
        <GetMemberPIN xmlns="https://philhealth.gov.ph">
             <pUserName>${process.env.REACT_APP_USERNAME}</pUserName>
            <pUserPassword></pUserPassword>
            <pHospitalCode>${process.env.REACT_APP_HOSPITALCODE}</pHospitalCode>
            <pMemberLastName>${item.lastname}</pMemberLastName>
            <pMemberFirstName>${item.firstname}</pMemberFirstName>
            <pMemberMiddleName>${item.middlename}</pMemberMiddleName>
            <pMemberSuffix>${item.suffix}</pMemberSuffix>
            <pMemberBirthDate>${moment(new Date(item.bday)).format(
              "MM-DD-YYYY"
            )}</pMemberBirthDate>
        </GetMemberPIN>
    </Body>
    </Envelope>
    `;
      // Define the URL of the SOAP service
      // const url = process.env.REACT_APP_PHIC_URL;

      // Define headers for the request
      const header = {
        "Content-Type": "text/xml",
        "Access-Control-Allow-Origin": "*", // Allow requests from any origin (you may adjust this based on your security requirements)
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS", // Define allowed methods
        // 'SOAPAction': 'YourSOAPAction' // SOAP action if required
      };

      axios
        .post("/soap?service=PhilhealthService", soapRequest, {
          headers: {
            header,
          },
          crossdomain: true ,
        })
        .then((response) => {
          // console.log(response.data); // Handle response data as needed
          parseString(response.data, (err, result) => {
            if (err) {
              console.error("Error parsing XML:", err);
              return;
            }
            const responseData =
              result["SOAP-ENV:Envelope"]["SOAP-ENV:Body"][0][
                "NS1:GetMemberPINResponse"
              ][0]["Result"][0];
            // Rename key '_' to 'value'
            responseData.memPin = responseData._;
            delete responseData._;

            if (!responseData.memPin.includes("NO RECORDS FOUND")) {
              this.props.updateDataItem(responseData.memPin, true, item);
            } else {
              this.props.updateDataItem(responseData.memPin, false, item);
            }
            // console.log("Response Data:", responseData);
            // console.log("Response Data:", responseData.memPin.includes('NO RECORDS FOUND'));
            // setResponse(result); // Store parsed JSON in state
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  handleInputChange(e) {
    this.setState({
      searchText: {
        ...this.state.searchText,
        [e.target.name]: e.target.value,
      },
    });
  }

  render() {
    const { searchText } = this.state;
    return (
      <div>
        <h5>Make sure member details are correct before proceeding</h5>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              id="outlined-multiline-flexible"
              label="Last Name"
              fullWidth
              required
              value={searchText.lastname}
              name="lastname"
              size="small"
              onChange={(e) => this.handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="outlined-multiline-flexible"
              label="First Name"
              required
              fullWidth
              name="firstname"
              value={searchText.firstname}
              size="small"
              onChange={(e) => this.handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="outlined-multiline-flexible"
              label="Middle Name"
              required
              fullWidth
              name="middlename"
              value={searchText.middlename}
              size="small"
              onChange={(e) => this.handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="outlined-multiline-flexible"
              label="Extension Name"
              fullWidth
              size="small"
              name="suffix"
              value={searchText.suffix}
              onChange={(e) => this.handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="outlined-multiline-flexible"
              label="Date of Birth"
              required
              type="date"
              InputLabelProps={{ shrink: true, required: true }}
              fullWidth
              value={searchText.bday}
              name="bday"
              size="small"
              onChange={(e) => this.handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "end" }}>
            <Button variant="contained" onClick={this.handleSubmit}>
              Validate
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default memberValidation;
