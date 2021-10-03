import * as React from "react";

import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  List,
  ListItemText,
} from "@mui/material";

import runeDatas from "../datas/runes.json";
import cubingRecipes from "../datas/cubingRecipes.json";
import craftRecipes from "../datas/craftRecipes.json";
export default function RelatedRecipeDisplayer(props) {
  const rune = props.rune;

  const relatedCubingRecipes = cubingRecipes.filter((x) =>
    x.reqRunes.split(" ").includes(rune.number.toString())
  );

  const relatedCraftingRecipes = craftRecipes.filter(
    (x) => x.reqRune === rune.number
  );

  const reqRunesToKor = (runeNumbers) => {
    const fixed = runeNumbers.split(" ");
    let string = "";
    // console.log("fixed", fixed);
    for (let i = 0; i < fixed.length; i++) {
      // console.log(runeDatas[parseInt(fixed) - 1]);
      string += runeDatas[parseInt(fixed[i]) - 1].korName;
      string += "+";
    }

    return string.substr(0, string.length - 1);
  };

  const reqRunesToEng = (runeNumbers) => {
    const fixed = runeNumbers.split(" ");
    let string = "";
    // console.log("fixed", fixed);
    for (let i = 0; i < fixed.length; i++) {
      // console.log(runeDatas[parseInt(fixed) - 1]);
      string += runeDatas[parseInt(fixed[i]) - 1].engName;
      string += "+";
    }

    return string.substr(0, string.length - 1);
  };

  const runeNumberToKorName = (number) => {
    return runeDatas[number - 1].korName;
  };

  const runeNumberToEngName = (number) => {
    return runeDatas[number - 1].engName;
  };

  const HPCommonStuff = "최상급 사파이어\n";
  const BCommonStuff = "최상급 루비\n";
  const CCommonStuff = "최상급 자수정\n";
  const SCommonStuff = "최상급 에메랄드\n";

  const HPCommonOption =
    "5%의 확률로 레벨 4 프로스트 노바 시전(공격받을 시)\n공격한 적에게 3~7의 피해를 줌\n";
  const BCommonOption = "1~3% 라이프 흡수\n+10~20 라이프\n";
  const CCommonOption = "마나 회복률 +4~10%\n+10~20 마나\n";
  const SCommonOption = "마법 대미지 감소 1~2\n대미지 감소 1~4\n";

  const cubingTable = () => {
    return (
      <Table>
        {cubingTableHead()}
        {relatedCubingRecipes.map((x) => cubingTableBodyRow(x))}
      </Table>
    );
  };
  const cubingTableHead = () => {
    return (
      <TableHead>
        <TableRow>
          <TableCell sx={cubingHeaderSx}>{"재료 아이템"}</TableCell>
          <TableCell sx={cubingHeaderSx}>{"재료 룬"}</TableCell>
          <TableCell sx={cubingHeaderSx}>{"조합 결과"}</TableCell>
        </TableRow>
      </TableHead>
    );
  };
  const cubingTableBodyRow = (recipe) => {
    return (
      <TableBody>
        <TableRow>
          <TableCell sx={cubingStuffSx}>{listText(recipe.reqItems)}</TableCell>
          <TableCell sx={runeStuffSx}>
            {listText(reqRunesToKor(recipe.reqRunes))}
          </TableCell>
          {/* <TableCell>
            {recipe.reqRunes
              .split(" ")
              .map((x) => runeNumberToKorName(parseInt(x)))}
          </TableCell> */}
          <TableCell sx={cubingResultSx}>{listText(recipe.result)}</TableCell>
        </TableRow>
      </TableBody>
    );
  };

  const craftTable = () => {
    return (
      <Table>
        {craftTableHead()}
        {relatedCraftingRecipes.map((x) => craftTableBodyRow(x))}
      </Table>
    );
  };

  const craftTableHead = () => {
    return (
      <TableHead>
        <TableRow>
          <TableCell sx={craftHeaderSx}>{"크래프팅 타입"}</TableCell>
          <TableCell sx={craftHeaderSx}>{"재료 아이템"}</TableCell>
          <TableCell sx={craftHeaderSx}>{"재료 룬"}</TableCell>
          <TableCell sx={craftHeaderSx}>{"조합 결과"}</TableCell>
        </TableRow>
      </TableHead>
    );
  };

  const craftTableBodyRow = (recipe) => {
    return (
      <TableBody>
        <TableRow>
          <TableCell sx={craftTypeSx}>
            {listText(craftTypeGenerator(recipe))}
          </TableCell>
          <TableCell sx={craftStuffSx}>
            {listText(craftBasesGenerator(recipe))}
          </TableCell>
          <TableCell sx={runeStuffSx}>
            {listText(runeNumberToKorName(recipe.reqRune))}
          </TableCell>
          <TableCell sx={craftResultSx}>
            {listText(craftOptionGenerator(recipe))}
          </TableCell>
        </TableRow>
      </TableBody>
    );
  };

  const craftTypeGenerator = (recipe) => {
    if (recipe.craftingType === "hitPower") return "힛파워";
    else if (recipe.craftingType === "blood") return "블러드";
    else if (recipe.craftingType === "caster") return "캐스터";
    else return "세이프티";
  };

  const craftBasesGenerator = (recipe) => {
    let string = "";
    if (recipe.craftingType === "hitPower") {
      string += HPCommonStuff;
    } else if (recipe.craftingType === "blood") {
      string += BCommonStuff;
    } else if (recipe.craftingType === "caster") {
      string += CCommonStuff;
    } else {
      string += SCommonStuff;
    }
    string += "주얼\n";
    string += recipe.bases;
    return string;
  };

  const craftOptionGenerator = (recipe) => {
    let string = "";
    if (recipe.craftingType === "hitPower") {
      string += HPCommonOption;
    } else if (recipe.craftingType === "blood") {
      string += BCommonOption;
    } else if (recipe.craftingType === "caster") {
      string += CCommonOption;
    } else {
      string += SCommonOption;
    }
    string += recipe.options;

    return string;
  };

  const listText = (lists) => {
    const fixed = lists.split("\n");
    return (
      <List>
        {fixed.map((element, i) => (
          <ListItemText key={i} alignItems="center">
            {element}
          </ListItemText>
        ))}
      </List>
    );
  };

  const cubingHeaderSx = {
    textAlign: "center",
    borderRight: "1px solid rgba(224,224,224,1)",
    backgroundColor: "rgba(224,224,224,0.5)",
  };
  const cubingStuffSx = {
    textAlign: "center",
    width: 180,
    borderRight: "1px solid rgba(224,224,224,1)",
  };
  const cubingResultSx = { textAlign: "center" };
  const craftHeaderSx = {
    textAlign: "center",
    borderRight: "1px solid rgba(224,224,224,1)",
    backgroundColor: "rgba(224,224,224,0.5)",
  };
  const craftTypeSx = {
    textAlign: "center",
    borderRight: "1px solid rgba(224,224,224,1)",
    width: 80,
  };
  const craftStuffSx = {
    textAlign: "center",
    borderRight: "1px solid rgba(224,224,224,1)",
    width: 280,
  };
  const craftResultSx = {
    textAlign: "center",
    borderRight: "1px solid rgba(224,224,224,1)",
  };
  const runeStuffSx = {
    textAlign: "center",
    borderRight: "1px solid rgba(224,224,224,1)",
    width: 70,
  };

  return (
    <div>
      {/* {`${rune.korName}의 조합법`} */}
      {/* <div>{`${rune.korName} 관련 큐빙`}</div> */}
      {cubingTable()}
      <div>{`관련 크래프팅`}</div>
      {craftTable()}
    </div>
  );
}
