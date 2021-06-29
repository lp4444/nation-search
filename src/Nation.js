import React from "react";

const Nation = ({
  flag,
  name,
  alpha2Code,
  alpha3Code,
  nativeName,
  altSpellings,
  callingCodes,
  handleModal,
}) => {
  // const str={altSpellings}.split()
  return (
    <article className="nation-container">
      <img src={flag} alt={name} className="img-container" />
      <div className="nation-footer">
        <header>
          <h6 onClick={() => handleModal({ name })}>國家名稱:{name}</h6>
          {/* <h4>國際電話區號{callingCodes}</h4> */}
        </header>
        <h6>母語名稱:{nativeName}</h6>
        <h6>國際電話區:{callingCodes}</h6>{" "}
        <header>
          <h6>國家代碼:{alpha2Code}(2位)</h6>
          <h6>{alpha3Code}(3位)</h6>{" "}
        </header>
        <h6>替代國家名稱:</h6>
        {altSpellings.map((altSpelling) => {
          return <h6>{altSpelling}</h6>;
        })}
      </div>
    </article>
  );
};
export default Nation;
