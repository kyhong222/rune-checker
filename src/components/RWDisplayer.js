import * as React from "react";
import {
  TableCell,
  TableBody,
  TableRow,
  Table,
  TableContainer,
  List,
  ListItemText,
  Paper,
} from "@mui/material";

import runeDatas from "../datas/runes.json";

export default function RWDisplayer(props) {
  // props로 보여줘야할 룬워드 객체들을 받아온 후
  // 해당 룬워드들을 디스플레이

  const RWList = props.RWList;

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

  const runeNumberToName = (number) => {
    return runeDatas[number - 1].korName;
  };

  const RWSpec = (spec) => {
    return listText(spec.split("\n"));
  };
  const RWTemplete = (RW) => {
    // RW = 룬워드 객체
    // 렙제, 이름, 룬재료, 베이스, 옵션
    // 비고는 일단 생략
    return (
      <TableBody>
        <TableRow sx={{ tableRowSx }}>
          <TableCell align="center">{RW.reqLvl}</TableCell>
          <TableCell align="center">
            {RW.remakeName === RW.legacyName
              ? `${RW.remakeName}`
              : `${RW.remakeName} / ${RW.legacyName}`}
          </TableCell>
          <TableCell align="center">
            {RW.reqRunes.split(" ").map((x) => `${runeNumberToName(x)} `)}
          </TableCell>
          <TableCell align="center">{RW.base}</TableCell>
          <TableCell align="center">{RWSpec(RW.spec)}</TableCell>
        </TableRow>
      </TableBody>
    );
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label="RW display table">
          {RWList.map((x) => RWTemplete(x))}
          {/* {RWList.map((x) => x.engName)} */}
        </Table>
      </TableContainer>
    </div>
  );
}
