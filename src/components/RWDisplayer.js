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
  TableHead,
} from "@mui/material";

import runeDatas from "../datas/runes.json";

export default function RWDisplayer(props) {
  // props로 보여줘야할 룬워드 객체들을 받아온 후
  // 해당 룬워드들을 디스플레이

  const RWList = props.RWList;

  const tableRowSx = { "&:last-child td, &:last-child th": { border: 0 } };
  const RWNameJoinSx = {
    minWidth: 150,
    border: 0,
    px: 1,
    py: 0,
    m: 1,
    textAlign: "center",
  };
  const RWNameSx = {
    minWidth: 150,
    border: 0,
    p: 1,
    m: 1,
    textAlign: "center",
  };
  const reqRuneSx = {
    minWidth: 200,
    border: 0,
    p: 1,
    m: 1,
    textAlign: "center",
  };
  const reqLvlColSx = {
    borderRight: "1px solid rgba(224,224,224,1)",
    textAlign: "center",
    width: 50,
  };
  const RWNameColSx = {
    borderRight: "1px solid rgba(224,224,224,1)",
    textAlign: "center",
    width: 150,
  };
  const reqRuneColSx = {
    borderRight: "1px solid rgba(224,224,224,1)",
    textAlign: "center",
    width: 200,
  };
  const baseColSx = {
    borderRight: "1px solid rgba(224,224,224,1)",
    textAlign: "center",
    width: 60,
  };
  const specColSx = {
    borderRight: "1px solid rgba(224,224,224,1)",
    textAlign: "center",
  };

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

  const runeNumberToKorName = (number) => {
    return runeDatas[number - 1].korName;
  };

  const runeNumberToEngName = (number) => {
    return runeDatas[number - 1].engName;
  };

  const RWSpec = (spec) => {
    return listText(spec.split("\n"));
  };
  const RWHead = () => {
    return (
      <TableHead sx={{ backgroundColor: "rgba(224,224,224,0.5)" }}>
        <TableRow>
          <TableCell sx={reqLvlColSx}>{"레벨제한"}</TableCell>
          <TableCell sx={RWNameColSx}>{"이름"}</TableCell>
          <TableCell sx={reqRuneColSx}>{"룬"} 재료</TableCell>
          <TableCell sx={baseColSx}>{"베이스"}</TableCell>
          <TableCell sx={specColSx}>{"옵션"}</TableCell>
        </TableRow>
      </TableHead>
    );
  };
  const RWTemplete = (RW) => {
    // RW = 룬워드 객체
    // 렙제, 이름, 룬재료, 베이스, 옵션
    // 비고는 일단 생략
    return (
      <TableBody>
        <TableRow sx={{ tableRowSx }}>
          <TableCell sx={reqLvlColSx}>{RW.reqLvl}</TableCell>
          <TableCell sx={RWNameColSx}>
            {RW.remakeName === RW.legacyName ? (
              <>
                <TableRow>
                  <TableCell sx={RWNameSx}>{`${RW.remakeName}`}</TableCell>
                </TableRow>
              </>
            ) : (
              <>
                <TableRow>
                  <TableCell sx={RWNameJoinSx}>{`${RW.remakeName}`}</TableCell>
                </TableRow>
                <TableRow sx={{ border: 0 }}>
                  <TableCell sx={RWNameJoinSx}>{`${RW.legacyName}`}</TableCell>
                </TableRow>
              </>
            )}

            {/* <TableRow>
              <TableCell sx={{ border: 0 }}>
                {RW.remakeName === RW.legacyName ? (
                  <TableCell sx={RWNameSx}>{`${RW.remakeName}`}</TableCell>
                ) : (
                  <>
                    <TableRow>
                      <TableCell
                        sx={RWNameJoinSx}
                      >{`${RW.remakeName}`}</TableCell>
                    </TableRow>
                    <TableRow sx={{ border: 0 }}>
                      <TableCell
                        sx={RWNameJoinSx}
                      >{`${RW.legacyName}`}</TableCell>
                    </TableRow>
                  </>
                )}
              </TableCell>
            </TableRow> */}
            <TableRow>
              <TableCell sx={RWNameSx}>{RW.engName}</TableCell>
            </TableRow>
          </TableCell>
          <TableCell sx={reqRuneColSx}>
            <TableRow>
              <TableCell sx={reqRuneSx}>
                {RW.reqRunes
                  .split(" ")
                  .map((x) => `${runeNumberToKorName(x)} `)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={reqRuneSx}>
                {RW.reqRunes
                  .split(" ")
                  .map((x) => `${runeNumberToEngName(x)} `)}
              </TableCell>
            </TableRow>
          </TableCell>
          <TableCell sx={baseColSx}>{RW.base}</TableCell>
          <TableCell sx={specColSx}>{RWSpec(RW.spec)}</TableCell>
        </TableRow>
      </TableBody>
    );
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label="RW display table">
          {RWHead()}
          {RWList.map((x) => RWTemplete(x))}
          {/* {RWList.map((x) => x.engName)} */}
        </Table>
      </TableContainer>
    </div>
  );
}
