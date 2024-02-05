import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import NavigationBarAdmin from '../NavigationBarAdmin';

function AddSubSubCategory() {

  const [subsubcategories, setSubSubCategories] = useState({  name: ""})

  const navigate = useNavigate();

  const register = ()=>{
    console.log(subsubcategories)
    
    //
    axios.post("http://127.0.0.1:4000/subsubcatgry/1", subsubcategories)
             .then(result => {
              console.log("added successfully")
              setSubSubCategories({ name: ""})
               navigate('/subsubcategory')
             }).catch(error => {console.log(error)}) 
  }


  const onInputChange = (event) => {
    let copyOfSubSubCtgry = { ...subsubcategories }
    copyOfSubSubCtgry[event.target.name] = event.target.value;
    setSubSubCategories(copyOfSubSubCtgry);
}
    return (    
      <div className='container-fluid'>
      { <NavigationBarAdmin /> } 
 <div className='container'>
    <h3>Add SubSubCategory</h3>
    <hr />
    <form>
    <div className='mb-3'>
              <label htmlFor=''>Name</label>
              <input
                type='text'
                className='form-control'
                onChange={onInputChange}
                name='name'
                value={subsubcategories.name}
                placeholder='Enter name of Sub - SubCategory here'
              />
      </div>
      <div>
        <button  className='btn btn-primary' onClick={register}>
          Save Or Update
        </button>
      </div>
    </form>
    <hr />
    <Link to='/subsubcategory'>Back to List</Link>
  </div>
  </div> );
}

export default AddSubSubCategory;