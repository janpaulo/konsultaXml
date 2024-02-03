import React from "react";
// import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SharedAppBar from "../../shared/SharedAppBar"

class tableList extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "ESOA",
      item: {},
      items: [],
      value: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(params) {
    console.log("here me");
  }

  render() {
    // console.log(start);
    return (
      <>
        <SharedAppBar titleName={this.state.title} esoaLink="/esoa_registration"/>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Series No</TableCell>
                <TableCell align="center">Member PIN</TableCell>
                <TableCell align="center">Date Admited</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Date Created</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
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

export default tableList;
