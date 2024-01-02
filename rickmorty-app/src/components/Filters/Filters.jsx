import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Filters.css";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";
const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  const clear = () => {
    setStatus("");
    setPageNumber("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  };
  return (
    <div className="text-white col-lg-3 col-12 mt-5">
      <div className="text-center fs-4 mt-5 fw-bold">Filter</div>
      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mb-4"
      >
        <button className="btn btn-danger">Clear Filters</button>
      </div>
      <Accordion defaultActiveKey="0">
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
      </Accordion>
    </div>
  );
};

export default Filters;
