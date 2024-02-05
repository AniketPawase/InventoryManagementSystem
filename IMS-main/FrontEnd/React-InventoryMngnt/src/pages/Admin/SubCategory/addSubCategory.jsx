import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import NavigationBarAdmin from '../NavigationBarAdmin';

function AddSubCategory() {

  const [subcategories, setSubCategories] = useState({  name: ""})

  const navigate = useNavigate();

  const register = ()=>{
    console.log(subcategories)
    
    //
    axios.post("http://127.0.0.1:4000/subcatgry/1", subcategories)
             .then(result => {
              console.log("added successfully")
              setSubCategories({ name: ""})
               navigate('/subcategory')
             }).catch(error => {console.log(error)}) 
  }


  const onInputChange = (event) => {
    let copyOfSubCtgry = { ...subcategories }
    copyOfSubCtgry[event.target.name] = event.target.value;
    setSubCategories(copyOfSubCtgry);
}
    return (    
      <div className='container-fluid'>
      { <NavigationBarAdmin /> } 
 <div className='container'>
    <h3>Add SubCategory</h3>
    <hr />
    <form>
    <div className='mb-3'>
              <label htmlFor=''>Name</label>
              <input
                type='text'
                className='form-control'
                onChange={onInputChange}
                name='name'
                value={subcategories.name}
                placeholder='Enter name of Sub - Category here'
              />
      </div>
      <div>
        <button  className='btn btn-primary' onClick={register}>
          Save Or Update
        </button>
      </div>
    </form>
    <hr />
    <Link to='/subcategory'>Back to List</Link>
  </div>
  </div>);
}

export default AddSubCategory;