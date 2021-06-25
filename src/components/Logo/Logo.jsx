import React from "react";
import LogoBushe from "../../images/logo.png";

import "./Logo.css";

function Logo({ className }) {
  return <img className={className} src={LogoBushe} alt="логотип буше" />;
}

export default Logo;
