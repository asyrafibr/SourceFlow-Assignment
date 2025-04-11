import React from "react";

const HeroInputGroup = () => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="e.g. React Developer"
        style={{ borderTopLeftRadius: '30px', borderEndStartRadius: '30px' }}
      />
      <button
        className="btn btn-warning"
        style={{ borderTopRightRadius: '30px', borderEndEndRadius: '30px' }}
      >
        Search Jobs
      </button>
    </div>
  );
};

export default HeroInputGroup;