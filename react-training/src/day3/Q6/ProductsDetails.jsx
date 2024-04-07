
import React from 'react';
import { Link, useParams } from 'react-router-dom';


function ProductsDetails(props) {
    const {id}=useParams();
    const product = props.products.find(item => item.id === Number(id));
  return (
    <div>
        <p>{product.details}</p>
        
        <Link to={'/'} >
            <button>Back</button>
        </Link>
    </div>
  )
}

export default ProductsDetails
