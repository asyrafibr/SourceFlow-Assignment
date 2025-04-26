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
        placeholder="e.g. React Developer"
        style={{
          borderTopLeftRadius: "30px",
          borderEndStartRadius: "30px",
          height: "100%",
          padding: "0 1rem",
        }}
      />
      <button
        style={{
          borderTopRightRadius: "30px",
          borderEndEndRadius: "30px",
          backgroundColor: "#FCDF69",
          height: "100%",
          padding: "0 1.5rem",
          color: "#25210E",
          fontSize: "16px",
          fontWeight: 700,
          border: "none",
        }}
      >
        Search Jobs
      </button>
    </div>
  );
};

export default HeroInputGroup;
