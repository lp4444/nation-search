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

  const fetchNations = async () => {
    setLoading(true);
    try {
      const urlFetch = searchterm ? url : urlBk;

      const response = await fetch(`${urlFetch}${searchterm}`);
      const data = await response.json();

      console.log("data", data);
      setNations(data);
      setPageNations(paginate(data));
      console.log("page", pageNations);
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
  //   setPageNations(paginate(nations));
  //   console.log("page", pageNations);
  // }, [nations]);

  useEffect(() => {
    setCurtPgNation(pageNations[page]);
  }, [loading, page, pageNations]);
  return (
    <>
      <Search setSearchTerm={setSearchTerm} />
      <NationList loading={loading} curtPgNation={curtPgNation} />
      {/* <Buttons /> */}
    </>
  );
}

export default App;
