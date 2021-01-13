import React from "react";
import { ConCalc } from "../../components";

function Home() {
  // link is saved at .env  file as environmental variable
  return <ConCalc apiLink={`${process.env.REACT_APP_CON_CALC_API}`} />;
}

export default Home;
