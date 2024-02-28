import React, { useEffect, useState } from 'react'
import { add } from '../redux/CartSlice';
import { useDispatch } from 'react-redux';
const Home = () => {
  const [products, setProduct] = useState([]);
  const dispatch = useDispatch();
  useEffect(()=>{
    const fetchProduct = async()=>{
      const res = await fetch("https://fakestoreapi.com/products");
      const data= await res.json();
      setProduct(data);
    }
    fetchProduct();
  },[])
const handleadd =(product)=>{
  dispatch(add(product));
}

  return (
    <div className='productsWrapper'>
      {
        products.map((product)=>(
          <div className='card' key={product.id}>
            <img src={product.image} alt='img'/>
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className='btn' onClick={()=>handleadd(product)}>Add to cart</button>
          </div>
        ))
      }
    </div>
  )
}

export default Home