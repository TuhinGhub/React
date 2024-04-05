import React from 'react';
import {Route,BrowserRouter,Routes} from 'react-router-dom';
import Products from './Products';
import ProductsDetails from './ProductsDetails';

const Q6=()=> {
    const products=[{id:1,name:"mobile1",price:1000,qty:"20",details:"This is the 2024 latest model that have the brand value as Iphone."},{id:2,name:"mobile2",price:2000,qty:100,details:"This is the 2023 latest model that have the brand value as Motorola"}];
  return (
    <>
    <div>Q6</div>
     <BrowserRouter>
    <Routes>
        <Route path="/" element={<Products products={products}/>}></Route>
        <Route path="/products/:id" element={<ProductsDetails products={products} />}></Route>
    </Routes>
    </BrowserRouter>
    </>
   
    
  )
}

export default Q6