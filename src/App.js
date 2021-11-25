import './App.css';
import 'antd/dist/antd.css';
import { useState,useEffect } from 'react';
import { add, getAll, remove, edit } from './api/product';
import Router from './Router';

function App() {

  const [products, setProducts] = useState([]);
  
  useEffect(() =>{
    const getProducts = async () =>{
      try{
        const {data} = await getAll();
        setProducts(data);
      }catch(error){
        console.log(error)
      }
    };
    getProducts();
  },[])

  const onHandleRemove = async(_id) =>{
    try{
      const {data} = await remove(_id);
      const newProducts = products.filter(item => item._id !== _id);
      console.log(newProducts)
      setProducts(newProducts);
    }catch(error){
      console.log(error)
    }
  }
  
  const onHandleAdd = async (item) => {
    try {
      const { data } = await add(item);
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleEdit = async (item) => {
    try {
      const { data } = await edit(item);
      const newProducts = products.map((product) =>
      product._id == data._id ? data : product
      ) 
      console.log(newProducts)
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
   <Router
      data = {products}
      onRemove={onHandleRemove}
      onAdd={onHandleAdd}
      onEdit={onHandleEdit}
   />
  );
}

export default App;