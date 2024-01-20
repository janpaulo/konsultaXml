import React, { useState } from "react";
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

function DiagnosCode({ itemCodes }) {
  const [data, setData] = useState([
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
  ]);
  // const [value, setValue] = useState("0.0");
  const handleClick = () => {
    setData([
      ...data,
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
    ]);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onchangeVal = [...data];
    onchangeVal[i][name] = value;
    setData(onchangeVal);
    itemCodes = onchangeVal;
  };

  const handleClickCheckBox = (e, i) => {
    const name = e.target.name;
    const value = e.target.checked;
    const onchangeVal = [...data];
    // console.log(value)

    if (name === "both" && value === true) {
      onchangeVal[i].left = true;
      onchangeVal[i].right = true;
    } 
    

    if (name === "both" && value === false) {
      onchangeVal[i].left = false;
      onchangeVal[i].right = false;
      onchangeVal[i].both = false;
    } 
    

    if (name === "left" && value === false) {
      onchangeVal[i].both = false;
    } 
    if (name === "right" && value === false) {
      onchangeVal[i].both = false;
    } 
   

    // if(onchangeVal[i].left  == false && onchangeVal[i].right  == false){
    //   onchangeVal[i].both = true;
    // }
    // console.log(onchangeVal[i].right  == false )


    onchangeVal[i][name] = value;
    setData(onchangeVal);
    // itemCodes = onchangeVal;
  };

  const handleDelete = (i) => {
    const deleteVal = [...data];
    deleteVal.splice(i, 1);
    setData(deleteVal);
  };
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
              <TableCell align="center">RIGTH</TableCell>
              <TableCell align="center">BOTH</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleClick}
                >
                  Add
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((val, i) => (
              <TableRow>
                <TableCell align="center">
                  <TextField
                    id="outlined-multiline-flexible"
                    // label="Amount"
                    // multiline
                    // maxRows={4}
                    fullWidth
                    name="pDischargeDiagnosis"
                    type="text"
                    size="small"
                    // onChange={this.props.onchange}
                    value={val.pDischargeDiagnosis}
                    onChange={(e) => handleChange(e, i)}
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    id="outlined-multiline-flexible"
                    // label="Amount"
                    // multiline
                    // maxRows={4}
                    fullWidth
                    name="pICDCode"
                    size="small"
                    // onChange={this.props.onchange}
                    value={val.pICDCode}
                    onChange={(e) => handleChange(e, i)}
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    id="outlined-multiline-flexible"
                    // label="Amount"
                    // multiline
                    // maxRows={4}
                    fullWidth
                    name="pRelatedProcedure"
                    size="small"
                    // onChange={this.props.onchange}
                    value={val.pRelatedProcedure}
                    onChange={(e) => handleChange(e, i)}
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    id="outlined-multiline-flexible"
                    // label="Amount"
                    // multiline
                    // maxRows={4}
                    fullWidth
                    name="pRVSCode"
                    size="small"
                    // onChange={this.props.onchange}
                    value={val.pRVSCode}
                    onChange={(e) => handleChange(e, i)}
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    id="outlined-multiline-flexible"
                    // label="Amount"
                    // multiline
                    // maxRows={4}
                    fullWidth
                    name="pProcedureDate"
                    type="Date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    size="small"
                    // onChange={this.props.onchange}
                    value={val.pProcedureDate}
                    onChange={(e) => handleChange(e, i)}
                  />
                </TableCell>
                <TableCell align="center">
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="left"
                        checked={val.left}
                        onClick={(e) => handleClickCheckBox(e, i)}
                      />
                    }
                    // label="Direct Filed"
                  />
                </TableCell>
                <TableCell align="center">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={val.right}
                        name="right"
                        onClick={(e) => handleClickCheckBox(e, i)}
                      />
                    }
                    // label="Direct Filed"
                  />
                </TableCell>
                <TableCell align="center">
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="both"
                        checked={val.both}
                        onClick={(e) => handleClickCheckBox(e, i)}
                      />
                    }
                    // label="Direct Filed"
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(i)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* {
                data.map((val,i)=>
                <div>
                    <input name="fname" value={val.fname} onChange={(e)=>handleChange(e,i)} />
                    <input name="lname" value={val.lname} onChange={(e)=>handleChange(e,i)} />
                    <button onClick={()=>handleDelete(i)}>Delete</button>
                </div>
                )
            } */}
      {/* <p>{JSON.stringify(data)}</p> */}
    </div>
  );
}
export default DiagnosCode;
