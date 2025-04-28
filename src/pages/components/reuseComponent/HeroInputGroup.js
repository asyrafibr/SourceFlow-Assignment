import React from "react";

const HeroInputGroup = () => {
  return (
    <div
      className="input-group mb-3 custom-input-group"
      style={{
        width: "100%",
        maxWidth: "520px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
      }}
    >
      <style>
        {`
          @media (max-width: 576px) {
            .custom-input-group {
              flex-direction: column;
            }
            .custom-input-group input {
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;
            }
            .custom-input-group button {
              border-top-left-radius: 0;
              border-top-right-radius: 0;
            }
          }
        `}
      </style>
      <input
        type="text"
        className="form-control"
        placeholder="E.g. networking"
        style={{
          flex: "1 1 auto",
          borderTopLeftRadius: "30px",
          borderEndStartRadius: "30px",
          height: "62px",
          padding: "10px 20px",
          borderWidth: "1px",
          borderColor: "#CACACA",
          minWidth: "0",
          borderRight: "none", 
        }}
      />
      <button
        style={{
          borderTopRightRadius: "30px",
          borderEndEndRadius: "30px",
          backgroundColor: "#FCDF69",
          height: "62px",
          padding: "10px 20px",
          color: "#25210E",
          fontSize: "16px",
          fontWeight: 700,
          flex: "0 0 auto",
          borderWidth: "0px",
          whiteSpace: "nowrap",
        }}
      >
        Search Jobs
      </button>
    </div>
  );
};

export default HeroInputGroup;
