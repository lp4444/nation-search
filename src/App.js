import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Search from "./Searchform";
import NationList from "./NationList";
import Buttons from "./Buttons";
import paginate from "./utils";
import "./App.css";

function App() {
  const { loading, data, pageData, setPageData } = useFetch();

  return (
    <>
      <Search />
      <NationList />
      <Buttons />
    </>
  );
}

export default App;
