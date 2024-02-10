import React from "react";
import Typography from "@mui/material/Typography";
import Forms from "./forms";
import Forms2 from "./forms2";
import SimplePopUp from "./../../shared/PopUp/PopUpModule";
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
      openPopup: false,
      specialConsideration: {
        isHemodialysis: false,
        isPentoneal: false,
        isRadioLinac: false,
        isRadioCobalt: false,
        isRadioIMRT: false,
        isBloodTrans: false,
        isBracy: false,
        isSimpleDeb: false,
        isChemotherapy: false,
      },

      patienCon: {
        improved: false,
        recovered: false,
        homeDischarged: false,
        abscorded: false,
        expired: false,
        transfered: false,
      },

      options: [
        { label: "All Case Rate", value: "ALL-CASE-RATE" },
        { label: "Z-Benefits", value: "Z-BENEFITS" },
        { label: "Confinement Abroad", value: "CONFINEMENT-ABROAD" },
        { label: "Emergency Case", value: "EMERGENCY-CASE" },
        { label: "OPD Case", value: "OPD-CASE" },
        { label: "Others", value: "OTHERS" },
        { label: "For Post Audit", value: "POST-AUDIT" },
      ],

      options2: [
        { label: "Private", value: "Y" },
        { label: "Non-Private(Charity/Service)", value: "N" },
      ],

      options3: [
        { label: "Treatment Phase:", value: "I" },
        { label: "Maintenance", value: "M" },
      ],

      selectedOption: null,
      selectedTypeOfAccomodation: null,
      pTBType : null,

      claimsType: {
        allCaseRate: false,
        zBenefits: false,
        confinementAbroad: false,
        emergencyCase: false,
        opdCase: false,
        others: false,
        posAudit: false,
      },

      isTransfered: false,
      specialCon: false,
      dateAdmitedCount: "",
      startDayAdmited: "",

      patientDisposition: "",

      eCLAIMS: {
        pUserName: ":ECLAIMS-04-01-2018-00002",
        pUserPassword: "",
        pHospitalCode: "300806",
        pHospitalEmail: "email@yahoo.com",
      },
      eTRANSMITTAL: {
        pHospitalTransmittalNo: "300806-07-21-2023-1",
        pTotalClaims: "1",
      },

      claim: {
        pClaimNumber: "300806-07-21-20211-1",
        pTrackingNumber: "",
        pPhilhealthClaimType: "ALL-CASE-RATE",
        pPatientType: "I",
        pIsEmergency: "N",
      },

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
        pPatientReferred: "Y",
        pReferredIHCPAccreCode: "H12345678",
        pAdmissionDate: moment(new Date()).format("YYYY-MM-DD"),
        pAdmissionTime: "", //01:00:00PM" ,
        pDischargeDate: moment(new Date()).format("YYYY-MM-DD"),
        pDischargeTime: "", //"03:00:00PM",
        pDisposition: "I",
        pExpiredDate: "",
        pExpiredTime: "",
        pReferralIHCPAccreCode: "",
        pReferralReasons: "",
        pAccommodationType: "N",
      },

      // RVSCODES
      rvscodes: {
        pRelatedProcedure: "",
        RVSCode: "",
        pProcedureDate: "",
        pLaterality: "",
      },

      diagnosCodeData: [
        {
          pDischargeDiagnosis: "",
          pLaterality: "",
          pICDCode: "",
          pRVSCode: "",
          pProcedureDate: "",
          pRelatedProcedure: "",
          left: false,
          right: false,
          both: false,
        },
      ],

      items: [],
      value: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggleIsTrasfered = this.handleToggleIsTrasfered.bind(this);
    this.handleClickCheckBox = this.handleClickCheckBox.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleClickCheckBoxSpeConsideration =
      this.handleClickCheckBoxSpeConsideration.bind(this);
    this.handleClickCheckBoxPatientCon =
      this.handleClickCheckBoxPatientCon.bind(this);
    this.handleSendSelection = this.handleSendSelection.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleCheckboxChangeAccomondation =
      this.handleCheckboxChangeAccomondation.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ openPopup: false });
  }

  handleSubmit(params) {
    console.log(this.state.diagnosCodeData);

    this.setState({ openPopup: true });
    console.log(this.state.patientDisposition);

    console.log(
      JsonToXml(
        // { CF1: '', CF2: 2,  attr: this.state.itemcf1 },

        // <eCLAIMS> mga lamn </eCLAIMS>
        // { eCLAIMS:  {
        //   eTRANSMITTAL: {Claim:'2'  ,  attr:  this.state.claim    },  attr: { b: 2, c: 3 }
        //  },
        // attr:  this.state.eCLAIMS },
        // { attributes_key: 'attr' }
        // ));

        {
          eCLAIMS: {
            eTRANSMITTAL: {
              CLAIM: [
                { CF1: "", attr: this.state.itemcf1 },
                {
                  CF2: [{ a: 1, attr: { b: 2, c: 3 } }],
                  attr: this.state.itemcf2,
                },
              ],
              attr: this.state.claim,
            },
            attr: this.state.eTRANSMITTAL,
          },
          attr: this.state.eCLAIMS,
        },
        { attributes_key: "attr" }
      )
    );
  }

  handleDate(e) {
    this.setState({
      itemcf2: {
        ...this.state.itemcf2,
        [e.target.name]: e.target.value,
      },
    });

  }

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

    // this.setState({
    //   itemcf2: {
    //     ...this.state.itemcf2,
    //     [e.target.name]: e.target.value,
    //   },
    // });
  }

  handleToggleIsTrasfered() {
    this.setState({ isTransfered: !this.state.isTransfered });
  }

  handleClickCheckBox(e) {
    console.log(this.state.specialCon);
    this.setState({ specialCon: !this.state.specialCon });
  }

  handleClickCheckBoxPatientCon(option) {
    var valueOfDisposition = ""
    if( option === "improved"){
      valueOfDisposition= "I"
    }else if (option === "recovered") {
      valueOfDisposition= "R"
    }  else if (option === "homeDischarged") {
      valueOfDisposition= "H"
    } else if (option === "abscorded") {
      valueOfDisposition= "A"
    } else if (option === "expired") {
      valueOfDisposition= "E"
    }else if (option === "transfered") {
      valueOfDisposition= "T"
    } 

    this.setState({ patientDisposition: valueOfDisposition });

    this.setState((prevState) => ({
      patienCon: {
        ...Object.fromEntries(
          Object.entries(prevState.patienCon).map(([key]) => [key, false])
        ),
        [option]: !prevState.patienCon[option],
      },
    }));
  }

  handleClickCheckBoxSpeConsideration(e) {
    // console.log(e.target.checked);
    this.setState({
      specialConsideration: {
        ...this.state.specialConsideration,
        [e.target.name]: e.target.checked,
      },
    });
  }

  handleSendSelection(event) {
    console.log();
    console.log("value - ", event.target.value);
  }

  handleCheckboxChange = (option) => {
    this.setState({ selectedOption: option });
  };

  handleCheckboxChangeAccomondation = (option) => {
    console.log(option);
    this.setState({ selectedTypeOfAccomodation: option });
  };

  
  handleCheckboxChangeTBtype = (option) => {
    console.log(option);
    this.setState({ pTBType: option });
  };

  handleTimeChange = (e) => {
    // this.setState({ time: event.target.value });

    this.setState({
      itemcf2: {
        ...this.state.itemcf2,
        [e.target.name]: e.target.value,
      },
    });
  };

  print = () => {
    const { pDischargeTime, pAdmissionTime } = this.state.itemcf2;
    console.log(pDischargeTime);
    const [h, m] = pDischargeTime.split(":");
    const [H, M] = pAdmissionTime.split(":");
    console.log(
      (h % 12 ? h % 12 : 12) + ":" + m,
      parseInt(h, 10) >= 12 ? "PM" : "AM"
    );
    console.log(
      (H % 12 ? H % 12 : 12) + ":" + M,
      parseInt(H, 10) >= 12 ? "PM" : "AM"
    );
  };

  // for diagnosCodeData
  handleDataChange = (updatedData) => {
    this.setState({ diagnosCodeData: updatedData });
  };

  render() {
    var start = this.state.itemcf2.pAdmissionDate;
    var end = this.state.itemcf2.pDischargeDate;

    const getDaysDiff = (start_date, end_date, date_format = "YYYY-MM-DD") => {
      const getDateAsArray = (date) => {
        return moment(date.split(/\D+/), date_format);
      };
      return (
        getDateAsArray(end_date).diff(getDateAsArray(start_date), "days") + 1
      );
    };
    const countAdmidatedDate = getDaysDiff(start, end);
    let satrtDay = moment(start).date();
    let month = 1 + moment(start).month();
    let year = moment(start).year();
    let dateAdmitedCounts = this.state.dateAdmitedCount;
    let startDayAdmits = this.state.startDayAdmited;

    dateAdmitedCounts = countAdmidatedDate;
    startDayAdmits = satrtDay;

    console.log(JsonToXml(
       { eCLAIMS:  {
          eTRANSMITTAL: {
            CLAIM: [
              {CF1: "", attr: this.state.itemcf1},
              {CF2: [
                  { DIAGNOSIS: 
                    [
                      { DISCHARGE: [
                        { ICDCODE: "wqwqw", }
                        // {
                        //     ICDCODE: "", attr: { pICDCode:  "K31.9"},
                           
                        // },
                        // {
                        //   ICDCODE: "", attr: { pICDCode:  "K31.9"},
                        // }
                    ] 
                    },

                      // [ { DISCHARGE: [{ICDCODE: "da"},{ICDCODE: "ssf"}] , attr: { pDischargeDiagnosis: 2 } } ]
                    ], attr: { pAdmissionDiagnosis: 2} 
                  },

                  { SPECIAL:  [{a: 1}] }, 
                  { PROFESSIONALS: [{a: "s", attr: { pICDCode:  "K31.9"}}] },
                  { CONSUMPTION:  [{BENEFITS: "s" , attr: { pTotalHCIFees:  "sa"}}], attr: { pEnoughBenefits:  "Y"} },

              ], attr: this.state.itemcf2},

              {ALLCASERATE: { CASERATE: '', attr: { pCaseRateCode:  "sa"}  } },

              {PARTICULARS: { DRGMED: '', attr: { pCaseRateCode:  "sa"}  } },

              {RECEIPTS: { RECEIPT: '', attr: { pCaseRateCode:  "sa"}  } },

              {DOCUMENTS: { DOCUMENT: '', attr: { pCaseRateCode:  "sa"}  } }

            ]    ,  attr:  this.state.claim    },  attr:  this.state.eTRANSMITTAL
        },
       attr:  this.state.eCLAIMS },
       { attributes_key: 'attr' }

       ));

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
              patienCon={this.state.patienCon}
              claimsType={this.state.claimsType}
              // itemcf={this.state.itemcf2}
              itemCf={this.state.itemcf2}
              handleClick={this.handleSubmit}
              handleToggle={this.handleToggleIsTrasfered}
              handleClickCheckBox={this.handleClickCheckBox}
              handleDate={this.handleDate}
              onchange={this.handleInputChange}
              handleClickCheckBoxSpeConsideration={
                this.handleClickCheckBoxSpeConsideration
              }
              handleClickCheckBoxPatientCon={this.handleClickCheckBoxPatientCon}
              handleSendSelection={this.handleSendSelection}
              handleCheckboxChange={this.handleCheckboxChange}
              handleCheckboxChangeAccomondation={ this.handleCheckboxChangeAccomondation}
              handleTimeChange={this.handleTimeChange}
              handleCheckboxChangeTBtype={this.handleCheckboxChangeTBtype}
              options3={this.state.options3}
              pTBType={this.state.pTBType}
              
              print={this.print}
              options={this.state.options}
              options2={this.state.options2}
              selectedOption={this.state.selectedOption}
              selectedTypeOfAccomodation={this.state.selectedTypeOfAccomodation}
              diagnosCodeData={this.state.diagnosCodeData}
              handleDataChange={this.handleDataChange}
            />
          </CustomTabPanel>

          <SimplePopUp
            // openPopup={true}
            openPopup={this.state.openPopup}
            title={this.state.title}
            handleClose={this.handleClose}
            maxWidth={this.state.maxWidth}
          ></SimplePopUp>
        </div>
      </>
    );
  }
}

export default mainForms;
