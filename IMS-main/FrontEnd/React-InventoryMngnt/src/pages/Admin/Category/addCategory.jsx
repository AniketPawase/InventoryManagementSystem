import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import NavigationBarAdmin from "../NavigationBarAdmin"

function AddCategory() {

  const [categories, setCategories] = useState({  name: ""})

  const navigate = useNavigate();

  const register = ()=>{
    console.log(categories)
    
    //
    axios.post("http://127.0.0.1:4000/catgry", categories)
             .then(result => {
              console.log("added successfully")
              setCategories({ name: ""})
               navigate('/category')
             }).catch(error => {console.log(error)}) 
  }


  const onInputChange = (event) => {
    let copyOfCtgry = { ...categories }
    copyOfCtgry[event.target.name] = event.target.value;
    setCategories(copyOfCtgry);
}

    return ( 
      <div className='container-fluid'>
      { <NavigationBarAdmin /> }   
 <div className='container'>
    <h3>Add Category</h3>
    <hr />
    <form>
    <div className='mb-3'>
              <label htmlFor=''>Name</label>
              <input
                type='text'
                className='form-control'
                onChange={onInputChange}
                name='name'
                value={categories.name}
                placeholder='Enter name of Category here'
              />
      </div>
      <div>
        <button  className='btn btn-primary' onClick={register} >
          Save Or Update
        </button>
      </div>
    </form>
    <hr />
    <Link to='/category'>Back to List</Link>
  </div>
  </div>  );
}

export default AddCategory;