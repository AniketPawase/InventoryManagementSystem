import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import {toast} from 'react-toastify'
import NavigationBarAdmin from "../NavigationBarAdmin";


const UserListApproved = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8080/user/allActiveEmpl'); 
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.put(`http://127.0.0.1:4000/users/remove/${id}`); 
      toast.success("User Removed successfully :)")
      fetchUserList(); 
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className='container-fluid'>
    { <NavigationBarAdmin /> }
    <div className='container'>
      <h3>List of Approved Users</h3>
      <hr />
      <div>
      {/* <td>
        <Link to='/addUSer' className='btn btn-primary mb-2'>
          Add New User 
        </Link>
        </td> */}
        <td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td>
        <td>
        <Link to='/pendingUser' className='btn btn-secondary mb-2'>
          Pending Users
        </Link>
        </td>
        <td>{""}</td><td>{""}</td><td>{""}</td><td>{""}</td>
        <td>
        <Link to='/removedUser' className='btn btn-warning mb-2'>
          Removed Users
        </Link>
        </td>
        <table className='table table-bordered table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Status</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.status}</td>
                <td>
                <button
                    className='btn btn-danger ml-1' onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>);
};

export default UserListApproved;
