import React from "react";
import Typography from "@mui/material/Typography";
import Forms from "./forms";
import Forms2 from "./forms2";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import JsonToXml from "json2xml";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

class mainForms extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Claims",
      item: {},
      isTransfered: false,
      specialCon: false,
      
      itemcf1: {
        pMemberPIN: "",
        pMemberLastName: "",
        pMemberFirstName: "",
        pMemberSuffix: "",
        pMemberMiddleName: "",
        pMemberBirthDate: "",
        pMemberShipType: "",
        pMailingAddress: "",
        pZipCode: "",
        pMemberSex: "",
        pLandlineNo: "",
        pMobileNo: "",
        pEmailAddress: "",
        pPatientIs: "",
        pPatientPIN: "",
        pPatientLastName: "",
        pPatientFirstName: "",
        pPatientSuffix: "",
        pPatientMiddleName: "",
        pPatientBirthDate: "",
        pPatientSex: "",
        pPEN: "",
        pEmployerName: "",
      },
      items: [],
      value: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggleIsTrasfered = this.handleToggleIsTrasfered.bind(this);
    this.handleClickCheckBox = this.handleClickCheckBox.bind(this);
  }

  handleSubmit(params) {
    console.log("here me");
    //   this.setState({
    //     bank: {
    //       ...this.state.bank,
    //       name: e.target.value
    //     }
    //   })
  }

  handleChange(event, newValue) {
    this.setState({ value: newValue });
  }

  handleInputChange(e) {
    console.log(e.target.value);
    this.setState({
      itemcf1: {
        ...this.state.itemcf1,
        [e.target.name]: e.target.value,
      },
    });
  }

  handleToggleIsTrasfered () {
      this.setState({ isTransfered: !this.state.isTransfered });
  };

  handleClickCheckBox (e) {
    console.log(this.state.specialCon )
      this.setState({ specialCon: !this.state.specialCon });
  };

  render() {
    // console.log(this.state.item);
    console.log(JsonToXml({ CF1: 1, CF2: 2, attr: this.state.itemcf1 }, { attributes_key: 'attr' }));
    return (
      <>
        <Typography variant="h5" component="h5">
          {this.state.title}
          {this.state.item.Label1}
        </Typography>

        <div>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            aria-label="basic tabs example"
          >
            {/* <Tabs value={this.state.value} onChange={this.handleChange} indicatorColor="secondary" aria-label="simple tabs example"> */}
            <Tab
              label={
                <div>
                  <span>
                    <b>C1</b>
                  </span>
                </div>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                <div>
                  <span>
                    <b>C2</b>
                  </span>
                </div>
              }
              {...a11yProps(0)}
            />
          </Tabs>

          <CustomTabPanel value={this.state.value} index={0}>
            <Forms
              handleClick={this.handleSubmit}
              onchange={this.handleInputChange}
              itemCf={this.state.itemcf1}
            />

          </CustomTabPanel>
          <CustomTabPanel value={this.state.value} index={1}>
            <Forms2
            
              isTransferedChecked={this.state.isTransfered}
              isSpecialCon={this.state.specialCon}
              handleClick={this.handleSubmit}
              handleToggle ={this.handleToggleIsTrasfered}
              handleClickCheckBox ={this.handleClickCheckBox}
              onchange={this.handleInputChange}
            />
          </CustomTabPanel>
        </div>
      </>
    );
  }
}

export default mainForms;
