import React from "react";
import {useNavigate} from "react-router-dom";

const SectionHead = ({head}) => {
  const navigate = useNavigate();

  return (
    <div className="section-head pb-3 d-flex align-items-center justify-content-between">
      <h2 className="mb-0">{head}</h2>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        style={{backgroundColor: "var(--re-identity)"}}
        onClick={() => navigate("/shop")}
      >
        Shop Now
      </button>
    </div>
  );
};

export default SectionHead;
