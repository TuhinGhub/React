
import React from 'react'
import { Link } from 'react-router-dom';

const Products=(props)=> {
   

  return (
    <>
    <br />
    <div>Total Products are:</div>
    <br />
    {
        props.products.map((item,index)=>(
            <div key={index}>
                <span style={{margin:"10px"}}>{item.name}</span>
                <span style={{margin:"10px"}}>{item.price}</span>
                <Link to={`/products/${item.id}`}>
              <button>Get Details</button>
            </Link>
                <br />
                <br />
            </div>

        ))
    }
    </>
    
  )
}

export default Products
