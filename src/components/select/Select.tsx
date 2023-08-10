import React from "react";

import { BsGlobe } from "react-icons/bs";
import "./select.css";

const Select = () => {
  return (
    <div className="login__select">
      <BsGlobe style={{ fontSize: ".9rem" }} />
      <select defaultValue="english">
        {/* <option value=""></option> */}
        <option value="english">English</option>
        <option value="french">French</option>
        <option value="arabic">Arabic</option>
      </select>
    </div>
  );
};

export default Select;
