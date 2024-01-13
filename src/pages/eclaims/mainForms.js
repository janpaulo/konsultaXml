import React from "react";
import Typography from "@mui/material/Typography";
import Forms from "./forms";
import Forms2 from "./forms2";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from '@mui/material/Box';


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
      items: [],
      value: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(params) {
    console.log("here me");
    //   this.setState({
    //     bank: {
    //       ...this.state.bank,
    //       name: e.target.value
    //     }
    //   })
  }

  handleChange(event, newValue) {
    this.setState({ value: newValue });
  }

  handleInputChange(e) {
    console.log(e.target.value);
    this.setState({
      item: {
        ...this.state.item,
        [e.target.name]: e.target.value,
      },
    });
  }

  render() {
    console.log(this.state.item);
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
            <Forms2
              handleClick={this.handleSubmit}
              onchange={this.handleInputChange}
            />
          </CustomTabPanel>
          <CustomTabPanel value={this.state.value} index={1}>
          <Forms2
              handleClick={this.handleSubmit}
              onchange={this.handleInputChange}
            />
          </CustomTabPanel>

         
        </div>
      </>
    );
  }
}

export default mainForms;
