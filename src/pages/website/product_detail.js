import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { get } from "../../api/product";

const ProductDetailPage = () =>{
    const [product, setProduct] = useState({});
    const {id} = useParams(); 
    console.log(id);
    useEffect(() =>{
        const getProduct = async () =>{
            try{
                const {data} = await get(id);
                setProduct(data[0]);
            }catch(error){
                console.log(error);
            }
        };
        getProduct();
    },[id])
    console.log(product);
    return(
        <div>
           {product.name}
           {product.price}
        </div>
    )
}

export default ProductDetailPage;