import ErrorPage from "../ErrorPage";
import Login from "../SignIn-SignUp/Login";
import {Navigate, Route, Routes} from "react-router-dom";
function ProtectedRoute( props ) {

    //
    let isLoggedIn = false;
    let isValidUser = sessionStorage.getItem("isValidUser");
    
    //
    debugger
    if(isValidUser === "true" & sessionStorage.getItem("role") === "ADMIN") 
    isLoggedIn = true;
    else isLoggedIn = false;

    //
    if (isLoggedIn) {
        return (props.component)
    }
    else return <ErrorPage/>
}

export default ProtectedRoute;