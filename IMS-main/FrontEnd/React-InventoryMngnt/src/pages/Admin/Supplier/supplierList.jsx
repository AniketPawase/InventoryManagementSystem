import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate} from 'react-router-dom';
import NavigationBarAdmin from "../NavigationBarAdmin"


function SellerList() {

  const navigate = useNavigate();
    const [suppliers, setSupplier] = useState([]);

    useEffect(() => {
      fetchSupplierList();
    }, []);
  

    const fetchSupplierList = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:4000/supplier'); 
        setSupplier(response.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };
    const handleApprove = async (id) => {
      try {
        await axios.put(`http://127.0.0.1:4000/supplier/approve/${id}`); 
        fetchSupplierList(); 
      } catch (error) {
        console.error('Error updating supplier:', error);
      }
    };

    return (
      <div className='container-fluid'>
      { <NavigationBarAdmin /> }
            <div className='container'>
      <h3>List of Suppliers</h3>
      <hr />
      <div>
        <Link to='/supplier/addSupplier' className='btn btn-primary mb-2'>
          Add Supplier
        </Link>
        <table className='table table-bordered table-striped table-responsive'>
          <thead className='thead-dark'>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Status</th>
              {/* <th>Address</th> */}
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier.id}>
                <td>{supplier.id}</td>
                <td>{supplier.name}</td>
                <td>{supplier.email}</td>
                <td>{supplier.mobile}</td>
                <td>{supplier.status}</td>
                <td>
                  <button
                    className='btn btn-primary'
                    onClick={()=>{navigate('/supplier/edit/'+supplier.id)}}
                  >
                    Address
                  </button>
                </td>
                <td>
                  <button
                    className='btn btn-success ml-2'
                    onClick={() => handleApprove(supplier.id)}
                  >
                    Approve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>  );
}

export default SellerList;