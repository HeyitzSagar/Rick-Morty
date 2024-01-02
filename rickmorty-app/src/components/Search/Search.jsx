import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Search = ({ setPageNumber, setSearch }) => {
  return (
    <>
      <Form className="d-flex  text-center">
        <Form.Control
          onChange={(e) => {
            setPageNumber(1);
            setSearch(e.target.value);
          }}
          type="search"
          placeholder="Search Characters"
          style={{ width: "300px" }}
          className="me-2 mx-auto"
          aria-label="Search"
        />
        <Button
          onClick={(e) => {
            e.preventDefault();
          }}
          variant="outline-success"
        >
          Search
        </Button>
      </Form>
    </>
  );
};

export default Search;
