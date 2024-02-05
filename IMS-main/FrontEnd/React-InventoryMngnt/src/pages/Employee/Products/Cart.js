import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate} from "react-router-dom"
import { toast } from 'react-toastify';
import { Navbar } from 'react-bootstrap';
const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  // const [refresh, setRefresh] = useState(false)

  const navigate = useNavigate()

  const removeProduct = (id)=>{
    
    axios.delete("http://127.0.0.1:8080/product/remCart/" + id)
        .then(res => {
          getCartItem()
        })
        .catch(err => console.log(err))
  }
  const getCartItem = ()=>{
    axios.get("http://127.0.0.1:8080/user/getCart/" + sessionStorage.getItem("userId"))
        .then(res => {
          console.log(res.data)
          setCartItems(res.data)
          navigate("/cart")
        })
        .catch(err => console.log(err))
  }
  useEffect(() => {
    getCartItem()
  }, [])

  const handleQuantityChange = (itemId, newQuantity) => {
    let cart = {userId: sessionStorage.getItem("userId"),
                productId: itemId,
                quantity: newQuantity}
    axios.post("http://127.0.0.1:8080/product/cart/", cart)
        .then(res => {
          toast.success("Product quantity changed in cart");
          getCartItem()
        })
    
  };

  const checkout = () => {
    axios.get("http://127.0.0.1:8080/user/checkout/" + sessionStorage.getItem("userId"))
        .then(res => navigate("/orders"))
        .catch(err => console.log(err))
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0);
  };

  return (
    <div className="container mt-5">
       <Navbar/>
       <Link to='/shop' className='btn btn-primary mb-2' style={{marginRight:"10px"}}>Back To Shop</Link> 
      <h1>Shopping Cart</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.product.productName}</td>
              <td>${item.product.price}</td>
              <td>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() =>
                    handleQuantityChange(item.product.id, -1)
                  }
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                {item.quantity}
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() =>
                    handleQuantityChange(item.product.id, 1)
                  }
                >
                  +
                </button>
              </td>
              <td>${item.product.price * item.quantity}</td>
              <td>
                <button className="btn btn-sm btn-danger" onClick={()=>{removeProduct(item.id)}} >Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right">
        <h5>Total Price: ${calculateTotal()}</h5>
        <button className="btn btn-primary" onClick={checkout}>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
