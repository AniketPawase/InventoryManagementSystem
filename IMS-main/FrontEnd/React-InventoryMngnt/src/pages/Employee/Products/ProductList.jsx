import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
function ProductList() {

  //
  const [products, setProduct] = useState([]);
  const navigate = useNavigate();
    
  //
  const upStockProduct = (productId)=>{
      
  }
  //
  const getData=()=>{
     // userId and sellerId must be same
     axios.get("http://127.0.0.1:8080/product/allProducts/"+sessionStorage.getItem("userId"))
     .then((result) =>{
       console.log(result.data)
       setProduct(result.data)
     })
     .catch(err => console.log("err occured"))
  }

  //
  useEffect(()=>{
   getData()
  },[])

  //
  const deleteProduct = (productId)=>{
    axios.get("http://127.0.0.1:8080/product/delete/"+productId)
          .then(res=>{
            console.log(res.data)
            getData()
          })
          .catch(err => console.log(err))
  }
    return (
      <div className='container'>
      <h3>List of Categories</h3>
      <hr />
      <div>
        <td>
        <Link to='/shop' className='btn btn-primary mb-2' style={{marginRight:"10px"}}>Back To Shop</Link> 
        
        <Link to='/addProduct' className='btn btn-primary mb-2'>
          Add Product
        </Link>
        </td>
        <td>
        </td>
        <table style={{backgroundColor:"lightgray"}} className='table table-bordered table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>CategoryID</th>
              <th colSpan={3}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.filter(product => product.status === "ADDED")
                .map(product => (
                  <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.categoryId}</td>
                <td>
                <input className='btn btn-outline-primary ml-2' type='button' 
                  value="UPDATE" onClick={()=>{navigate('/product/edit/'+product.id)}} />
                </td>
                <td>
                <input className='btn btn-outline-danger ml-2' type='button' 
                  value="DELETE" onClick={() => deleteProduct(product.id)} />
                </td>
                <td>
                <input className='btn btn-outline-info ml-2' type='button' 
                  value="STOCK UP" onClick={() => upStockProduct(product.id)} />
                </td>
              </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
      );
}

export default ProductList;