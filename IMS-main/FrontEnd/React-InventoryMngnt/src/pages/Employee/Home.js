import axios from "axios";
import ProductCard from "../../pages/Employee/Products/ProductCard";
import { useEffect, useState } from "react"
import Navbar from "../../pages/Employee/Navbar";


function Home() {
    
    const [products, setProducts] = useState([])
    const [data, setdata] =useState("")


    useEffect(() => {

        axios.get(`http://127.0.0.1:8080/product/allProducts`)
            .then(res =>{
              debugger
              console.log(res.data)
              setProducts(res.data)
            } )
            .catch(err => console.log(err));
        }, [])

    return(
        <>
        <div className="container">
        <Navbar setdata={setdata} data={data}/>
        </div> 
        <div className="container my-4">
        <div className="row">
          {products.map((product, index) => 
          {
            if(data.length > 0){
              if(product.productName.toLowerCase().includes(data.toLowerCase())){
                return (
                  <div key={index} className="col-md-4 col-sm-6 mb-4">
                    <ProductCard product={product} />
                  </div>
                )
              }
            }
            else{
              return (
                <div key={index} className="col-md-4 col-sm-6 mb-4">
                  <ProductCard product={product} />
                </div>
              )
            }
          })}
        </div>
      </div>
        </>
    )
}

export default Home;