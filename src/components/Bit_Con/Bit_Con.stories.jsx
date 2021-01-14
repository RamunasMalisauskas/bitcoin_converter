import { storiesOf } from "@storybook/react";
import React from "react";
import Bit_Con from "./Bit_Con";

storiesOf("Currency Converter", module).add("Bit_Con", () => (
  <Bit_Con apiLink={`https://api.coindesk.com/v1/bpi/currentprice.json`} />
));
