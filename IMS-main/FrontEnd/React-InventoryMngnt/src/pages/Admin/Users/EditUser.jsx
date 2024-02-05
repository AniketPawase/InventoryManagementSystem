import {useNavigate} from "react-router-dom"
import React, { useEffect, useState } from 'react';
import axios from "axios";
import NavigationBarAdmin from "../../NavigationBarAdmin";

function EditUser() {


    const [user, setuser] = useState({
        id: '',
        email: '',
        first_name: '',
        last_name: '',
        sellerId: sessionStorage.getItem("userId"),
        categoryId: '',
      });
    
      const navigate = useNavigate();

      const handleInputChange = (event) => {
        let copyOfProduct = { ...user }
        copyOfProduct[event.target.name] = event.target.value;
        setuser(copyOfProduct);
      };
    
      const handleSubmit = (event) => {
        console.log(user)
        event.preventDefault();
        axios.put("http://127.0.0.1:8080/product/editProduct", user)
            .then(res => {
                navigate("/allProduct")
            })
            .catch(err => {console.log(err)})
      };

      useEffect(() => {
        axios.get("http://127.0.0.1:8080/product/" )
            .then(res => {
                console.log(res.data)
                setuser(res.data)
            })
            .catch(err => console.log(err))
      }, [])

    return (
      <div className='container-fluid'>
      { <NavigationBarAdmin /> }
        <div className="container mt-5">
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>ID:</label>
            <input
              type="text"
              disabled
              className="form-control"
              name="id"
              value={user.id}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={user.productName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={user.price}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Quantity:</label>
            <input
              type="number"
              className="form-control"
              name="quantity"
              value={user.quantity}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              name="categoryId"
              hidden
              value={user.categoryId}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" style={{margin:"20px"}} className="btn btn-primary">Submit</button>
        </form>
      </div>
      </div>)
}

export default EditUser;