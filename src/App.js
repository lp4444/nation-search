import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Search from "./Search";
import NationList from "./NationList";
import Buttons from "./Buttons";
import paginate from "./utils";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const url = "https://restcountries.eu/rest/v2/name/";
  const urlBk = "https://restcountries.eu/rest/v2/all";
  const [nations, setNations] = useState([]);
  const [pageNations, setPageNations] = useState([]);

  const [searchterm, setSearchTerm] = useState("a");
  const [page, setPage] = useState(0);
  const [curtPgNation, setCurtPgNation] = useState([]);

  const handleDownClick = () => {
    if (nations) {
      setLoading(true);
      nations.sort(function (a, b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();

        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      });
      setLoading(false);
    }

    console.log("nations", nations);
    setPageNations(paginate(nations));
    setPage(0);
  };

  const handleUpClick = () => {
    if (nations) {
      setLoading(true);
      nations.sort(function (a, b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      setLoading(false);
    }

    setPageNations(paginate(nations));

    setPage(0);
  };

  const fetchNations = async () => {
    setLoading(true);
    try {
      const urlFetch = searchterm ? url : urlBk;

      const response = await fetch(`${urlFetch}${searchterm}`);
      const data = await response.json();

      console.log("data", data);
      setNations(data);
      setPageNations(paginate(data));

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNations();
  }, [searchterm]);

  // useEffect(() => {
  //   console.log("appnations", nations);
  //   setPageNations(paginate(nations));
  //   console.log("apppageNations", pageNations);
  //   setPage(0);
  //   setCurtPgNation(pageNations[page]);
  // }, [nations]);

  // useEffect(() => {
  //   setLoading(loading);
  // }, [loading]);

  useEffect(() => {
    setCurtPgNation(pageNations[page]);
    console.log("curtPgNationapp", curtPgNation);
  }, [loading, page, pageNations]);
  return (
    <>
      <Search
        setSearchTerm={setSearchTerm}
        handleDownClick={handleDownClick}
        handleUpClick={handleUpClick}
      />
      <NationList loading={loading} curtPgNation={curtPgNation} />
      {/* <Buttons /> */}
    </>
  );
}

export default App;
