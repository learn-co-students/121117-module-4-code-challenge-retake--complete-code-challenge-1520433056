import React from "react";

const Transaction = ({ transaction }) => {
  // const { transaction } = props;
  return (
    <tr>
      <td>{transaction.posted_at}</td>
      <td>{transaction.category}</td>
      <td>{transaction.description}</td>
      <td>{transaction.amount}</td>
    </tr>
  );
};

export default Transaction;
