import React from "react";
import Accordion from "react-bootstrap/Accordion";
import FilterBtn from "./FilterBtn";

const Species = ({ setSpecies, setPageNumber }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Species</Accordion.Header>
        <Accordion.Body className="d-flex flex-wrap gap-2">
          {species.map((x, index) => {
            return (
              <FilterBtn
                task={setSpecies}
                setPageNumber={setPageNumber}
                x={x}
                name={species}
                index={index}
                key={index}
              />
            );
          })}
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default Species;
