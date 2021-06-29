import React from "react";
import { FaTimes } from "react-icons/fa";
const Modal = ({ modalData, isModalOpen, closeModal }) => {
  //   const [
  //     topLevelDomain,
  //     capital,
  //     region,
  //     subregion,
  //     population,
  //     latlng,
  //     demonym,
  //     area,
  //     gini,
  //     timezones,
  //     borders,
  //     numericCode,
  //     currencies,
  //     languages,
  //     translations,
  //     regionalBlocs,
  //     cioc,
  //   ] = [...modalData];
  //   const ak = [...modalData];
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3>modal content </h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};
export default Modal;
