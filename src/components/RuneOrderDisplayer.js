import * as React from "react";
import { TableCell, TableBody, TableHead, TableRow } from "@mui/material";

import runeDatas from "../datas/runes.json";

export default function RuneOrderDisplayer(props) {
  const rune = props.rune; // number, engName, korName, specWithWeapon, specWithHelmNChest, reqLvl, reqToUp, note
  // console.log("rune", rune);

  const preRune = rune.number === 1 ? {} : runeDatas[rune.number - 2];
  const postRune =
    rune.number === runeDatas.length ? {} : runeDatas[rune.number];
  const runeOrderDisplayerSx = {
    // border: "2px solid rgba(224,224,224,1)",
    // border: "5px",
  };
  const runeTableSx = {
    borderRight: "1px solid rgba(224,224,224,1)",
    // border: 0,
    textAlign: "center",
    backgroundColor: "rgba(224,224,224,0.3)",
    // width: 50,
  };
  const runeUpSx = {
    borderRight: "1px solid rgba(224,224,224,1)",

    height: 100,
    // border: 1,
  };
  const runeDetailElementSx = {
    mx: "auto",
    border: 0,
    my: 0,
    py: 0,
    px: 0,
    width: 80,
    textAlign: "center",
  };
  const runeUpElementSx = {
    // borderRight: "1px solid rgba(224,224,224,1)",
    mx: "auto",
    border: 0,
    my: 0,
    py: 0,
    px: 0,
    width: 90,
    height: 30,
    textAlign: "center",
  };
  const reqQuantity = (rune) => (rune.number >= 21 ? 2 : 3);
  const runeDetail = (rune) => {
    return (
      <TableCell sx={runeTableSx}>
        <TableRow>
          <TableCell
            sx={runeDetailElementSx}
          >{`[${rune.number}] ${rune.korName}`}</TableCell>
        </TableRow>
        {/* <TableRow>
          <TableCell sx={runeDetailElementSx}>{rune.korName}</TableCell>
        </TableRow> */}
        <TableRow>
          <TableCell sx={runeDetailElementSx}>{rune.engName}</TableCell>
        </TableRow>
      </TableCell>
    );
  };
  const runeUpDisplayer = (rune) => {
    return (
      <TableCell sx={runeUpSx}>
        <TableRow>
          <TableCell sx={runeUpElementSx}>{"→"}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={runeUpElementSx}>{`X${reqQuantity(rune)}`}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={runeUpElementSx}>{rune.reqToUp}</TableCell>
        </TableRow>
      </TableCell>
    );
  };
  return (
    <div align="center">
      <TableBody align="center" sx={{ border: "5px" }}>
        <TableRow sx={runeOrderDisplayerSx}>
          {runeDetail(preRune)}
          {runeUpDisplayer(preRune)}
          {runeDetail(rune)}
          {runeUpDisplayer(rune)}
          {runeDetail(postRune)}
        </TableRow>
      </TableBody>
    </div>
  );
}
