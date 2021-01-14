import { storiesOf } from "@storybook/react";
import React from "react";
import CurrCon from "./CurrCon";

storiesOf("Currency Converter", module).add("CurrCon", () => (
  <CurrCon apiLink={`https://api.coindesk.com/v1/bpi/currentprice.json`} />
));
