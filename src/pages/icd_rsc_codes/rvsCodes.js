import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SharedAppBar from "../../shared/SharedAppBar"
import axios from "axios";
// import moment from "moment";

class rvsCodes extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "RVS CODES",
      item: {},
      items: [],
      value: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  componentDidMount() {
    this.handleGetClaims();
  }

  handleGetClaims = (e) => {
    axios({
      method: "GET",
      url: "http://localhost:3000/rvsCodes",
      headers: { "Content-Type": "application/json" },
      // headers: {'X-API-ACCESS-TOKEN': localStorage.getItem('api_key')}
    })
      .then((resp) => {
        this.setState({ items: resp.data.data });
        console.log(resp.data.data);
      })
      .catch((error) => {
        // Handle error
        this.setState({ error: error.message, items: [] });
      });
  };


  handleSubmit(params) {
    console.log("here me");
  }

  render() {
    const { items, error } = this.state;
    // console.log(start);
    return (
      <>
       <SharedAppBar titleName={this.state.title} esoaLink="/claims_registration"/>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">RVS CODE </TableCell>
                <TableCell align="center">DESCRIPTION</TableCell>
                <TableCell align="center">Case Rate</TableCell>
                <TableCell align="center">Professional Fee</TableCell>
                <TableCell align="center">Health Care Institution Fee</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {error && <div>Error: {error}</div>}
              {items.length > 0 ? (
                <>
                  {items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell align="center">{item.rvs_code}</TableCell>
                      <TableCell align="">{item.description}</TableCell>
                      <TableCell align="center">{item.case_rate}</TableCell>
                      <TableCell align="center">{item.professional_fee}</TableCell>
                      <TableCell align="center">{item.hci_fee}</TableCell>
                      {/* <TableCell align="center">{ moment(new Date(item.date_created)).format("MM/DD/YYYY")}</TableCell> */}
                    </TableRow>
                  ))}
                </>
              ) : (
                <div>No data available</div>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}

export default rvsCodes;
