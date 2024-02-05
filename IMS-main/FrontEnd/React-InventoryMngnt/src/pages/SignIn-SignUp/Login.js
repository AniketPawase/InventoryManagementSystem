import "../../css/Login.css";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import {toast} from "react-toastify"
import Marquee from "react-fast-marquee";

function Login() {

    let [icreds, setICreds] = useState({email : "", password : ""});
    let [user, setUser] = useState({});

    const navigate = useNavigate();

    const signIn = () => {
        console.log("in signin")
        axios.post("http://127.0.0.1:8080/auth/signin", icreds)
             .then(res => {
            
                debugger
                if(res.data.status === 'PENDING'){
                    toast.error("You are not authorize to signIn!!") 
                }else{

               setUser(res.data);
               debugger
               console.log(res.data)
               console.log("Logged in successfully");
               toast.success("Logged in successfully :)")
               sessionStorage.setItem("role",res.data.role)
               sessionStorage.setItem("isValidUser",true)
               sessionStorage.setItem("userId", res.data.userId);
               sessionStorage.setItem("jwt",res.data.jwt)
               
               if(res.data.role === "ADMIN")
               navigate('/emps')
               else if(res.data.role === "EMPLOYEE")
               navigate('/shop')
                }
                
             }).catch(error => {
                if (error.response && error.response.status === 404) {
                  console.log("Invalid credentials")
                  toast.error("Invalid credentials :)")
                } else {
                  setUser('An error occurred');
                  toast.error("Invalid credentials :)")
                }
                setUser(null);
              });  
    }


    const onInputChange = (event) => {
        let copyOfICreds = { ...icreds }
        copyOfICreds[event.target.name] = event.target.value;
        setICreds(copyOfICreds);
    }


  //
  return (
    <>
    <center><h2 style={{height:"60px", backgroundColor:"black",color:"whitesmoke"}}><Marquee text="swetha">INVENTORY MANAGEMENT SYSTEM</Marquee></h2></center> 
    <div style={{backgroundColor:"lightcyan"}} className="container d-flex justify-content-center align-items-center min-vh-100">
        <form style={{backgroundColor:"olivedrab"}} className="col-md-6 col-lg-4 p-4 rounded shadow">
            <h3 className="text-center mb-4">Login</h3>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    required
                    name="email"
                    value={icreds.email}
                    onChange={onInputChange}
                    type="email"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    required
                    name="password"
                    value={icreds.password}
                    onChange={onInputChange}
                    type="password"
                    className="form-control"
                />
            </div>
            <button
                type="button"
                onClick={signIn}
                className="btn btn-primary w-100"
            >
                Submit
            </button>
            <hr className="my-4" />
            <button
                className="btn btn-secondary w-100"
                onClick={() => navigate('/addUser')}
            >
                Become an Employee
            </button>
        </form>
    </div>
    </>
);
}

export default Login;