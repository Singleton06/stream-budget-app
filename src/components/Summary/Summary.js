import React from "react";

const Summary = ({ budgeted, spent }) => {
  const remaining = budgeted - spent;
  return (
    <div>
      <div>Budgetted: <span>{budgeted}</span></div>
      <div>Spent: <span>{spent}</span></div>
      <div>Remaining: <span>{remaining}</span></div> {/* probably style red/green for over/under and use () around */}
    </div>
  );
};

export default Summary;
