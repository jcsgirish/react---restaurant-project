import { useState, useEffect } from 'react';
import axios from 'axios';
import './Users.css'
function Restaurant() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axios.get("https://crudcrud.com/api/04658d8c7a17454b8c0e2d971270924c/orders")
        setOrders(response.data);
      } catch (error) {
        console.log(error)
      }
    }

    fetchOrders();
  }, []);

  async function save(event) {
    try {
      event.preventDefault();
      const myprice = event.target.price.value;
      const mydish = event.target.dish.value;
      const mytable = event.target.table.value;
      const object = {
        myprice,
        mydish,
        mytable,
      };
      const response = await axios.post("https://crudcrud.com/api/04658d8c7a17454b8c0e2d971270924c/orders", object);
      setOrders([...orders, response.data]);
      event.target.reset();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteOrder(order) {
    try {
      const response = await axios.delete(`https://crudcrud.com/api/04658d8c7a17454b8c0e2d971270924c/orders/${order._id}`);
      setOrders(orders.filter(o => o._id !== order._id));
    } catch (error) {
      console.log(error);
    }
  }

  async function handleEditOrder(order) {
    try {
      await axios.delete(`https://crudcrud.com/api/04658d8c7a17454b8c0e2d971270924c/orders/${order._id}`);
      setOrders(orders.filter(o => o._id !== order._id));
      document.getElementById('prices').value = order.myprice;
      document.getElementById('dishes').value = order.mydish;
      document.getElementById('Tables').value = order.mytable;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <header><h1><b>RESTAURANT</b></h1></header><br />
      <form onSubmit={save}>
        <div className="container">
          <div className="box">
            <label><b>ChoosePrice:</b></label><br />
            <input id="prices" type="text" placeholder="EnterPrice" name='price' required /><br /><br />
            <label><b>ChooseDish:</b></label><br />
            <input id="dishes" type="text" placeholder="EnterDish" name="dish" required /><br /><br />
            <label><b>ChooseTable:</b></label><br />
            <select id="Tables" name="table" required>
              <option value="Select Table">Select Table</option>
              <option value="Table 1">Table 1</option>
              <option value="Table 2">Table 2</option>
              <option value="Table 3">Table 3</option>
            </select><br />
          </div>
          <button type="submit"><b>ADD BILL</b></button>
        </div>
      </form>
      </div>
  )
}
export default Restaurant;

