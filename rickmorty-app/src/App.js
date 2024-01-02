import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navabar";
import Card from "./components/Card/Card";
import Filters from "./components/Filters/Filters";
import Pagination from "./components/pagination/Pagination";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import Episodes from "./components/Pages/Episodes";
import Location from "./components/Pages/Location";
import CardDetails from "./components/Card/CardDetails";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/locations/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  const [search, setSearch] = useState("");
  const [Status, setStatus] = useState("");
  const [Gender, setGender] = useState("");
  const [Species, setSpecies] = useState("");
  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${Status}&gender=${Gender}&species=${Species}`;
  let { info, results } = characters;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setCharacters(data);
    })();
  }, [api]);
  return (
    <div>
      {/* <Navbar/> */}
      <Search  setPageNumber={setPageNumber} setSearch={setSearch} />
      <h1 className="text-center text-white fs-1"> Characters</h1>
      <div className="container">
        <div className="row">
          <Filters
            setSpecies={setSpecies}
            setStatus={setStatus}
            setGender={setGender}
            setPageNumber={setPageNumber}
          />
          <div className="col-lg-8 col-12 ">
            <Card page="/" results={results} />
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </div>
  );
};

export default App;
