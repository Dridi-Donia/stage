import { useEffect, useState } from "react";

const Product = (match) => {
    const id = match.match.params.id;
    const[product,setProduct]= useState([]);
    useEffect(async ()=>{
        const data = await fetch(`http://localhost:5000/getoneproduit/${id}`)
         const res = await data.json();
         setProduct(res);
    },[])
    return (  
        <div>
            {
                product.map(product=>{
                    return(
                        <div key={product.id}>
                            <h3>{product.productName}</h3>
                            <img src={product.imageUrl}/>
                            <p>{product.description}</p>
                            <h4>{product.price}</h4>
                            <ul>
                                {product.review.map(review=>{
                                    return( <li>{review}</li>)
                                })}
                            </ul>
                        </div>
                    )
                })

            }
        </div>
    );
}
 
export default Product;