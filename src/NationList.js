import React from "react";
import Nation from "./Nation";

const NationList = ({ loading, curtPgNation, handleModal }) => {
  if (loading) {
    return <p>Loading</p>;
  } else if (!curtPgNation) {
    return <p>沒有找到國家</p>;
  }
  return (
    <div className="list-container">
      {!loading &&
        curtPgNation.map((item, index) => {
          return <Nation key={index} {...item} handleModal={handleModal} />;
        })}
    </div>
  );
};
export default NationList;
