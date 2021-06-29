import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Buttons = ({ loading, setPage, pageNations, page }) => {
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > pageNations.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
    console.log("ButtonsPage", page);
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = pageNations.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <>
      {!loading && (
        <div className="btn-container">
          <button type="button" className="prev-btn" onClick={prevPage}>
            <FaChevronLeft />
          </button>
          {pageNations.map((pageNation, index) => {
            return (
              <button
                key={index + 1}
                className={`${
                  index == page ? "page-btn page-active" : "page-btn"
                }`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button type="button" className="next-btn" onClick={nextPage}>
            <FaChevronRight />
          </button>
        </div>
      )}
    </>
  );
};
export default Buttons;
