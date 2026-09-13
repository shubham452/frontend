import React, { useEffect, useState } from 'react'

const LoadData = () => {

    const [product, setProduct] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton,setDisableButton]= useState(false);
    

    async function fetchData()
    {
        try{
            const response= await fetch(
                `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20}`
            );

            const result = await response.json();

            if(result && result.products){
                setProduct((prevProduct)=>[...prevProduct,...result.products])
            }
            console.log(product);
            
            }catch(e){
            console.log(e);
        }
    }
    useEffect(()=>{
        fetchData();
    },[count]);
    
    useEffect(()=>{
        if(product && product.length === 100)
        {
            setDisableButton(true);
        }
    },[product]);


  return (
    <div className='loadData'>
        <div className='container'>
            {product && product.length ?
            product.map((item)=>(
                <div className='product' key={item.id}>
                    <img src={item.thumbnail} alt={item.title}/>
                    <p>{item.title}</p>
                </div>
            )):null}
        </div>
        <div className='button'>
            <button disabled={disableButton} onClick={()=>setCount(count+1)}>Load More</button>

        </div>
    </div>
  )
}

export default LoadData