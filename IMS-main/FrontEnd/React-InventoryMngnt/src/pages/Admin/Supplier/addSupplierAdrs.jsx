import { Link } from 'react-router-dom'
import {useParams, useNavigate} from "react-router-dom"
import React, { useEffect, useState } from 'react';

import axios from "axios";
import NavigationBarAdmin from '../NavigationBarAdmin';
import { toast } from 'react-toastify';

function AddSupplierAddrs() {

  const { id } = useParams();
  const [addressInfo, setAddressInfo] = useState({
    id: '',
    adr_line1: '',
    adr_line2: '',
    city: '',
    country: '',
    state: '',
    zip_code: '',
    supplier_id: '',
  });

  useEffect(() => {
    fetchSellerAddress();
  }, []);

  const fetchSellerAddress = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:4000/suppliers_addrs/${id}`);
      setAddressInfo(response.data);
    } catch (error) {
      console.error('Error fetching seller address:', error);
    }
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://127.0.0.1:4000/suppliers_addrs/${id}`, addressInfo);
      console.log(addressInfo);
      navigate('/supplier')
      toast.success("Address Added  successfully :)")
      // Optionally, you could redirect to the seller list page after successful update
    } catch (error) {
      console.error('Error updating seller address:', error);
    }
  };

    return ( 
      <div className='container-fluid'>
      { <NavigationBarAdmin /> }   
      <div className='container'>
      <h3>Edit Seller Address</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='adr_line1'>Address Line 1</label>
          <input
            type='text'
            className='form-control'
            id='adr_line1'
            value={addressInfo.adr_line1}
            onChange={(e) =>
              setAddressInfo({ ...addressInfo, adr_line1: e.target.value })
            }
          />
        </div>
        <div className='form-group'>
          <label htmlFor='adr_line2'>Address Line 2</label>
          <input
            type='text'
            className='form-control'
            id='adr_line2'
            value={addressInfo.adr_line2}
            onChange={(e) =>
              setAddressInfo({ ...addressInfo, adr_line2: e.target.value })
            }
          />
        </div>
        <div className='form-group'>
          <label htmlFor='city'>City</label>
          <input
            type='text'
            className='form-control'
            id='city'
            value={addressInfo.city}
            onChange={(e) =>
              setAddressInfo({ ...addressInfo, city: e.target.value })
            }
          />
        </div>
        <div className='form-group'>
          <label htmlFor='country'>Country</label>
          <input
            type='text'
            className='form-control'
            id='country'
            value={addressInfo.country}
            onChange={(e) =>
              setAddressInfo({ ...addressInfo, country: e.target.value })
            }
          />
        </div>
        <div className='form-group'>
          <label htmlFor='state'>State</label>
          <input
            type='text'
            className='form-control'
            id='state'
            value={addressInfo.state}
            onChange={(e) =>
              setAddressInfo({ ...addressInfo, state: e.target.value })
            }
          />
        </div>
        <div className='form-group'>
          <label htmlFor='zip_code'>ZIP Code</label>
          <input
            type='text'
            className='form-control'
            id='zip_code'
            value={addressInfo.zip_code}
            onChange={(e) =>
              setAddressInfo({ ...addressInfo, zip_code: e.target.value })
            }
          />
        </div>
        <div className='form-group'>
          <label htmlFor='supplier_id'>Supplier ID</label>
          <input
            type='number'
            className='form-control'
            id='supplier_id'
            value={addressInfo.supplier_id}
            onChange={(e) =>
              setAddressInfo({ ...addressInfo, supplier_id: e.target.value })
            }
          />
        </div>
      <div>
      <button type='submit' className='btn btn-primary'>
          Save Address
        </button>
      </div>
    </form>
    <hr />
    <Link to='/supplier'>Back to List</Link>
  </div>
  </div> );
}

export default AddSupplierAddrs;