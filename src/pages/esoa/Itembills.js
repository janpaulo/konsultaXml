import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

function Itembills({ itembills }){
    const [data,setData]=useState([{pServiceDate:"",pItemCode:"",pUnitOfMeasurement:"",pItemName:"",pUnitPrice:"",pQuantity:"",pTotalAmount:""}])
    // const [value, setValue] = useState("0.0");
    const handleClick=()=>{
        setData([...data,{pServiceDate:"",pItemCode:"",pUnitOfMeasurement:"",pItemName:"",pUnitPrice:"",pQuantity:"",pTotalAmount:""}])
    }
    const handleChange=(e,i)=>{
        const {name,value}=e.target
        const onchangeVal = [...data]
        onchangeVal[i][name]=value
        setData(onchangeVal)
        itembills = onchangeVal
    }
    const handleDelete=(i)=>{
        const deleteVal = [...data]
        deleteVal.splice(i,1)
        setData(deleteVal)
    }
    return(
        <div className="App">

            <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Service Date</TableCell>
                <TableCell align="center">Item Code</TableCell>
                <TableCell align="center">Item Name</TableCell>
                <TableCell align="center">Unit Of Measurement</TableCell>
                <TableCell align="center">Unit Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Total Amount</TableCell>
                <TableCell align="center">
            <Button variant="contained" color="success" onClick={handleClick}>Add</Button></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

            {
                data.map((val,i)=>
              <TableRow>
                <TableCell align="center">
                  <TextField
                    id="outlined-multiline-flexible"
                    // label="Amount"
                    // multiline
                    // maxRows={4}
                    fullWidth
                    name="pServiceDate"
                    type="date"
                    size="small"
                    // onChange={this.props.onchange}
                    value={val.pServiceDate} onChange={(e)=>handleChange(e,i)} 
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    id="outlined-multiline-flexible"
                    // label="Amount"
                    // multiline
                    // maxRows={4}
                    fullWidth
                    name="pItemCode"
                    size="small"
                    // onChange={this.props.onchange}
                    value={val.pItemCode} onChange={(e)=>handleChange(e,i)} 
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    id="outlined-multiline-flexible"
                    // label="Amount"
                    // multiline
                    // maxRows={4}
                    fullWidth
                    name="pItemName"
                    size="small"
                    // onChange={this.props.onchange}
                    value={val.pItemName} onChange={(e)=>handleChange(e,i)} 
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    id="outlined-multiline-flexible"
                    // label="Amount"
                    // multiline
                    // maxRows={4}
                    fullWidth
                    name="pUnitOfMeasurement"
                    size="small"
                    // onChange={this.props.onchange}
                    value={val.pUnitOfMeasurement} onChange={(e)=>handleChange(e,i)} 
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    id="outlined-multiline-flexible"
                    // label="Amount"
                    // multiline
                    // maxRows={4}
                    fullWidth
                    name="pUnitPrice"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    size="small"
                    // onChange={this.props.onchange}
                    value={val.pUnitPrice} onChange={(e)=>handleChange(e,i)} 
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    id="outlined-multiline-flexible"
                    // label="Amount"
                    // multiline
                    // maxRows={4}
                    fullWidth
                    name="pQuantity"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    size="small"
                    // onChange={this.props.onchange}
                    value={val.pQuantity} onChange={(e)=>handleChange(e,i)} 
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Amount"
                    // multiline
                    // maxRows={4}
                    fullWidth
                    name="pTotalAmount"
                    size="small"
                    disabled
                    // onChange={this.props.onchange}
                    value={val.pUnitPrice * val.pQuantity} 
                    // onChange={(e)=>handleChange(e,i)} 

                  />
                </TableCell>
                <TableCell>
                <Button variant="outlined" color="error" onClick={()=>handleDelete(i)}>Delete</Button>
                </TableCell>
              </TableRow>

              )
            }

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
    )
}
export default Itembills;