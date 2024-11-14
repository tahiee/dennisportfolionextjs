"use client";
import Style from "./style.module.scss";

const Project = ({ title, manageModal, index }) => {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={Style.project}
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
};

export default Project;
