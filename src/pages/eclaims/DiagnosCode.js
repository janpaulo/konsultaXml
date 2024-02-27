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
          pICDCode: "",
          pRVSCode: "",
          pProcedureDate: "",
          pRelatedProcedure: "",
          pLaterality: "N",
          // left: false,
          // right: false,
          // both: false,
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

  

  // handleClickCheckBox = (e, i) => {
  //   const { name, checked } = e.target;
  //   const { data } = this.state;
  //   const updatedData = [...data];

  //   if (name === "both" && checked === true) {
  //     updatedData[i].left = true;
  //     updatedData[i].right = true;
  //   }

  //   if (name === "both" && checked === false) {
  //     updatedData[i].left = false;
  //     updatedData[i].right = false;
  //     updatedData[i].both = false;
  //   }

  //   if (name === "left" && checked === false) {
  //     updatedData[i].both = false;
  //   }

  //   if (name === "right" && checked === false) {
  //     updatedData[i].both = false;
  //   }

  //   updatedData[i][name] = checked;
  //   this.setState({ data: updatedData });
  //   this.props.onDataChange(updatedData);
  // };

  handleCheckboxChange = (e, i) => {
    const { name, value, checked } = e.target;
    this.setState(prevState => {
      const newData = [...prevState.data];
      newData[i] = {
        ...newData[i],
        [name]: checked ? value : null
      };
      this.setState({ data: newData });
      this.props.onDataChange(newData);
      // return { data: newData };
    });
  }

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
                        name="pLaterality"
                          value="L"
                          checked={val.pLaterality === "L"}
                          onChange={(e) => this.handleCheckboxChange(e, i)}
                        />
                      }
                      label="Left"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <FormControlLabel
                      control={
                        <Checkbox
                        name="pLaterality"
                          value="R"
                          checked={val.pLaterality === "R"}
                          onChange={(e) => this.handleCheckboxChange(e, i)}
                        />
                      }
                      label="Right"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <FormControlLabel
                      control={
                        <Checkbox
                        name="pLaterality"
                          value="B"
                          checked={val.pLaterality === "B"}
                          onChange={(e) => this.handleCheckboxChange(e, i)}
                        />
                      }
                      label="Both"
                    />
                  </TableCell>
                 
                  {/* <TableCell align="center">
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="pLaterality"
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
                          name="pLaterality"
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
                          name="pLaterality"
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
                  </TableCell> */}
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
