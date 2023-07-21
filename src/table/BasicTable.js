import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const getTemperature = (arrayMax, arrayMin, start, end) => {
  const sliceArrayMax = arrayMax?.slice(start, end);
  const sliceArrayMin = arrayMin?.slice(start, end);
  const maxTemperature = sliceArrayMax?.reduce(
    (acc, val, _, arr) => acc + val / arr.length,
    0
  );
  const minTemperature = sliceArrayMin?.reduce(
    (acc, val, _, arr) => acc + val / arr.length,
    0
  );
  return `${Math.round(maxTemperature)}°/${Math.round(minTemperature)}°`;
};

const getRain = (rainArray, start, end) => {
  const sliceArray = rainArray?.slice(start * 24, end * 24);
  const result = sliceArray?.filter((el) => el !== 0).length / 24;
  return `${Math.ceil(result)} Дней`;
};
export default function BasicTable({
  headTable,
  bodyTable,
  maxTemperature,
  miTemperature,
  rain,
}) {
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
          {bodyTable &&
            Object.entries(bodyTable).map(([_, value]) => (
              <TableRow key={value.name}>
                <TableCell component="th" scope="row">
                  {value.name}
                </TableCell>
                <TableCell align="left">
                  {maxTemperature && miTemperature
                    ? getTemperature(
                        maxTemperature,
                        miTemperature,
                        value.start,
                        value.end
                      )
                    : "Загрузка..."}
                </TableCell>
                <TableCell align="left">
                  {rain ? getRain(rain, value.start, value.end) : "Загрузка..."}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
