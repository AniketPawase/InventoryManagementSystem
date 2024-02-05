import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import NavigationBarAdmin from '../NavigationBarAdmin';


function SubSubCategoryList() {

    const [subsubcategories, setsubsubCategories] = useState([]);

    useEffect(() => {
      fetchSubSubCategoryList();
    }, []);

    const fetchSubSubCategoryList = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:4000/subsubcatgry'); 
        setsubsubCategories(response.data);
      } catch (error) {
        console.error('Error fetching SubSubCategory data:', error);
      }
    };

    return (
      <div className='container-fluid'>
      { <NavigationBarAdmin /> } 
            <div className='container'>
      <h3>List of Sub-Sub-Categories</h3>
      <hr />
      <div>
        <td>
        <Link to='/addSubSubCategory' className='btn btn-primary mb-2'>
          Add Sub Sub Category
        </Link>
        <td>  
        <Link to='/category' className='btn btn-secondary mb-2'>
          Category
        </Link>
        </td>
        <td>  
        <Link to='/subcategory' className='btn btn-secondary mb-2'>
          Sub-Category
        </Link>
        </td>
        </td>
        <table className='table table-bordered table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {subsubcategories.map((subsubcat) => (
              <tr key={subsubcat.id}>
                <td>{subsubcat.id}</td>
                <td>{subsubcat.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>  );
}

export default SubSubCategoryList;