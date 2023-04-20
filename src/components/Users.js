import React, { useState } from "react";
import './Users.css'

const OrderForm = (props) => {
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");
  const [table, setTable] = useState("");


  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  const dishHandler = (event) => {
    setDish(event.target.value);
  };

  const tableHandler = (event) => {
    setTable(event.target.value);
  };

  const addBill = (event) => {
    event.preventDefault();
    // const obj = {
    //   price,
    //   dish,
    //   table,
    // };
    // localStorage.setItem(uniqueId, JSON.stringify(obj));
    props.addToBill(price,dish,table)
    setPrice("");
    setDish("");
    setTable("");
  };

 
  return (
    <React.Fragment>
      <form onSubmit={addBill}>
      <div className="input" style={{alignItems:'center'}}>

        <div>
          <label>Choose Price</label>
          <input
            type="number"
            id="price"
            onChange={priceHandler}
            value={price}
          />
        </div>
        <div  > 
          <label>Choose Dish</label>
          <input type="text" id="dish" onChange={dishHandler} value={dish} />
        </div>
        <div >
        <label>Choose Table </label>
        <select id="table" onChange={tableHandler} value={table}>
          <option value ="selecttable">Choose Table</option>
          <option value="table1">Table 1</option>
          <option value="table2">Table 2</option>
          <option value="table3">Table 3</option>
        </select>
      </div>
      </div>
        <button type="submit">Add To Bill </button>
      </form>
    </React.Fragment>
  );
};

export default OrderForm;