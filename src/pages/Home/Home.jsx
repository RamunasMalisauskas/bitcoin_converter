import React, { useEffect, useState } from "react";

function Home() {
  const [inputData, setInputData] = useState(0);
  const [apiData, setApiData] = useState();
  const [display, setDisplay] = useState({ one: true, two: true, three: true });

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);

        setInterval(() => setApiData(data), 60000);
      });
  }, []);

  return (
    <>
      <input
        onChange={(e) => setInputData(e.target.value)}
        type="number"
        name="btc"
        id="btc"
        placeholder="enter bitcoin"
      />

      {(!display.one || !display.two || !display.three) && (
        <select>
          {!display.one && (
            <option onClick={() => setDisplay({ ...display, one: true })}>
              {apiData.bpi.USD.code}
            </option>
          )}
          {!display.two && (
            <option onClick={() => setDisplay({ ...display, two: true })}>
              {apiData.bpi.GBP.code}
            </option>
          )}
          {!display.three && (
            <option onClick={() => setDisplay({ ...display, three: true })}>
              {apiData.bpi.EUR.code}
            </option>
          )}
        </select>
      )}

      {apiData && (
        <>
          {display.one && (
            <>
              <div>{apiData.bpi.USD.code}</div>
              <div>
                {parseInt(
                  apiData.bpi.USD.rate_float * inputData,
                  10
                ).toLocaleString("en-US", {
                  style: "currency",
                  currency: apiData.bpi.USD.code,
                })}
              </div>
              <button onClick={() => setDisplay({ ...display, one: false })}>
                X
              </button>
            </>
          )}

          {display.two && (
            <>
              <div>{apiData.bpi.GBP.code}</div>
              <div>
                {parseInt(
                  apiData.bpi.GBP.rate_float * inputData,
                  10
                ).toLocaleString("en-US", {
                  style: "currency",
                  currency: apiData.bpi.GBP.code,
                })}
              </div>
              <button onClick={() => setDisplay({ ...display, two: false })}>
                X
              </button>
            </>
          )}

          {display.three && (
            <>
              <div>{apiData.bpi.EUR.code}</div>
              <div>
                {parseInt(
                  apiData.bpi.EUR.rate_float * inputData,
                  10
                ).toLocaleString("en-US", {
                  style: "currency",
                  currency: apiData.bpi.EUR.code,
                })}
              </div>
              <button onClick={() => setDisplay({ ...display, three: false })}>
                X
              </button>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Home;
