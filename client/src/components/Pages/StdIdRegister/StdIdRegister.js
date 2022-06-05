import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../_actions/user_action";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StdIdRegister.css";

function StdIdRegisterPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Major, setMajor] = useState("");
  const [StdNum, setStdNum] = useState("");

  const onMajorHandler = (event) => {
    setMajor(event.currentTarget.value);
  };

  const onStdNumHandler = (event) => {
    setStdNum(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // if (Password !== ConfirmPassword) {
    //   return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    // }

    let body = {
      major: Major,
      stdnum: StdNum,
    };

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success === true) {
        alert("회원 정보 입력 성공");
        navigate("/login");
      } else {
        alert("Filed to sign up");
      }
    });
  };

  return (
    <div className="register-wrapper">
      <div className="register-inner">
        <div className="register-container">
          <div className="form-div">
            <form onSubmit={onSubmitHandler}>
              <h3>Student ID</h3>

              <label>학과 *</label>
              <input
                type="text"
                placeholder="학과"
                value={Major}
                onChange={onMajorHandler}
                className="form-control form-group"
              />

              <label>학번 *</label>
              <input
                type="number"
                placeholder="학번"
                value={StdNum}
                onChange={onStdNumHandler}
                className="form-control form-group"
              />

              <br />
              <div className="d-grid gap-2">
                <button className="btn  btn-block">회원 정보 입력</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StdIdRegisterPage;
