// import React, { useState } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";

// import TextField from "@mui/material/TextField";

// function DiagnosCode({ itemCodes }) {
//   const [data, setData] = useState([
//     {
//       pDischargeDiagnosis: "",
//       pLaterality: "",
//       pICDCode: "",
//       pRVSCode: "",
//       pProcedureDate: "",
//       pRelatedProcedure: "",
//       left: false,
//       right: false,
//       both: false,
//     },
//   ]);
//   // const [value, setValue] = useState("0.0");
//   const handleClick = () => {
//     setData([
//       ...data,
//       {
//         pDischargeDiagnosis: "",
//         pLaterality: "",
//         pICDCode: "",
//         pRVSCode: "",
//         pProcedureDate: "",
//         pRelatedProcedure: "",
//         left: false,
//         right: false,
//         both: false,
//       },
//     ]);
//   };

//   const handleChange = (e, i) => {
//     const { name, value } = e.target;
//     const onchangeVal = [...data];
//     onchangeVal[i][name] = value;
//     setData(onchangeVal);
//     itemCodes = onchangeVal;
//   };

//   const handleClickCheckBox = (e, i) => {
//     const name = e.target.name;
//     const value = e.target.checked;
//     const onchangeVal = [...data];
//     // console.log(value)

//     if (name === "both" && value === true) {
//       onchangeVal[i].left = true;
//       onchangeVal[i].right = true;
//     } 
    

//     if (name === "both" && value === false) {
//       onchangeVal[i].left = false;
//       onchangeVal[i].right = false;
//       onchangeVal[i].both = false;
//     } 
    

//     if (name === "left" && value === false) {
//       onchangeVal[i].both = false;
//     } 
//     if (name === "right" && value === false) {
//       onchangeVal[i].both = false;
//     } 
   

//     // if(onchangeVal[i].left  == false && onchangeVal[i].right  == false){
//     //   onchangeVal[i].both = true;
//     // }
//     // console.log(onchangeVal[i].right  == false )


//     onchangeVal[i][name] = value;
//     setData(onchangeVal);
//     // itemCodes = onchangeVal;
//   };

