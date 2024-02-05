import axios from 'axios';
import { Button } from 'bootstrap';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

function AddProduct() {
  
  //
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  //
  const [product,setProduct] = useState({
                                productName: "",
                                price: 0,
                                quantity: 0,
                                sellerId: 0,
                                categoryId: 0
                              });
  
  const [desc, setDesc] = useState({desc : "", productId: ""})
  
  //
  const addProd =async ()=>{
    try {
      const response1 = await axios.post("http://127.0.0.1:8080/product/addProduct",product)
      console.log(response1.data)
    let newDesc = {...desc}
    newDesc.productId = response1.data.message
    console.log(newDesc)
    const response2 = await axios.post("http://127.0.0.1:8080/product/description", newDesc)

    //
    const formData = new FormData();
                formData.append('imageFile', file);
                const response3 = await axios.post("http://127.0.0.1:8080/product/images/" + response1.data.message, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }});

    navigate("/allProduct")
    } catch(error) {
        console.log(error)
    } 
  }
  const onInputDescChange = (event) => {
    let copyOfDesc = { ... desc }
    copyOfDesc[event.target.name] = event.target.value;
    setDesc(copyOfDesc);
}
  //
  const onInputChange = (event) => {
    let copyOfProduct = { ... product }
    copyOfProduct[event.target.name] = event.target.value;
    setProduct(copyOfProduct);
}
return (
    <div className='container'>
      <div>
        <a className='btn btn-primary' style={{marginTop:"10px"}} href='/allProduct'>BACK TO LIST</a>
      </div>
      <hr />
      <div className='row'>
      <center>
      <h1 className=''>Add Product</h1>
      </center>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-body card-shadow'  style={{backgroundColor:"lightgray"}}>
              <form>
                {/* ... your existing form fields ... */}
                <div className='mb-3'>
               <label htmlFor=''>Name</label>
                <input
                 type='text'
                 className='form-control'
                 placeholder='Enter name of Product here'
                 
                 name='productName'
                 value={product.productName}
                 onChange={onInputChange}
               />
       </div>
       <div className='mb-3'>
               <div className='row'>
                 <div className='col-8'>
                 <label htmlFor=''>Price</label>
               <input
                 type='number'
                 className='form-control'
                 placeholder='Enter Price of Product here'
 
                 name='price'
                 value={product.price}
                 onChange={onInputChange}
               />
                 </div>
                 <div className='col-4'>
 
                 </div>
               </div>
       </div>
       <div className='mb-3'>
               <label htmlFor=''>Quantity</label>
               <input
                 type='number'
                 className='form-control'
                 placeholder='Enter Quantity of product here'
 
                 name='quantity'
                 value={product.quantity}
                 onChange={onInputChange}
               />
       </div>
       <div className='mb-3'>
               <label htmlFor=''>CategoryId</label>
               <input
                 type='number'
                 className='form-control'
                 placeholder='Enter Category ID here'
 
                 name='categoryId'
                 value={product.categoryId}
                 onChange={onInputChange}
               />
       </div>
       <div className='mb-3'>
               <label htmlFor=''>Seller ID</label>
               <input
                 type='number'
                 className='form-control'
                 placeholder='Enter Seller Id here'
 
                 name='sellerId'
                 value={product.sellerId}
                 onChange={onInputChange}
               />
       </div>
       <div className='mb-3'>
               <label htmlFor=''>Description</label>
               <input
                 type='text'
                 className='form-control'
                 placeholder='Enter descrption'
                 
                 name='desc'
                 value={desc.desc}
                 onChange={onInputDescChange}
               />
       </div>
                
       

                <div className='mb-3'>
                  <label htmlFor='imageFile' className='form-label'>
                    Product Image
                  </label>
                  <input
                    type='file'
                    className='form-control'
                    id='imageFile'
                    accept='image/*'
                    onChange={handleFileChange}
                  />
                </div>

                <div className='d-grid'>
                  <button
                    type='button'
                    className='btn btn-primary'
                    onClick={addProd}
                  >
                    Save or Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
// return (    
//   <div className='container'>
//      <h3>Add Category</h3>
//      <hr />
//      <div className='row'> 
//        <div className='col-3'>
 
//        </div>
//        <div className='col-6' style={{backgroundColor:'coral',padding:10}} >
//        <form>
//      <div className='mb-3'>
//                <label htmlFor=''>Name</label>
//                <input
//                  type='text'
//                  className='form-control'
//                  placeholder='Enter name of Product here'
                 
//                  name='productName'
//                  value={product.productName}
//                  onChange={onInputChange}
//                />
//        </div>
//        <div className='mb-3'>
//                <div className='row'>
//                  <div className='col-8'>
//                  <label htmlFor=''>Price</label>
//                <input
//                  type='number'
//                  className='form-control'
//                  placeholder='Enter Price of Product here'
 
//                  name='price'
//                  value={product.price}
//                  onChange={onInputChange}
//                />
//                  </div>
//                  <div className='col-4'>
 
//                  </div>
//                </div>
//        </div>
//        <div className='mb-3'>
//                <label htmlFor=''>Quantity</label>
//                <input
//                  type='number'
//                  className='form-control'
//                  placeholder='Enter Quantity of product here'
 
//                  name='quantity'
//                  value={product.quantity}
//                  onChange={onInputChange}
//                />
//        </div>
//        <div className='mb-3'>
//                <label htmlFor=''>CategoryId</label>
//                <input
//                  type='number'
//                  className='form-control'
//                  placeholder='Enter Category ID here'
 
//                  name='categoryId'
//                  value={product.categoryId}
//                  onChange={onInputChange}
//                />
//        </div>
//        <div className='mb-3'>
//                <label htmlFor=''>Seller ID</label>
//                <input
//                  type='number'
//                  className='form-control'
//                  placeholder='Enter Seller Id here'
 
//                  name='sellerId'
//                  value={product.sellerId}
//                  onChange={onInputChange}
//                />
//        </div>
//        <div className='mb-3'>
//                <label htmlFor=''>Description</label>
//                <input
//                  type='text'
//                  className='form-control'
//                  placeholder='Enter descrption'
                 
//                  name='desc'
//                  value={desc.desc}
//                  onChange={onInputDescChange}
//                />
//        </div>
//        <div>
//        <input type="file" accept="image/*" onChange={handleFileChange} />
//      </div>
//        <div>
//          <button type='button'  className='btn btn-primary' onClick={addProd}>
//            Save Or Update
//          </button>
//        </div>
//      </form>
//        </div>
//        <div className='col-3'>
         
//        </div>
//      </div>
//      <hr />
//      {/* <Button onClick={()=>{navigate(/product)}}>Back to List</Button> */}
//    </div> 
//    );
//     return (    
//  <div className='container'>
//     <h3>Add Category</h3>
//     <hr />
//     <form>
//     <div className='mb-3'>
//               <label htmlFor=''>Name</label>
//               <input
//                 type='text'
//                 className='form-control'
//                 placeholder='Enter name of Product here'
                
//                 name='productName'
//                 value={product.productName}
//                 onChange={onInputChange}
//               />
//       </div>
//       <div className='mb-3'>
//               <label htmlFor=''>Price</label>
//               <input
//                 type='number'
//                 className='form-control'
//                 placeholder='Enter Price of Product here'

//                 name='price'
//                 value={product.price}
//                 onChange={onInputChange}
//               />
//       </div>
//       <div className='mb-3'>
//               <label htmlFor=''>Quantity</label>
//               <input
//                 type='number'
//                 className='form-control'
//                 placeholder='Enter Quantity of product here'

//                 name='quantity'
//                 value={product.quantity}
//                 onChange={onInputChange}
//               />
//       </div>
//       <div className='mb-3'>
//               <label htmlFor=''>CategoryId</label>
//               <input
//                 type='number'
//                 className='form-control'
//                 placeholder='Enter Category ID here'

//                 name='categoryId'
//                 value={product.categoryId}
//                 onChange={onInputChange}
//               />
//       </div>
//       <div className='mb-3'>
//               <label htmlFor=''>Seller ID</label>
//               <input
//                 type='number'
//                 className='form-control'
//                 placeholder='Enter Seller Id here'

//                 name='sellerId'
//                 value={product.sellerId}
//                 onChange={onInputChange}
//               />
//       </div>
//       <div className='mb-3'>
//               <label htmlFor=''>Description</label>
//               <input
//                 type='text'
//                 className='form-control'
//                 placeholder='Enter descrption'
                
//                 name='desc'
//                 value={desc.desc}
//                 onChange={onInputDescChange}
//               />
//       </div>
//       <div>
//       <input type="file" accept="image/*" onChange={handleFileChange} />
//     </div>
//       <div>
//         <button type='button'  className='btn btn-primary' onClick={addProd}>
//           Save Or Update
//         </button>
//       </div>
//     </form>
//     <hr />
//     {/* <Button onClick={()=>{navigate(/product)}}>Back to List</Button> */}
//   </div> 
//   );
}

export default AddProduct;