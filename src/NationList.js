import React from "react";
import Nation from "./Nation";

const NationList = ({ loading, curtPgNation }) => {
  if (loading) {
    return <p>Loading</p>;
  } else if (!curtPgNation) {
    return <p>沒有找到國家</p>;
  }
  return (
    <div className="list-container">
      {curtPgNation.map((item, index) => {
        return <Nation key={index} {...item} />;
      })}
    </div>
  );
};
export default NationList;
