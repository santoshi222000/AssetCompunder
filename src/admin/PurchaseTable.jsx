import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
  email: String,
  phone: number,
  course: string,
  date: number,
  price: number,
) {
  return { name, email, phone, course, date, price };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 5000),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4000),
  createData('Eclair', 262, 16.0, 24, 6.0, 3000),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2000),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 4000),
];

export default function CustomizedTables() {
  return (
    <TableContainer style={{width: "95%"}} component={Paper}>
        <h2 style={{marginTop: "20px"}}>Purchase Order</h2>
      <Table style={{marginTop: "50px"}} sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Course</StyledTableCell>
            <StyledTableCell align="right">Date of Purchase</StyledTableCell>
            <StyledTableCell align="right">Course Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              <StyledTableCell align="right">{row.course}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
