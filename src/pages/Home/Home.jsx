import React, { useEffect, useState } from "react";

function Home() {
  const [inputData, setInputData] = useState(0);
  const [apiData, setApiData] = useState();
  const [display, setDisplay] = useState({ one: true, two: true, three: true });

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.bpi);
        setApiData(data);
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
    </>
  );
}

export default Home;
