import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";


const NaVbar = ({ setSearch, setPageNumber }) => {
  return (
    <Navbar expand="lg" className={`navbar-color cursive mb-4`}>
      <Container fluid>
        <Navbar.Brand className="text-primary" href="/">
          Rick & <span className="text-danger">Morty</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link activeclassname="active" className="text-black" href="/">
              Characters
            </Nav.Link>
            <Nav.Link className="text-black" href="/episodes">
              Episodes
            </Nav.Link>
            <Nav.Link className="text-black" href="locations">
              Location
            </Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              onChange={(e) => {
                setPageNumber(1);
                setSearch(e.target.value);
              }}
              type="search"
              placeholder="Search Characters"
              className="me-2"
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
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NaVbar;
