import React from "react";
import LoaderGif from "../../images/loader.gif";

import "./Loader.css";

function Loader() {
  return (
    <section className="loader">
      <img className="loader__gif" src={LoaderGif} alt="гифка загрузчик" />
    </section>
  );
}

export default Loader;
