import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
const ProductCard = ({ product }) => {

  //
  const [imageData, setImageData] = useState(null);
  const [desc, setDesc] =useState({});

  //
  const getDesc = (productId)=>{
    axios.get("http://localhost:8080/product/description/"+productId)
    
    .then(res=>{
      // debugger
      setDesc(res.data)
    })
    
  }

  //
  const addToCart = () => {
    let cart = {userId: sessionStorage.getItem("userId"),
                productId: product.id,
                quantity: 1}
    console.log(cart);
    axios.post("http://localhost:8080/product/cart", cart)
        .then(res => {
            console.log(res.data);
            toast.success("Product added to cart");
        })
}
  //
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

//
useEffect(()=>{
  getImage(product.prodImageIds)
  getDesc(product.id)
},[])

  return (
    <div>
    
    <div className="card card-shadow">
      <img src={imageData} alt={product.productName} className="card-img-top"
       style={{
        maxHeight: "250px",
        width: "100%",
        objectFit: "contain",
        borderRadius: "10px",
      }} />
      <div className="card-body">
        <h5 className="card-title">{product.productName}</h5>
        <p className="card-text">{desc.desc}</p>
        <p className="card-price">₹{product.price}</p>
        <button className="btn btn-primary"onClick={addToCart} >Add to Cart</button>
      </div>
    </div>
    </div>
  );
};

export default ProductCard;