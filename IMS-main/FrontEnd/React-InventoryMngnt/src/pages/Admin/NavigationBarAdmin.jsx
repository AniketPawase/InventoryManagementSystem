import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function NavigationBarAdmin() {

  //
  const navigate = useNavigate();

  //
  const logOut = ()=>{
    debugger
    sessionStorage.clear()
    toast.info('Thank you for using App')
     navigate('/')
    
    
  }
    return ( <>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand " ><h4>ADMIN </h4></a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/emps">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/supplier'>
            Suppliers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/category'>
            Products
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/emps'>
            Employees
          </a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form> */}
    </div>
  </div>
  <div style={{margin:"10px"}} className="btn btn-secondary" onClick={logOut}>LOGOUT</div>
</nav>

    </> );
}

export default NavigationBarAdmin;