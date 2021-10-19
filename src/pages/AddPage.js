import React from "react";
import Title from "../components/Title";
import WriteForm from "../components/WriteForm";
import "../styles/add.scss";

const AddPage = () => {
  return (
    <div>
      <Title />
      <div className="basicInfo">
        <div className="basic">기본정보</div>
      </div>
      <WriteForm />
    </div>
  );
};

export default AddPage;
