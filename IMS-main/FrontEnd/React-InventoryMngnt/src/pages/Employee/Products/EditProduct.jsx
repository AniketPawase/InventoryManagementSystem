import { useParams, useNavigate } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import axios from "axios";

function EditProduct() {
  const { productId } = useParams();

  const [imageData, setImageData] = useState(null);

  const getImage = (images) => {
    // console.log(product);
    // console.log(imageIds)
    console.log(images)
    axios.get("http://localhost:8080/product/images/" + images[0], { responseType: 'arraybuffer' })
      .then(response => {
        const base64Image = btoa(
          new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        setImageData(`data: image / jpeg; base64, ${ base64Image }`);
  }).catch (error => {
    console.error('Error fetching image:', error);
  });
}

const [product, setProduct] = useState({
  id: '',
  productName: '',
  price: '',
  quantity: '',
  sellerId: sessionStorage.getItem("userId"),
  categoryId: '',
});

const navigate = useNavigate();

const handleInputChange = (event) => {
  let copyOfProduct = { ...product }
  copyOfProduct[event.target.name] = event.target.value;
  setProduct(copyOfProduct);
};

const handleSubmit = (event) => {
  console.log(product)
  event.preventDefault();
  axios.put("http://127.0.0.1:8080/product/editProduct", product)
    .then(res => {
      navigate("/allProduct")
    })
    .catch(err => { console.log(err) })
};

useEffect(() => {
  axios.get("http://127.0.0.1:8080/product/" + productId)
    .then(res => {
      console.log(res.data)
      setProduct(res.data)
      getImage(res.data.prodImageIds)
    })
    .catch(err => console.log(err))
}, [])

return (
  <div className="container mt-5" style={{backgroundColor:"lightgray"}}>
    <h2 className="mb-4">Edit Product</h2>
    <div className="row">
      <div className="col-md-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">ID:</label>
            <input
              type="text"
              disabled
              className="form-control"
              name="id"
              value={product.id}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              name="productName"
              value={product.productName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price:</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={product.price}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">Quantity:</label>
            <input
              type="number"
              className="form-control"
              name="quantity"
              value={product.quantity}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className="col-md-6 mt-4 mt-md-0">
        <div className="d-flex justify-content-center">
          <img
            style={{ height: "300px", width: "300px" }}
            src={imageData}
            alt="Product"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  </div>
)
// return (
//   <div className="container mt-5">
//     <h2>Edit Product</h2>
//     <form onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label>ID:</label>
//         <input
//           type="text"
//           disabled
//           className="form-control"
//           name="id"
//           value={product.id}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="form-group">
//         <label>Name:</label>
//         <input
//           type="text"
//           className="form-control"
//           name="name"
//           value={product.productName}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="form-group">
//         <label>Price:</label>
//         <input
//           type="number"
//           className="form-control"
//           name="price"
//           value={product.price}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="form-group">
//         <label>Quantity:</label>
//         <input
//           type="number"
//           className="form-control"
//           name="quantity"
//           value={product.quantity}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="form-group">
//         <input
//           type="number"
//           className="form-control"
//           name="categoryId"
//           hidden
//           value={product.categoryId}
//           onChange={handleInputChange}
//         />
//       </div>
//       <button type="submit" style={{ margin: "20px" }} className="btn btn-primary">Submit</button>
//     </form>
//     <div >
//       <img style={{height:"300px", width:"300px"}} src={imageData}/>
//     </div>
//   </div>
// )
}

export default EditProduct;