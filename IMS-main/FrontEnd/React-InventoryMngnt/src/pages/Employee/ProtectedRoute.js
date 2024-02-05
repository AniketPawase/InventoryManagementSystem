import ErrorPage from "../ErrorPage";
import Login from "../SignIn-SignUp/Login";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
function ProtectedRoute( props ) {

    //
    let isLoggedIn = false;
    let isValidUser = sessionStorage.getItem("isValidUser");

    //
    debugger
    if(isValidUser === "true" && sessionStorage.getItem("role") === "EMPLOYEE") 
    isLoggedIn = true;
    else isLoggedIn = false;

    //
    if (isLoggedIn) { 
        return ( props.component)
    }
    else return <ErrorPage/>
}

export default ProtectedRoute;