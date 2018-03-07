import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.transact.posted_at}</td>
      <td>{props.transact.description}</td>
      <td>{props.transact.category}</td>
      <td>{props.transact.amount}</td>
    </tr>
  )
}

export default Transaction
