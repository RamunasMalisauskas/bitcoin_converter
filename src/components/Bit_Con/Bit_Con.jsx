import React, { useEffect, useState } from "react";
import * as S from "./Bit_Con.styled";
import PropType from "prop-types";

function Bit_Con({ apiLink }) {
  /* First hook is used to set input data (bitcoin input) and use it in conversion.
  Initial value to display is set to zero. */
  const [inputData, setInputData] = useState(0);
  // Second hook is used su save and use data from API
  const [apiData, setApiData] = useState();
  // Last hook is used as a display porperty for currency blocks and dropdown bar
  const [display, setDisplay] = useState({ one: true, two: true, three: true });

  // useEffect is used to get data from API in first lifecicles first phase (constructor)
  useEffect(() => {
    //  apiLink has been used as component prop
    fetch(apiLink)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);

        // After the data has been converted into json format and saved into second hook ->
        // -> interval is set to update the date every 1 min (60000 miliseconds)
        setInterval(() => setApiData(data), 60000);
      });
  }, [apiLink]);

  return (
    <>
      <S.LabelBlock>
        <S.Label>Bitcoin Converter</S.Label>
      </S.LabelBlock>

      <S.Input
        onChange={(e) => setInputData(e.target.value)}
        type="number"
        name="btc"
        id="btc"
        placeholder="enter the amount of bitcoins"
      />

      {
        // if any of the display hooks properies has been changed - the dropdown bar becomes visible
        // with coresponding currency as the selecion option in the bar
        (!display.one || !display.two || !display.three) && (
          <S.SelectBlock>
            <S.Select
              // display hook is set by spreading (...) display array and updating
              // it with selected option value as true (to be displayed)
              onChange={(e) =>
                setDisplay({ ...display, [e.target.value]: true })
              }
            >
              <option value="">add currency</option>

              {!display.one && (
                <option value="one">{apiData.bpi.USD.code}</option>
              )}

              {!display.two && (
                <option value="two">{apiData.bpi.GBP.code}</option>
              )}

              {!display.three && (
                <option value="three">{apiData.bpi.EUR.code}</option>
              )}
            </S.Select>
          </S.SelectBlock>
        )
      }

      {
        // currency converter is becomes visible only if the data from API is set
        apiData && (
          <S.Converter>
            {display.one && (
              <S.CurrencyBlock>
                <S.Subitle>{apiData.bpi.USD.code}</S.Subitle>
                <S.ColorTitle>
                  {
                    // the converted result is formated to currency string
                    parseInt(
                      apiData.bpi.USD.rate_float * inputData,
                      10
                    ).toLocaleString("en-US", {
                      style: "currency",
                      currency: apiData.bpi.USD.code,
                    })
                  }
                </S.ColorTitle>
                <S.Button
                  // display array spread is nessesery to update individual propery not to overwrite entire array
                  onClick={() => setDisplay({ ...display, one: false })}
                >
                  X
                </S.Button>
              </S.CurrencyBlock>
            )}

            {display.two && (
              <S.CurrencyBlock>
                <S.Subitle>{apiData.bpi.GBP.code}</S.Subitle>
                <S.ColorTitle>
                  {parseInt(
                    apiData.bpi.GBP.rate_float * inputData,
                    10
                  ).toLocaleString("en-US", {
                    style: "currency",
                    currency: apiData.bpi.GBP.code,
                  })}
                </S.ColorTitle>
                <S.Button
                  onClick={() => setDisplay({ ...display, two: false })}
                >
                  X
                </S.Button>
              </S.CurrencyBlock>
            )}

            {display.three && (
              <S.CurrencyBlock>
                <S.Subitle>{apiData.bpi.EUR.code}</S.Subitle>
                <S.ColorTitle>
                  {parseInt(
                    apiData.bpi.EUR.rate_float * inputData,
                    10
                  ).toLocaleString("en-US", {
                    style: "currency",
                    currency: apiData.bpi.EUR.code,
                  })}
                </S.ColorTitle>
                <S.Button
                  onClick={() => setDisplay({ ...display, three: false })}
                >
                  X
                </S.Button>
              </S.CurrencyBlock>
            )}
          </S.Converter>
        )
      }
      {
        // if there is no API data error message is displayed
        !apiData && <div>there has been error with conversion data</div>
      }
    </>
  );
}

Bit_Con.propTypes = {
  apiLink: PropType.string,
};

export default Bit_Con;
