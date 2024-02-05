import React from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Employee/Home';
import UserList from './Admin/Users/Users';
import Login from './SignIn-SignUp/Login';

const ErrorPage = () => {

    const navigate = useNavigate()
    const loadDefault = ()=>{
      debugger
        if (sessionStorage.getItem("role") === "ADMIN") {
            navigate('/emps')
        } else if(sessionStorage.getItem("role") === "EMPLYOEE"){
            navigate('/shop') 
        }else{
            navigate('/')
        }
    }
  return (
    <div className="container text-center mt-5" style={{padding:"10px",backgroundColor:"lightgray"}}>
      <h1 className="display-4">OOPS...you are authorize to Access It</h1>
      <p className="lead"></p>
      <img
        src="https://www.nilebits.com/wp-content/uploads/2022/09/How-to-Fix-403-Forbidden-Error-1140x400.png"
        alt="Error"
        className="img-fluid"
      />
      <p className="mt-3"><div onClick={loadDefault} className="btn btn-primary">Return to Homepage</div></p>
    </div>
  );
};

export default ErrorPage;
