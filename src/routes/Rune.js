import React from "react";
import { Redirect } from "react-router";

import RuneSelector from "../components/RuneSelector";
import RuneDisplayer from "../components/RuneDisplayer";
import RWDisplayer from "../components/RWDisplayer";
import RuneOrderDisplayer from "../components/RuneOrderDisplayer";
import RelatedRecipeDisplayer from "../components/RelatedRecipeDisplayer";

import Runedatas from "../datas/runes.json";
import RWChests from "../datas/RWChest.json";
import RWHelms from "../datas/RWHelm.json";
import RWWeapons from "../datas/RWWeapon.json";
import RWShields from "../datas/RWShield.json";

import { Container, Divider } from "@mui/material";

const Rune = ({ match }) => {
  const { rune } = match.params;
  // console.log(Runedatas);

  // const styles = {};

  const containerTextSx = {
    component: "div",
    display: "flex",
    // border: 1.2,
    // borderBottom: 1.2,
    // borderColor: "rgba(0,0,0,0.2)",
    // borderColor: "secondary",
    // borderRadius: 1,
    p: 1,
    fontSize: 20,
    mt: 3,
    // m: 1,
    // mx: "7px",
    minWidth: "100%",
  };

  const rune_rawData = Runedatas.filter(
    (x) => x.engName.toLowerCase() === rune.toLowerCase()
  )[0];

  const relatedRWChest = () => {
    return RWChests.filter((RW) =>
      RW.reqRunes.split(" ").includes(rune_rawData.number.toString())
    ).sort((a, b) => a.reqLvl > b.reqLvl);
  };
  const relatedRWHelm = () => {
    return RWHelms.filter((RW) =>
      RW.reqRunes.split(" ").includes(rune_rawData.number.toString())
    ).sort((a, b) => a.reqLvl > b.reqLvl);
  };
  const relatedRWWeapon = () => {
    return RWWeapons.filter((RW) =>
      RW.reqRunes.split(" ").includes(rune_rawData.number.toString())
    ).sort((a, b) => a.reqLvl > b.reqLvl);
  };
  const relatedRWShield = () => {
    return RWShields.filter((RW) =>
      RW.reqRunes.split(" ").includes(rune_rawData.number.toString())
    ).sort((a, b) => a.reqLvl > b.reqLvl);
  };

  const containerText = (text) => {
    return (
      <div>
        <Container component="div" sx={containerTextSx}>
          {text}
        </Container>
        <Divider sx={{ mb: 3 }} />
      </div>
    );
  };

  return (
    <>
      {rune_rawData ? (
        <>
          <div>
            {/* <p>{rune}의 룬페이지입니당</p> */}
            <div>
              <RuneSelector rune={rune} />
            </div>
            <div>
              {containerText("룬 서열")}
              <RuneOrderDisplayer rune={rune_rawData} />
            </div>
            <div>
              {containerText("룬 정보")}
              <RuneDisplayer rune={rune_rawData} />
            </div>
            <div>
              {containerText("관련 조합법")}
              <RelatedRecipeDisplayer rune={rune_rawData} />
            </div>
            <div>
              {containerText("관련 룬워드")}
              <div>
                <div>
                  {relatedRWHelm().length ? (
                    <>
                      {containerText("투구")}
                      <RWDisplayer RWList={relatedRWHelm()} />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <div>
                  {relatedRWWeapon().length ? (
                    <>
                      {containerText("무기")}
                      <RWDisplayer RWList={relatedRWWeapon()} />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <div>
                  {relatedRWChest().length ? (
                    <>
                      {containerText("갑옷")}
                      <RWDisplayer RWList={relatedRWChest()} />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <div>
                  {relatedRWShield().length ? (
                    <>
                      {containerText("방패")}
                      <RWDisplayer RWList={relatedRWShield()} />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* 잘못된 룬이름으로 접근시 리다이렉트 */}
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        </>
      )}
    </>
  );
};

export default Rune;
