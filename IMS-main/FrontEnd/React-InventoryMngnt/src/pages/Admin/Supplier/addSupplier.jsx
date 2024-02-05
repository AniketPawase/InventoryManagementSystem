import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import NavigationBarAdmin from "../NavigationBarAdmin"

function AddSupplier() {

  const [suppliers,setsuppliers]=useState({
    name: "",
    email: "",
    mobile: "" })

    const navigate = useNavigate();


  const onInputChange = (event) => {
    let copyOfSupler = { ...suppliers }
    copyOfSupler[event.target.name] = event.target.value;
    setsuppliers(copyOfSupler);
}

const register = ()=>{
  console.log(suppliers)
  
  //
  axios.post("http://127.0.0.1:4000/supplier", suppliers)
           .then(result => {
            console.log("added successfully")
            setsuppliers({
              name: "",
              email: "",
              mobile: "" })
             navigate('/supplier')
           }).catch(error => {console.log(error)}) 
}

    return (    
      <div className='container-fluid'>
      { <NavigationBarAdmin /> }
 <div className='container'>
    <h3>Add Supplier</h3>
    <hr />
    <form>
    <div className='mb-3'>
              <label htmlFor=''>Name</label>
              <input
                type='text'
                name='name'
                onChange={onInputChange}
                className='form-control'
                placeholder='Enter name here'
              />
      </div>
      <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                type='email'
                name='email'
                onChange={onInputChange}
                className='form-control'
                placeholder='Enter Email here'
              />
        </div>
      <div className='mb-3'>
              <label htmlFor=''>Mobile Number</label>
              <input
                type='tel'
                name='mobile'
                onChange={onInputChange}
                className='form-control'
                placeholder='Enter Mobile No. here'
              />
      </div>
      <div>
        <button  className='btn btn-primary' onClick={register}>
          Save Or Update
        </button>
      </div>
    </form>
    <hr />
    <Link to='/supplier'>Back to List</Link>
  </div>
  </div> );
}

export default AddSupplier;