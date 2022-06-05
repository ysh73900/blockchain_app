import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./StudentID.css";

const StudentID = () => {
  const user = useSelector((state) => state.user.userData);
  return (
    <div className="StudentID-inner">
      <div className="StudentID-container">
        <div className="StudentID-content">
          <h1>중부대학교</h1>
          <div className="StudentID-img">
            <img className="profileImg" src="img/profile.png" alt="" />
            <p>학번 : {user.stdnum}</p>
            <p>성명 : {user.name}</p>
            <p>학과 : {user.major}</p>
            <button className="btn  StudentID-btn btn-block">학생증</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentID;
