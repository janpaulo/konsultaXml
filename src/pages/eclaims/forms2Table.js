import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { NumericFormat } from "react-number-format";


class forms2Table extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      data2: [],
      autocompleteOptions: [],
    };
  }

  componentDidMount() {
    this.fetchAutocompleteData();
  }

  async fetchAutocompleteData() {
    try {
      const response = await axios.get("your-autocomplete-api-endpoint");
      const options = response.data; // Assuming API returns an array of options
      this.setState({ autocompleteOptions: options });
    } catch (error) {
      console.error("Error fetching autocomplete data:", error);
    }
  }

  handleAutocompleteChange = (e, newValue, icd2) => {
    if(icd2 === undefined){

      this.setState({ data: newValue });
    }else{
      this.setState({ data2: newValue });
    }
    // const newData = [...this.state.data];
    // newData[i].selecttedICD = newValue;
    // this.props.onDataChange(newData);
  };

  fetchData = async (searchTerm, urlSearch) => {
    try {
      this.setState({ loading: true });
      const response = await axios.get(
        `http://localhost:3000/codes/${urlSearch}?term=${searchTerm}`
      );
      const data = response.data;
      if (Array.isArray(data)) {
        this.setState({ autocompleteOptions: data });
      } else {
        this.setState({ autocompleteOptions: [] });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { data, data2, autocompleteOptions } = this.state;
    console.log(data2)
    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell rowSpan={2}>Case Rate</TableCell>
                <TableCell rowSpan={2} align="center">
                  ICD 10 CODE
                </TableCell>
                <TableCell rowSpan={2} align="center">
                  RVS CODE
                </TableCell>

                <TableCell colSpan={2} align="center">
                  CASE RATE GROUP
                </TableCell>
                <TableCell colSpan={2} align="center">
                  Amount
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">CODE</TableCell>
                <TableCell align="center">DESCRIPTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1st</TableCell>
                <TableCell>
                  <Autocomplete
                    style={{ width: "200px" }}
                    size="small"
                    options={autocompleteOptions}
                    getOptionLabel={(option) => option.icd_10_code}
                    // value={val.selecttedICD} // Provide a value prop to control the component
                    onChange={(e, newValue) =>
                      this.handleAutocompleteChange(e, newValue)
                    }
                    renderInput={(params) => (
                      <TextField {...params} label="ICD Codes" />
                    )}
                    onInputChange={(e, newInputValue) => {
                      this.fetchData(newInputValue, "serchICDAutocomplete");
                    }}
                    disabled={ data !== null ? true : ""}
                  />
                </TableCell>
                <TableCell>
                  {" "}
                  <Autocomplete
                    style={{ width: "200px" }}
                    size="small"
                    options={autocompleteOptions}
                    getOptionLabel={(option) => option.rvs_code}
                    // value={val.selecttedICD} // Provide a value prop to control the component
                    onChange={(e, newValue) =>
                      this.handleAutocompleteChange(e, newValue)
                    }
                    renderInput={(params) => (
                      <TextField {...params} label="RVS Codes"  />
                    )}
                    onInputChange={(e, newInputValue) => {
                      this.fetchData(newInputValue, "serchRVSAutocomplete");
                    }}
                    // disabled={ data !== null ? true : ""}
                  />
                </TableCell>
                <TableCell>
                  {" "}
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
                </TableCell>
                <TableCell>
                  <textarea
                    value={data === null ?  "":  data.description}
                    disabled
                    style={{ width: "100%", height: "100%" }}
                    onChange={this.props.onchange}
                  />
                </TableCell>
                <TableCell>


                <NumericFormat
                disabled
                 size="small"
                  value={data === null ? "" : parseFloat("00" + data.case_rate)}
                  thousandSeparator
                  decimalSeparator="."
                  customInput={TextField}
                />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2nd</TableCell>
                <TableCell>
                <Autocomplete
                    style={{ width: "200px" }}
                    size="small"
                    options={autocompleteOptions}
                    getOptionLabel={(option) => option.icd_10_code}
                    // value={val.selecttedICD} // Provide a value prop to control the component
                    onChange={(e, newValue) =>
                      this.handleAutocompleteChange(e, newValue, "icd2")
                    }
                    renderInput={(params) => (
                      <TextField {...params} label="ICD Codes" />
                    )}
                    onInputChange={(e, newInputValue) => {
                      this.fetchData(newInputValue, "serchICDAutocomplete");
                    }}
                  />
                </TableCell>
                <TableCell>
                <Autocomplete
                    style={{ width: "200px" }}
                    size="small"
                    options={autocompleteOptions}
                    getOptionLabel={(option) => option.rvs_code}
                    // value={val.selecttedICD} // Provide a value prop to control the component
                    onChange={(e, newValue) =>
                      this.handleAutocompleteChange(e, newValue, "icd2")
                    }
                    renderInput={(params) => (
                      <TextField {...params} label="RVS Codes" />
                    )}
                    onInputChange={(e, newInputValue) => {
                      this.fetchData(newInputValue, "serchRVSAutocomplete");
                    }}
                  />
                </TableCell>
                <TableCell>
                  {" "}
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
                </TableCell>
                <TableCell>
                  <textarea
                    value={data2 === null ?  "":  data2.description}
                    style={{ width: "100%", height: "100%" }}
                    onChange={this.props.onchange}
                  />
                </TableCell>
                <TableCell>
                <NumericFormat
                   disabled
                 size="small"
                  value={data2 === null ? "" : parseFloat("00" + data2.case_rate)}
                  thousandSeparator
                  decimalSeparator="."
                  customInput={TextField}
                />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <b>Total Case Rate Amount</b>
                </TableCell>
                <TableCell></TableCell>
                <TableCell>
                <NumericFormat
                   disabled
                 size="small"
                 value={data2 === null  && data2 === null ? "" : parseFloat("00"  +( data2.case_rate + data2.case_rate))}
                  thousandSeparator
                  decimalSeparator="."
                  customInput={TextField}
                />
                
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}

export default forms2Table;
