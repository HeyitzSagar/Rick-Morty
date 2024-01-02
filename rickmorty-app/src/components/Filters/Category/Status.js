import React from "react";
import Accordion from "react-bootstrap/Accordion";
import FilterBtn from "./FilterBtn";

const Status = ({setStatus, setPageNumber}) => {
  let Status = ["Alive", "Dead", "Unknown"];
  return (
    <div>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Status</Accordion.Header>
        <Accordion.Body className="d-flex flex-wrap gap-2" >
          {Status.map((x, index) => (
            <FilterBtn task={setStatus} setPageNumber={setPageNumber} key={index} name="Status" x={x} index={index} />
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default Status;
