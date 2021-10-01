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
  const tableRowSx = {
    // "&:last-child td, &:last-child th": { border: 0 }
  };

  const tableHeadSx = {
    textAlign: "center",
    minWidth: 100,
    width: "20%",
    borderRight: "1px solid rgba(224,224,224,1)",
  };
  const tableBodySx = {
    textAlign: "center",
    borderLeft: "1px solid rgba(224,224,224,1)",
  };

  const listText = (lists) => {
    return (
      <List>
        {lists.map((element, i) => (
          <ListItemText key={i}>{element}</ListItemText>
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
              <TableCell sx={tableHeadSx}>
                {/* {"image"} */}
                {"이름"}
              </TableCell>
              <TableCell sx={tableBodySx}>
                {`[${rune.number}] ${rune.korName} / ${rune.engName}`}
              </TableCell>
            </TableRow>
            <TableRow sx={tableRowSx}>
              <TableCell sx={tableHeadSx}>{"레벨 제한"}</TableCell>
              <TableCell sx={tableBodySx}>
                {`${rune.reqLvl} 레벨 이상`}
              </TableCell>
            </TableRow>
            <TableRow sx={tableRowSx}>
              <TableCell sx={tableHeadSx}>{"무기 장착시"}</TableCell>
              <TableCell sx={tableBodySx}>
                {listText(rune.specWithWeapon)}
              </TableCell>
            </TableRow>
            <TableRow sx={tableRowSx}>
              <TableCell sx={tableHeadSx}>{"투구/갑옷 장착시"}</TableCell>
              <TableCell sx={tableBodySx}>
                {listText(rune.specWithHelmNChest)}
              </TableCell>
            </TableRow>
            <TableRow sx={tableRowSx}>
              <TableCell sx={tableHeadSx}>{"방패 장착시"}</TableCell>
              <TableCell sx={tableBodySx}>
                {listText(rune.specWithShield)}
              </TableCell>
            </TableRow>
            {rune.note ? (
              <TableRow sx={tableRowSx}>
                <TableCell sx={tableHeadSx}>{"비고"}</TableCell>
                <TableCell sx={tableBodySx}>{rune.note}</TableCell>
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
