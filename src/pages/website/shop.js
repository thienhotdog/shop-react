import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import '../../assets/website.css'
import { useState, useEffect } from 'react';
import { filterProduct, getAll, sortProduct } from '../../api/product';
import { getAllCategory, getProductCate } from '../../api/category';

const { Sider, Content } = Layout;

const Shop = () =>{
    const [product, setProducts] = useState([]);
    useEffect(() =>{
        const getProduct = async () =>{
           try{
            const {data} = await getAll();
            setProducts(data);
           }catch(error){
               console.log(error)
           }     
        }
        getProduct();
    },[])

    const [category, setCategory] = useState([]);

    useEffect(() =>{
        const getCategory = async () =>{
           try{
                const {data} = await getAllCategory();
                setCategory(data);
           }catch(error){
               console.log(error)
           }
        };
        getCategory()
    },[])


    const onHandleSort = async (e) => {
        let {min,max} = e.target.dataset;
        let product =  await sortProduct(min,max);
        setProducts(product.data)
    }

   const onHandleFildProduct = async (e) =>{
       const id = e.target.dataset.id;
        const product = await getProductCate(id);
        setProducts(product.data);
   }

    const onHandleSearch = async (e) =>{
        let text = e.target.value;
        console.log(text);
        let product = await filterProduct(text);
        if(product){
            setProducts(product.data)
        }
    }
    
    return(
            <Layout style={{"marginTop": "15px"}} >
                <Sider className="container" style={{backgroundColor: 'white'}}>
                    <div className="direction">
                        <Link to="/index">Trang chủ</Link>
                        <span> --- </span>
                            <a to="#">Shop</a>
                            <div className="shop">
                                <input placeholder="nhập tên sản phẩm" onBlur={e => onHandleSearch(e)} />
                                <p className="shop_title">loại sản phẩm</p>
                                <div>
                                    <ul className="shop_option">
                                        {category.map((item,index) =>{
                                            return<div key={index}>
                                                    <li className="option-item" onClick={e => onHandleFildProduct(e)} data-id={item._id}>{item.name}</li>
                                                </div>
                                        })}
                                    </ul>
                                </div>    
                            </div>

                            <div className="border-b py-3">
                                <p className="shop_title">khoảng giá</p>
                                <ul className="shop_option">
                                    <li className="flex justify-between mb-2">
                                        <span className="option-item" onClick={e => onHandleSort(e)} data-min="0" data-max="3000000">0 - 3,000,000Đ</span>
                                    </li>
                                    <li className="flex justify-between mb-2">
                                        <span className="option-item" onClick={e => onHandleSort(e)} data-min="3000000" data-max="4000000">3,000,000-4,000,000Đ</span>
                                    </li>
                                    <li className="flex justify-between mb-2">
                                        <span className="option-item" onClick={e => onHandleSort(e)} data-min="4000000" data-max="5000000">4,000,000-5,000,000Đ</span>
                                    </li>
                                    <li className="flex justify-between mb-2">
                                        <span className="option-item" onClick={e => onHandleSort(e)} data-min="5000000" data-max="8000000">5,000,000-8,000,000Đ</span>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </Sider>
                <Content style={{backgroundColor: 'white'}}>
                    <Row className="shop container" gutter={[16, 24]}>
                        {product.map((item, index) =>{
                            return<Col className="gutter-row shop-" key={index} span={6}>
                                <Link to = {`/product/${item._id}/detail`}>
                                    <Card
                                        hoverable
                                        style={{ "width" : "100%" }}
                                        cover={<img alt="example" src={item.img} />}
                                    >
                                        <p className="py-2">{item.name}</p>
                                        <p><span>Giá : </span>{item.price} VNĐ</p>
                                    </Card>
                                </Link>
                            </Col>
                            
                        })}
                        {product.length==0 && <p>không tìm thấy sản phẩm</p>}
                    </Row>
                </Content>
            </Layout>
    )
}

export default Shop;