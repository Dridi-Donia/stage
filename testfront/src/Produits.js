import {useEffect, useState} from 'react';

const Produits = () => {
    const [products,setProducts]= useState([]);
    useEffect(async ()=>{
        const res= await fetch('http://localhost:5000/getproduits');
        const data= await res.json();
        setProducts(data);
    },[])
    return ( 
        <div className='Products'>
        {products.map(product=>{
            return (<div key={product.id}>
                    <h3>{product.productName}</h3>
                    <img src={product.productimageUrl}/>
                    <h4>{product.productCategory}</h4>
                    <h5>{product.productPrice}</h5>
                    <h5>{product.Reviews}</h5>
                </div>)
        })}
        </div>
     );
}
 
export default Produits;