import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Rune from "./routes/Rune";

const App = () => {
  return (
    <>
      <div>룬사전 beta</div>
      {/* <div>
        <Link to="/">홈으로 가기</Link>
      </div> */}
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/runes/:rune" component={Rune} />
      </div>
    </>
  );
};

export default App;
