import React from "react";

const OrderDetails = props => {
  return (
    <div>
      <h1>Orders:</h1>

      <h2>Table 1</h2>
      <ul>
        {props.customers.map((user) => {
          if (user.table === "table1") {
            return (
              <li key= {Math.random().toString()}>
                 {user.price} {user.dish}
              </li>
            );
          }
          return null;
        })}
      </ul>
      <br />

      <h2>Table 2</h2>
      <ul>
        {props.customers.map((user) => {
          if (user.table === "table2") {
            return (
              <li key= {Math.random().toString()}>
                {user.price} {user.dish}
              </li>
            );
          }
          return null;
        })}
      </ul>
      <br />
      <h2>Table 3</h2>
      <ul>
        {props.customers.map((user) => {
          if (user.table === "table3") {
            return (
              <li key= {Math.random().toString()}>
                {user.price} {user.dish}
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
}

export default OrderDetails
