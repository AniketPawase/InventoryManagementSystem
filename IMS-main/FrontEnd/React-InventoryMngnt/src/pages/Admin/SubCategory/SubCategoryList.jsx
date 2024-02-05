import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
import NavigationBarAdmin from '../NavigationBarAdmin';

function SubCategoryList() {

    const [subcategories, setsubCategories] = useState([]);


    useEffect(() => {
      fetchSubCategoryList();
    }, []);

    const fetchSubCategoryList = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:4000/subcatgry'); 
        setsubCategories(response.data);
      } catch (error) {
        console.error('Error fetching SubCategory data:', error);
      }
    };
    return (
      <div className='container-fluid'>
      { <NavigationBarAdmin /> } 
            <div className='container'>
      <h3>List of Sub-Categories</h3>
      <hr />
      <div>
        <td>
        <Link to='/addSubCategory' className='btn btn-primary mb-2'>
          Add Sub Category
        </Link>
        </td>
        <td>  
        <Link to='/category' className='btn btn-secondary mb-2'>
          Categories
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
            {subcategories.map((subcatgory) => (
              <tr key={subcatgory.id}>
                <td>{subcatgory.id}</td>
                <td>{subcatgory.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>  );
}

export default SubCategoryList;