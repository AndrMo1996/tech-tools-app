import React from "react";
import Loader from "react-loader-spinner";

const BarsLoader = () => {
  return (
    <div
      className="loader"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
      }}
    >
      <Loader type="Bars" color="#7D869C" height={100} width={100} />
    </div>
  );
};

export default BarsLoader;
