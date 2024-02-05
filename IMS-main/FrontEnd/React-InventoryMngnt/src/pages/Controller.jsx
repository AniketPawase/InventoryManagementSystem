import Login from "../pages/SignIn-SignUp/Login";
import { Route, Routes } from 'react-router-dom'
import ProductList from "./Employee/Products/ProductList";
import AddProduct from "./Employee/Products/addProduct";
import EditProduct from "./Employee/Products/EditProduct";
import Home from "../pages/Employee/Home"
import Cart from "../pages/Employee/Products/Cart"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Orders from "../pages/Employee/Products/Orders";
import AdminProtectedRoutes from "../pages/Admin/AdminProtectedRoute"
import AddSupplier from "../pages/Admin/Supplier/addSupplier"
import SellerList from "../pages/Admin/Supplier/supplierList";
import CategoryList from "../pages/Admin/Category/CategoryList";
import AddCategory from "../pages/Admin/Category/addCategory";
import SubCategoryList from "../pages/Admin/SubCategory/SubCategoryList";
import AddSubCategory from "../pages/Admin/SubCategory/addSubCategory";
import SubSubCategoryList from "../pages/Admin/SubSubCategory/SubSubCategoryList";
import AddSubSubCategory from "../pages/Admin/SubSubCategory/addSubSubCategory";
import UserList from "../pages/Admin/Users/Users";
import AddUser from "../pages/Admin/Users/AddUser";
import UserListApproved from "../pages/Admin/Users/UsersApproved"
import UserListPending from "../pages/Admin/Users/UsersPending"
import UserListRemoved from "../pages/Admin/Users/UsersRemoved"
import ProtectedRoute from "../pages/Employee/ProtectedRoute";
import WelcomePage from "./WelcomePage";
import AddSupplierAddrs from "./Admin/Supplier/addSupplierAdrs";



function Controller() {
  
  
    return ( 
        <>
         <div className='container'>
            <Routes>
              {/* LOGIN ROUTE */}
              {/* home component  */}
              <Route path='/login' element={<Login/>} />
              {/* welcome page */}
              <Route  path="/" element={<WelcomePage/>}/>

              {/* EMPLOYEE ROUTES */}
              {/* APPLY FOR EMPLOYEE */}
              {/* AddUser/EmployeeComponent */}
              <Route path='/addUser' element={<AddUser/>}/>

              {/* PRODUCT  */}
                {/* employee default */}
                <Route Exact path="/shop" element={
                  <ProtectedRoute path="/shop" component={<Home/>}/> }/>
                {/* ProductListComponent */}
                <Route path='/allProduct' element={<ProtectedRoute path="/allProduct" component={<ProductList/>}/>} />
                {/* cart */}
                <Route path="/cart" element={<ProtectedRoute path="/cart" component={<Cart/>}/>}/>
                {/* edit product */}
                <Route path='/product/edit/:productId' element={<ProtectedRoute path="/product/edit/:productId" component={<EditProduct/>}/>} />
                {/* Add product */}
                <Route path='/addProduct' element={<ProtectedRoute path="/addProduct" component={<AddProduct/>}/>} />
                {/* Orders */}
                <Route path='/orders' element={<ProtectedRoute path="/orders" component={<Orders/>}/>}/>

              
                  
              {/* ADMIN ROUTES */}

              {/* EMPLYOEE MGMT */}
                {/* User/EmployeeListComponent */}
                <Route path='/emps' element={<AdminProtectedRoutes path='/emps' component={<UserList/>} />} />
                {/* PENDING User/EmployeeComponent */}
                <Route path='/pendingUser' element={<AdminProtectedRoutes path='/pendingUser' component={<UserListPending/>} /> } />
                {/* REMOVED USER/EmployeeComponent */}
                <Route path='/removedUser' element={<AdminProtectedRoutes path='/removedUser' component={<UserListRemoved/>} />} />
                {/* REMOVED USER/EmployeeComponent */}
                <Route path='/approvedUser' element={<AdminProtectedRoutes path='/approvedUser' component={<UserListApproved/>} />} />

              {/* PRODUCT MGMT */}
                {/* CategoryListComponent */}
                <Route path='/category' element={<AdminProtectedRoutes path='/category' component={<CategoryList/>} />} />
                {/* AddCategoryComponent */}
                <Route path='/addCategory' element={<AdminProtectedRoutes path='/addCategory' component={<AddCategory/>} />} />
                {/* SubCategoryListComponent */}
                <Route path='/subcategory' element={<AdminProtectedRoutes path='/subcategory' component={<SubCategoryList/>} />} />
                {/* AddSubCategoryComponent */}
                <Route path='/addSubCategory' element={<AdminProtectedRoutes path='/addSubCategory' component={<AddSubCategory/>} />} />
                {/* SubSubCategoryListComponent */}
                <Route path='/subsubcategory' element={<AdminProtectedRoutes path='/subsubcategory' component={<SubSubCategoryList/>} />} />
                {/* AddSubSubCategoryComponent */}
                <Route path='/addSubSubCategory' element={<AdminProtectedRoutes path='/addSubSubCategory' component={<AddSubSubCategory/>} />} />

              {/* SELLER MGMT */}
                {/* SellerListComponent */}
                <Route path='/supplier' element={<AdminProtectedRoutes path='/supplier' component={<SellerList/>} />} />
                {/* AddSellerComponent */}
                <Route path='/supplier/addSupplier' element={<AdminProtectedRoutes path='/supplier/addSupplier' component={<AddSupplier/>} />} />
                              {/* AddSellerComponent */}
              <Route path='/supplier/edit/:id' element={<AdminProtectedRoutes path='/supplier/edit/:id' component={<AddSupplierAddrs/>} />} />

          
                      
            </Routes>
          </div> 
          <ToastContainer/>
        </>);
}

export default Controller;