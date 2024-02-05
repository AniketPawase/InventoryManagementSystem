import axios from 'axios';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify'

const AddUser = () => {

  const [user,setUser]=useState({firstName: "",
                                  lastName: "",
                                  email: "",
                                  password: "",
                                  userRole: "EMPLOYEE",
                                  mobile: "",
                                  status: "PENDING"})

  const navigate = useNavigate();
 
  const register = ()=>{
    console.log(user)
    
    //
    axios.post("http://127.0.0.1:8080/user/addEmpl", user)
             .then(result => {
              console.log("added successfully")
    setUser({firstName: "",
    lastName: "",
    email: "",
    password: "",
    userRole: "EMPLOYEE",
    mobile: "",
    status: "PENDING"})
               toast.success('Registration successful...Pending for Approval')
               navigate('/')
             }).catch(error => {console.log(error)}) 
  }


  const onInputChange = (event) => {
    let copyOfUser = { ...user }
    copyOfUser[event.target.name] = event.target.value;
    setUser(copyOfUser);
}

  return (
    <div className='container-fluid' style={{margin:"20px"}}>
    <div className='container'>
      <h3>Add User</h3>
      <hr />
      <form>
        <div className='form-group'>
          <input
            className='form-control col-4'

            onChange={onInputChange}
            name='firstName'
            value={user.firstName}

            placeholder='Enter first name'
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control col-4'
            onChange={onInputChange}
            name='lastName'
            value={user.lastName}
            placeholder='Enter last name'
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            className='form-control col-4' 
            onChange={onInputChange}
            name='email'
            value={user.email}
            placeholder='Enter email'
          />
        </div>
        <div className='form-group'>
          <input
            type='tel'
            className='form-control col-4'
            onChange={onInputChange}
            name='mobile'
            value={user.mobile}
            placeholder='Enter Mobile'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            className='form-control col-4'
            onChange={onInputChange}
            name='password'
            value={user.password}
            placeholder='Enter Password'
          />
        </div>
        <div>
          <button type='button' className='btn btn-primary' onClick={register}>
            Save Or Update
          </button>
        </div>
      </form>
      <hr />
      
    </div>
    </div>);
};

export default AddUser;