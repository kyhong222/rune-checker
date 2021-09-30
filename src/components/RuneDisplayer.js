import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  List,
  ListItemText,
} from "@mui/material";

export default function RuneDisplayer(props) {
  const rune = props.rune; // number, engName, korName, specWithWeapon, specWithHelmNChest, reqLvl, reqToUp, note
  // console.log("rune", rune);
  const tableRowSx = { "&:last-child td, &:last-child th": { border: 0 } };

  const listText = (lists) => {
    return (
      <List>
        {lists.map((element, i) => (
          <ListItemText key={i} alignItems="center">
            {element}
          </ListItemText>
        ))}
      </List>
    );
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label="rune display table">
          <TableBody>
            <TableRow sx={{ tableRowSx }}>
              <TableCell align="center" colSpan={1}>
                {/* {"image"} */}
                {"이름"}
              </TableCell>
              <TableCell align="center" colSpan={4}>
                {`[${rune.number}] ${rune.korName} / ${rune.engName}`}
              </TableCell>
            </TableRow>
            <TableRow sx={{ tableRowSx }}>
              <TableCell align="center" colSpan={1}>
                레벨 제한
              </TableCell>
              <TableCell align="center" colSpan={4}>
                {`${rune.reqLvl} 레벨 이상`}
              </TableCell>
            </TableRow>
            <TableRow sx={{ tableRowSx }}>
              <TableCell align="center" colSpan={1}>
                무기 장착시
              </TableCell>
              <TableCell align="center" colSpan={4}>
                {listText(rune.specWithWeapon)}
              </TableCell>
            </TableRow>
            <TableRow sx={{ tableRowSx }}>
              <TableCell align="center" colSpan={1}>
                투구/갑옷 장착시
              </TableCell>
              <TableCell align="center" colSpan={4}>
                {listText(rune.specWithHelmNChest)}
              </TableCell>
            </TableRow>
            <TableRow sx={{ tableRowSx }}>
              <TableCell align="center" colSpan={1}>
                방패 장착시
              </TableCell>
              <TableCell align="center" colSpan={4}>
                {listText(rune.specWithShield)}
              </TableCell>
            </TableRow>
            {rune.note ? (
              <TableRow sx={{ tableRowSx }}>
                <TableCell align="center" colSpan={1}>
                  비고
                </TableCell>
                <TableCell align="center" colSpan={4}>
                  {rune.note}
                </TableCell>
              </TableRow>
            ) : (
              <></>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
