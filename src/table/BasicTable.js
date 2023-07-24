import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function BasicTable({ headTable, bodyTable, data }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {headTable &&
              headTable.map((head) => (
                <TableCell key={head.id}>{head.label}</TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            bodyTable.map((element) => (
              <TableRow key={element.month}>
                <TableCell align="left">{element.month}</TableCell>
                <TableCell align="left">{element.data}</TableCell>
                <TableCell align="left">{element.rain}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
