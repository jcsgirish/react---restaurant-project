import React ,{useState} from 'react';
import OrderForm from './components/Users';
import OrderDetails from './components/OrderList';

const  App=() =>{
  const [usersList, setUsersList] = useState([]);

  const addCustomerHandler = ( cPrice, cDish, cTable) => {
    setUsersList((prev) => {
      return [
        ...prev,
        {  price: cPrice, dish: cDish, table: cTable },
      ];
    });
  };

  return (
    <React.Fragment>
      <OrderForm addToBill={addCustomerHandler} />
      <OrderDetails customers ={usersList} />
    </React.Fragment>
  ) 
}

export default App;