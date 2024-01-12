import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";


class professionalTables extends React.Component {
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
                <TableCell align="center">PMCC</TableCell>
                <TableCell align="center">PAN</TableCell>
                <TableCell align="center">NAME</TableCell>
                <TableCell align="center">DATE</TableCell>
                <TableCell align="center">SIGNED</TableCell>
                <TableCell align="center">NBB</TableCell>
                <TableCell align="center">WITH CO-PAY</TableCell>
                <TableCell align="center">CO-PAY</TableCell>
                <TableCell align="center">DEFCODES</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
             <TableRow>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}

export default professionalTables;
