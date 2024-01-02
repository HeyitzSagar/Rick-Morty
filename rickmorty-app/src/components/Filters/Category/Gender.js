import React from "react";
import Accordion from "react-bootstrap/Accordion";
import FilterBtn from "./FilterBtn";

const Gender = ({setGender, setPageNumber}) => {
  let Gender = ["female", "male", "genderless", "unknown"];
  return (
    <div>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Gender</Accordion.Header>
        <Accordion.Body className="d-flex flex-wrap gap-2">
          {Gender.map((x, index) => {
            return (
              <>
                <FilterBtn  setPageNumber={setPageNumber} task={setGender} name="Gender" index={index} key={index} x={x} />
              </>
            );
          })}
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default Gender;
