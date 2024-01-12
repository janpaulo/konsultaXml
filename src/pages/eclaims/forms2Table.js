import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";


class forms2Table extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  render() {
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
                <TableCell></TableCell>
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
              </TableRow>
              <TableRow>
                <TableCell>2nd</TableCell>
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
                <TableCell></TableCell>
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
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell><b>Total Case Rate Amount</b></TableCell>
                <TableCell></TableCell>
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
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}

export default forms2Table;