//   const handleDelete = (i) => {
//     const deleteVal = [...data];
//     deleteVal.splice(i, 1);
//     setData(deleteVal);
//   };
//   return (
//     <div className="App">
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell align="center">DIAGNOSIS</TableCell>
//               <TableCell align="center">ICD 10 CODES</TableCell>
//               <TableCell align="center">PROCEDURE</TableCell>
//               <TableCell align="center">RSVCODES</TableCell>
//               <TableCell align="center">DATE OF PROCEDURE</TableCell>
//               <TableCell align="center">LEFT</TableCell>
//               <TableCell align="center">RIGTH</TableCell>
//               <TableCell align="center">BOTH</TableCell>
//               <TableCell align="center">
//                 <Button
//                   variant="contained"
//                   color="success"
//                   onClick={handleClick}
//                 >
//                   Add
//                 </Button>
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map((val, i) => (
//               <TableRow>
//                 <TableCell align="center">
//                   <TextField
//                     id="outlined-multiline-flexible"
//                     // label="Amount"
//                     // multiline
//                     // maxRows={4}
//                     fullWidth
//                     name="pDischargeDiagnosis"
//                     type="text"
//                     size="small"
//                     // onChange={this.props.onchange}
//                     value={val.pDischargeDiagnosis}
//                     onChange={(e) => handleChange(e, i)}
//                   />
//                 </TableCell>
//                 <TableCell align="center">
//                   <TextField
//                     id="outlined-multiline-flexible"
//                     // label="Amount"
//                     // multiline
//                     // maxRows={4}
//                     fullWidth
//                     name="pICDCode"
//                     size="small"
//                     // onChange={this.props.onchange}
//                     value={val.pICDCode}
//                     onChange={(e) => handleChange(e, i)}
//                   />
//                 </TableCell>
//                 <TableCell align="center">
//                   <TextField
//                     id="outlined-multiline-flexible"
//                     // label="Amount"
//                     // multiline
//                     // maxRows={4}
//                     fullWidth
//                     name="pRelatedProcedure"
//                     size="small"
//                     // onChange={this.props.onchange}
//                     value={val.pRelatedProcedure}
//                     onChange={(e) => handleChange(e, i)}
//                   />
//                 </TableCell>
//                 <TableCell align="center">
//                   <TextField
//                     id="outlined-multiline-flexible"
//                     // label="Amount"
//                     // multiline
//                     // maxRows={4}
//                     fullWidth
//                     name="pRVSCode"
//                     size="small"
//                     // onChange={this.props.onchange}
//                     value={val.pRVSCode}
//                     onChange={(e) => handleChange(e, i)}
//                   />
//                 </TableCell>
//                 <TableCell align="center">
//                   <TextField
//                     id="outlined-multiline-flexible"
//                     // label="Amount"
//                     // multiline
//                     // maxRows={4}
//                     fullWidth
//                     name="pProcedureDate"
//                     type="Date"
//                     InputLabelProps={{
//                       shrink: true,
//                     }}
//                     size="small"
//                     // onChange={this.props.onchange}
//                     value={val.pProcedureDate}
//                     onChange={(e) => handleChange(e, i)}
//                   />
//                 </TableCell>
//                 <TableCell align="center">
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         name="left"
//                         checked={val.left}
//                         onClick={(e) => handleClickCheckBox(e, i)}
//                       />
//                     }
//                     // label="Direct Filed"
//                   />
//                 </TableCell>
//                 <TableCell align="center">
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         checked={val.right}
//                         name="right"
//                         onClick={(e) => handleClickCheckBox(e, i)}
//                       />
//                     }
//                     // label="Direct Filed"
//                   />
//                 </TableCell>
//                 <TableCell align="center">
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         name="both"
//                         checked={val.both}
//                         onClick={(e) => handleClickCheckBox(e, i)}
//                       />
//                     }
//                     // label="Direct Filed"
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <Button
//                     variant="outlined"
//                     color="error"
//                     onClick={() => handleDelete(i)}
//                   >
//                     Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       {/* {
//                 data.map((val,i)=>
//                 <div>
//                     <input name="fname" value={val.fname} onChange={(e)=>handleChange(e,i)} />
//                     <input name="lname" value={val.lname} onChange={(e)=>handleChange(e,i)} />
//                     <button onClick={()=>handleDelete(i)}>Delete</button>
//                 </div>
//                 )
//             } */}
//       {/* <p>{JSON.stringify(data)}</p> */}
//     </div>
//   );
// }
// export default DiagnosCode;
import React, { Component } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

class DiagnosCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.diagnosCodeData,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      data: [
        ...prevState.data,
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
    }));
  };

  handleChange = (e, i) => {
    const { name, value } = e.target;
    const { data } = this.state;
    const updatedData = [...data];
    updatedData[i][name] = value;
    this.setState({ data: updatedData });
    this.props.onDataChange(updatedData);
  };

  handleClickCheckBox = (e, i) => {
    const { name, checked } = e.target;
    const { data } = this.state;
    const updatedData = [...data];
    
    if (name === "both" && checked === true) {
      updatedData[i].left = true;
      updatedData[i].right = true;
    } 
    
    if (name === "both" && checked === false) {
      updatedData[i].left = false;
      updatedData[i].right = false;
      updatedData[i].both = false;
    } 
    
    if (name === "left" && checked === false) {
      updatedData[i].both = false;
    } 
    
    if (name === "right" && checked === false) {
      updatedData[i].both = false;
    } 
    
    updatedData[i][name] = checked;
    this.setState({ data: updatedData });
    this.props.onDataChange(updatedData);
  };

  handleDelete = (i) => {
    const { data } = this.state;
    const updatedData = [...data];
    updatedData.splice(i, 1);
    this.setState({ data: updatedData });
    this.props.onDataChange(updatedData);
  };
  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">DIAGNOSIS</TableCell>
                <TableCell align="center">ICD 10 CODES</TableCell>
                <TableCell align="center">PROCEDURE</TableCell>
                <TableCell align="center">RSVCODES</TableCell>
                <TableCell align="center">DATE OF PROCEDURE</TableCell>
                <TableCell align="center">LEFT</TableCell>
                <TableCell align="center">RIGHT</TableCell>
                <TableCell align="center">BOTH</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={this.handleClick}
                  >
                    Add
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((val, i) => (
                <TableRow key={i}>
                  <TableCell align="center">
                    <TextField
                      id={`pDischargeDiagnosis-${i}`}
                      fullWidth
                      name="pDischargeDiagnosis"
                      type="text"
                      size="small"
                      value={val.pDischargeDiagnosis}
                      onChange={(e) => this.handleChange(e, i)}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      id={`pICDCode-${i}`}
                      fullWidth
                      name="pICDCode"
                      size="small"
                      value={val.pICDCode}
                      onChange={(e) => this.handleChange(e, i)}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      id={`pRelatedProcedure-${i}`}
                      fullWidth
                      name="pRelatedProcedure"
                      size="small"
                      value={val.pRelatedProcedure}
                      onChange={(e) => this.handleChange(e, i)}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      id={`pRVSCode-${i}`}
                      fullWidth
                      name="pRVSCode"
                      size="small"
                      value={val.pRVSCode}
                      onChange={(e) => this.handleChange(e, i)}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      id={`pProcedureDate-${i}`}
                      fullWidth
                      name="pProcedureDate"
                      type="Date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      size="small"
                      value={val.pProcedureDate}
                      onChange={(e) => this.handleChange(e, i)}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="left"
                          checked={val.left}
                          onChange={(e) => this.handleClickCheckBox(e, i)}
                        />
                      }
                    />
                  </TableCell>
                  <TableCell align="center">
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="right"
                          checked={val.right}
                          onChange={(e) => this.handleClickCheckBox(e, i)}
                        />
                      }
                    />
                  </TableCell>
                  <TableCell align="center">
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="both"
                          checked={val.both}
                          onChange={(e) => this.handleClickCheckBox(e, i)}
                        />
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => this.handleDelete(i)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <p>{JSON.stringify(this.state.data)}</p> */}
      </div>
    );
  }
}

export default DiagnosCode;
