import React from "react";
import RuneSelector from "../components/RuneSelector";
import Runedatas from "../datas/runes.json";
import RuneDisplayer from "../components/RuneDisplayer";

const Rune = ({ match }) => {
  const { rune } = match.params;

  const rune_rawData = Runedatas.filter(
    (x) => x.engName.toLowerCase() === rune.toLowerCase()
  )[0];

  // console.log("rune_rawData", rune_rawData)
  return (
    <div>
      <p>{rune}의 룬페이지입니당</p>
      <div>
        <RuneSelector rune={rune} />
      </div>
      <div>
        <RuneDisplayer rune={rune_rawData} />
      </div>
    </div>
  );
};

export default Rune;
