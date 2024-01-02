import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import InputGroup from "../Filters/Category/InputGroup";

const Location = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  let {  name, dimension } = info;
  let api = `https://rickandmortyapi.com/api/location/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      let a = await Promise.all(
        data.residents.map(async (x) => {
          const res = await fetch(x);
          return await res.json();
        })
      );
      setResults(a);
    })();
  }, [api]);
  return (
    <div className="container">
      <div className="row text-white">
        <h1 className="text-center">
          Location:
          <span className="text-danger">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center">
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12" >
          <h4 className="text-center text-white">Pick Location</h4>
          <InputGroup setId={setId} name="Location" total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
