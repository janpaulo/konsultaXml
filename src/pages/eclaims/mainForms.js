import React from "react";
import Typography from "@mui/material/Typography";
import Forms from "./forms";
import Forms2 from "./forms2";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import JsonToXml from "json2xml";
import moment from "moment";

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
      specialConsideration: {
        isHemodialysis: false,
        isPentoneal: false,
        isRadioLinac: false,
        isRadioCobalt: false,
        isRadioIMRT: false,
        isBloodTrans: false,
        isBracy: false,
        isSimpleDeb: false,
        isChemotherapy: false},
        
        isTransfered: false,
        specialCon: false,
      dateAdmitedCount:"",
      startDayAdmited:"",
      
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
      itemcf2: {
        pDateAdmited: moment(new Date()).format("YYYY-MM-DD"),
        pDateDisCharge:  moment(new Date()).format("YYYY-MM-DD"),

      },
      items: [],
      value: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggleIsTrasfered = this.handleToggleIsTrasfered.bind(this);
    this.handleClickCheckBox = this.handleClickCheckBox.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleClickCheckBoxSpeConsideration = this.handleClickCheckBoxSpeConsideration.bind(this);
  }

  handleSubmit(params) {
    console.log("here me");

  }

  handleDate(e)  {
    this.setState({
      itemcf2: {
        ...this.state.itemcf2,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleChange(event, newValue) {
    this.setState({ value: newValue });
  }

  handleInputChange(e) {
    // console.log(e.target.value);
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

  handleClickCheckBoxSpeConsideration (e) {

    // console.log(e.target.checked);
    this.setState({
      specialConsideration: {
        ...this.state.specialConsideration,
        [e.target.name]: e.target.checked,
      },
    });
  };

  render() {
    var start = this.state.itemcf2.pDateAdmited;
    var end = this.state.itemcf2.pDateDisCharge;
        
    const getDaysDiff = (start_date, end_date, date_format = 'YYYY-MM-DD') => {
      const getDateAsArray = (date) => {
        return moment(date.split(/\D+/), date_format);
      }
      return getDateAsArray(end_date).diff(getDateAsArray(start_date), 'days') + 1;
    }
    const countAdmidatedDate = getDaysDiff(start,end);
    let satrtDay = moment(start).date();
    let month = 1 + moment(start).month();
    let year = moment(start).year();
    let dateAdmitedCounts = this.state.dateAdmitedCount 
    let startDayAdmits = this.state.startDayAdmited 
    
    dateAdmitedCounts = countAdmidatedDate;
    startDayAdmits = satrtDay;


    console.log(this.state.specialConsideration )
    // console.log(start);
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
              isTransfered={this.state.isTransfered}
              specialConsideration={this.state.specialConsideration}
              isSpecialCon={this.state.specialCon}
              dateAdmitedCount={dateAdmitedCounts}
              startDayAdmited={startDayAdmits}
              startMonthAdmited={month}
              startYearAdmited={year}

              handleClick={this.handleSubmit}
              handleToggle ={this.handleToggleIsTrasfered}
              handleClickCheckBox ={this.handleClickCheckBox}
              handleDate={this.handleDate}
              onchange={this.handleInputChange}
              handleClickCheckBoxSpeConsideration={this.handleClickCheckBoxSpeConsideration}
            />
          </CustomTabPanel>
        </div>
      </>
    );
  }
}

export default mainForms;
