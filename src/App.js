import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Rune from "./routes/Rune";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      {/* <div>룬사전 beta</div> */}
      <div>
        <Link to="/">룬사전 beta</Link>
      </div>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/runes/:rune" component={Rune} />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
