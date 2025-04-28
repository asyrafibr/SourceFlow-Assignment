import React from "react";

const HeroInputGroup = () => {
  return (
    <div
      className="input-group mb-3"
      style={{ width: "520px", display: "flex", height: "63px" }}
    >
      <input
        type="text"
        className="form-control"
        placeholder="E.g. networking"
        style={{
          borderTopLeftRadius: "30px",
          borderEndStartRadius: "30px",
          height: "62px",
          padding: "0 1rem",
          borderWidth: "1px",
          borderColor: "#CACACA",
          padding: "10px 20px 10px 20px",

          
        }}
      />
      <button
        style={{
          borderTopRightRadius: "30px",
          borderEndEndRadius: "30px",
          backgroundColor: "#FCDF69",
          height: "62px",
          padding: "10px 20px 10px 20px",
          color: "#25210E",
          fontSize: "16px",
          fontWeight: 700,
     
        }}
      >
        Search Jobs
      </button>
    </div>
  );
};

export default HeroInputGroup;
