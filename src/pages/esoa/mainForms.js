import React from "react";
import Typography from "@mui/material/Typography";
import Forms from "./forms";
// import Forms2 from "./forms2";
import PropTypes from "prop-types";
import Box from '@mui/material/Box';
import JsonToXml from "json2xml";
import SimplePopUp from "./../../shared/PopUp/PopUpModule";


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


class mainForms extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "ESOA",
      item: {},
      openPopup: false,
      // roomAndBoard: {},
      
      summaryOfFees: { },
        roomAndBoard: { pActualCharges: "", pSeniorCitizenDiscount: "",pPWDDiscount: "",pPCSO: "",pDSWD: "", pDOHMAP: "",pHMO: ""},
        OtherFundSource: { pDescription: "", pAmount: "" },
        drugsAndMedicine: { pActualCharges: "",  pSeniorCitizenDiscount: "", pPWDDiscount: "", pPCSO: "", pDSWD: "",   pDOHMAP: "",pHMO: ""},
        laboratoryAndDiagnostic: {pActualCharges: "",  pSeniorCitizenDiscount: "", pPWDDiscount: "", pPCSO: "", pDSWD: "",   pDOHMAP: "",pHMO: ""},
        operatingRoomFees:  {pActualCharges: "",  pSeniorCitizenDiscount: "", pPWDDiscount: "", pPCSO: "", pDSWD: "",   pDOHMAP: "",pHMO: ""},
        medicalSupplies:  {pActualCharges: "",  pSeniorCitizenDiscount: "", pPWDDiscount: "", pPCSO: "", pDSWD: "",   pDOHMAP: "",pHMO: ""},
        PhilHealth :{pTotalCaseRateAmount: ""},
        Balance :{pAmount: ""},
        
      itemSummaryFee: {
        pActualCharges: "",
        pSeniorCitizenDiscount: "",
        pPWDDiscount: "",
        pPCSO: "",
        pDSWD: "",
        pDOHMAP: "",
        pHMO: ""

      },
      itemOtherFundSource: {
        pDescription: "",
        pAmount: ""
      },
      dataItem: [
        {
          pServiceDate: "",
          pItemCode: "",
          pUnitOfMeasurement: "",
          pItemName: "",
          pUnitPrice: 0,
          pQuantity: 0,
          pTotalAmount: 0,
        },
      ],
      items: [],
      itembills: [],
      value: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChangeOtherFundSource = this.handleInputChangeOtherFundSource.bind(this);
    this.handleInputChangedrugsAndMedicine = this.handleInputChangedrugsAndMedicine.bind(this);
  }

  handleSubmit(params) {
    console.log("here me");
    const array = this.state.dataItem;
    // Create JSON object based on the length of the array
    const ItemizedBillingItems = array.map((value, index) => {
      return {
        ["ItemizedBillingItem"]: '', attr: value
      };
    });
    console.log(
      JsonToXml(
        {eSOA: [
          {SummaryOfFees:
            [
              {
                RoomAndBoard: [
                  {SummaryOfFee: "" , attr: {s: "Dadada"} },
                  {OtherFundSource: "" , attr: {s: "Dadada"} },
                ] 
              },
              {
                DrugsAndMedicine: [
                  { SummaryOfFee:  "", attr: {s: "Dadada"} }
                ] 
              },
              {
                LaboratoryAndDiagnostic: 
                [
                  { SummaryOfFee:  "", attr: {s: "Dadada"} }
                ]  
              },
              {
                OperatingRoomFees: 
                [
                  { SummaryOfFee:  "", attr: {s: "Dadada"} }
                ]  
              },
              {
                MedicalSupplies: 
                [
                  { SummaryOfFee:  "", attr: {s: "Dadada"} }
                ] 
              },
              {PhilHealth: "", attr: {s: "Dadada"}  },
              {Balance: "", attr: {ssaewrers: "Dadada"}  },
            ], attr: {s: "Dadada"} },
          { ProfessionalFees: [
              {
                ProfessionalFee: 
                [
                  {ProfessionalInfo: "1", attr: {s: "Dadada"} },
                  {SummaryOfFee: "1", attr: {s: "Dadada"} },
                ]
              },
              {PhilHealth: "1", attr: {s: "Dadada"} },
              {Balance: "1", attr: {s: "Dadada"} },
            ] 
          },
          { ItemizedBillingItems //data is on the json
          } ,
        ],
          attr: {	pHciPan: "X12345678", pHciTransmittalId: "X12345678-2023-02-13-1"},
        },
        { attributes_key: "attr" }
      )
    );


  }

  handleChange(event, newValue) {
    this.setState({ value: newValue });
  }

  handleInputChange(e) {
    this.setState({
      roomAndBoard: {
        ...this.state.roomAndBoard,
        [e.target.name]: e.target.value,
      },
    });
  
  }
  handleInputChangeOtherFundSource(e) {
    this.setState({
      OtherFundSource: {
        ...this.state.OtherFundSource,
        [e.target.name]: e.target.value,
      },
    });
  
  }
  handleInputChangedrugsAndMedicine(e) {
    this.setState({
      drugsAndMedicine: {
        ...this.state.drugsAndMedicine,
        [e.target.name]: e.target.value,
      },
    });
   
  
  }

  handleDataChange = (updatedData) => {
    this.setState({ dataItem: updatedData });
  };

  render() {
    return (
      <>
        <Typography variant="h5" component="h5">
          {this.state.title}
          {this.state.item.Label1}
        </Typography>

        <div>
        
          <Forms
              handleClick={this.handleSubmit}
              onchange={this.handleInputChange}
              handleDataChange={this.handleDataChange}
              itembills={this.state.itembills}
              dataItem={this.state.dataItem}


              roomAndBoard={this.state.roomAndBoard}
              OtherFundSource={this.state.OtherFundSource}
              drugsAndMedicine={this.state.drugsAndMedicine}
            />

          <SimplePopUp
            // openPopup={true}
            openPopup={this.state.openPopup}
            title={this.state.title}
            handleClose={this.handleClose}
            maxWidth={this.state.maxWidth}
          >


          </SimplePopUp>
          

         
        </div>
      </>
    );
  }
}

export default mainForms;
