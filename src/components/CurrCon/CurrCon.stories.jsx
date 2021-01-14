import { storiesOf } from "@storybook/react";
import React from "react";
import CurrCon from "./CurrCon";

storiesOf("Currency Converter", module).add("CurrCon", () => (
  <CurrCon apiLink={`${process.env.REACT_APP_CON_CALC_API}`} />
));
