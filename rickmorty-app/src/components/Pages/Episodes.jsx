import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import InputGroup from "../Filters/Category/InputGroup";

const Episodes = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  let { air_date, name } = info;
  let api = `https://rickandmortyapi.com/api/episode/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      let a = await Promise.all(
        data.characters.map(async (x) => {
          const res = await fetch(x);
          return await res.json();
        })
      );
      setResults(a);
    })();
  }, [api]);
  return (
    <div className="container">
      <div className="row text-white mb-4">
        <h1 className="text-center mb-3">
          Episode:
          <span className="text-danger">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date: {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 cl-12">
          <h4 className="text-center text-white">Pick Episodes</h4>
          <InputGroup setId={setId} name="Episodes" total={51} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
