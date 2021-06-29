import React, { useState, useEffect, useRef } from "react";

const Search = ({ setSearchTerm, handleDownClick, handleUpClick }) => {
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
      <button onClick={handleUpClick}>正序</button>
      <button onClick={handleDownClick}>反序</button>
    </section>
  );
};

export default Search;
