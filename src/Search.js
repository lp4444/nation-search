import React, { useState, useEffect, useRef } from "react";

const Search = ({
  setSearchTerm,
  handleDownClick,
  handleUpClick,
  curtPgNation,
}) => {
  const nationValue = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  const filterNation = () => {
    setSearchTerm(nationValue.current.value);
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your nation</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={nationValue}
            onChange={filterNation}
          />
        </div>
      </form>
      <div className="btn-container">
        <button
          className="search-btn"
          onClick={handleUpClick}
          disabled={!curtPgNation}
        >
          正序
        </button>

        <button
          className="page-btn"
          onClick={handleDownClick}
          disabled={!curtPgNation}
        >
          反序
        </button>
      </div>
    </section>
  );
};

export default Search;
