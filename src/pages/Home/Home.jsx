import React from "react";
import { ConCalc } from "../../components";
import * as S from "./Home.styled";

function Home() {
  // link is saved at .env  file as environmental variable
  return (
    <S.Block>
      <ConCalc apiLink={`${process.env.REACT_APP_CON_CALC_API}`} />
    </S.Block>
  );
}

export default Home;
