import React from "react";

export const CustomerCard = () => {
  return (
    <div className="customer-card">
      <div className="customer-section-head">
        <div className="customer-details">
          <p style={{ fontSize: "25px", fontWeight: "600" }}>Vatsal Aggarwal</p>
          <p style={{ fontSize: "17px" }}>Customer Since 2020</p>
        </div>
      </div>
      <div className="customer-rating">
        <span>4.5</span>
      </div>
      <div className="customer-feedback">
        Awesome Travel experiance with Reserve.Excellent Staff.
        <br />
      </div>
    </div>
  );
};
