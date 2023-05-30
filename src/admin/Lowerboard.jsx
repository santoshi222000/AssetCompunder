import * as React   from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./lowerboard.css"
import {getUsers} from "../services/api.js";
import { useEffect, useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  email: string,
  phone: number,
  date: number,
) {
  return { name, email, phone, date};
}





export default function CustomizedTables() {

  const [user, setUser] = useState([])

 
  useEffect(()=>{
    getAllUsers();
    
  }, []);

  const getAllUsers = async ()=>{
    
    let res = await getUsers();
    setUser(res.data)
  }
  return (
    <TableContainer style={{width: "95%"}} component={Paper} className='table'>
      <h2>Total students</h2>
      <Table sx={{ minWidth:700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Student Name</StyledTableCell>
            <StyledTableCell align="right">Email Id</StyledTableCell>
            <StyledTableCell align="right">Phone Number</StyledTableCell>
            <StyledTableCell align="right">Date Of Register</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((e) => (
            <StyledTableRow key={e._id}>
              <StyledTableCell component="th" scope="row">
                {e.username}
              </StyledTableCell>
              <StyledTableCell align="right">{e.email}</StyledTableCell>
              <StyledTableCell align="right">{e.phone}</StyledTableCell>
              <StyledTableCell align="right">{e.createdAt}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
