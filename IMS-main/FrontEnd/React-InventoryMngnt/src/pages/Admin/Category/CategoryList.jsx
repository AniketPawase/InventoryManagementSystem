import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
import NavigationBarAdmin from "../NavigationBarAdmin"

function CategoryList() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
      fetchCategoryList();
    }, []);

    const fetchCategoryList = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:4000/catgry'); 
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching Category data:', error);
      }
    };

    return (
      <div className='container-fluid'>
      { <NavigationBarAdmin /> }  
            <div className='container'>
      <h3>List of Categories</h3>
      <hr />
      <div>
        <td>
        <Link to='/addCategory' className='btn btn-primary mb-2'>
          Add Category
        </Link>
        </td>
        <td>  
        <Link to='/subcategory' className='btn btn-secondary mb-2'>
          Sub-Category
        </Link>
        </td>
        <td>  
        <Link to='/subsubcategory' className='btn btn-secondary mb-2'>
          Sub-Sub-Category
        </Link>
        </td>
        <table className='table table-bordered table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th>Id</th>
              <th>Name</th>
              {/* <th colSpan={3}>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div> );
}

export default CategoryList;