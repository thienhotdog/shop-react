import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate} from "react-router-dom";


import { get } from "../../api/product";


const EditProductForm = (props) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
} = useForm();


  const { id } = useParams();

  

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const {data}  = await get(id);
        console.log("day la data", data);
        setProduct(data[0]);
        reset(data[0]);
      } catch (error) {
          console.log(error)
      }
    };
    getProduct();
  }, []);


  const navigate = useNavigate();

  const onSubmit = (data) =>{
    const newProducts = {
        ...data
    }
    console.log(newProducts);
    props.onEdit(newProducts);
    navigate("/admin");
 }
  return (
    <>
      {/* {JSON.stringify(product)}
      {JSON.stringify(controlValue)} */}
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">cập nhật sản phẩm</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input type="text" {...register("name", { required: true })} placeholder={product.name} />
                {errors.name && <span>bắt buộc phải nhập trường hợp này</span>}
                <br />
        </div>

        <div className="mb-3">
          <label className="form-label">Giá sản phẩm</label>
          <input type="number" {...register("price", {required: true})}  placeholder={product.price} />
            {errors.price && <span>bắt buộc phải nhập trường hợp này</span>}
        </div>

        <div className="mb-3">
          <label className="form-label">Ảnh</label>

          <input type="text" {...register("img", { required: true })} placeholder={product.img} />
            {errors.img && <span>bắt buộc phải nhập trường hợp này</span>}
        </div>

        <div className="mb-3">
          <label className="form-label">CateId</label>
          <select className="form-control" {...register("cateId")}>
              <option value="6198a4b0ae3c26257c7dd93c" >Giày</option>
              <option value="619914726fb1834b9215254f">Quần Áo</option>
              <option value="6198a4b4ae3c26257c7dd93e">Phụ Kiện</option>
          </select>
          {errors.name && <span className="d-block mt-2 text-danger">
          Bắt buộc phải ấy link nhập trường này</span>}
        </div>
        <button type="submit" className="btn btn-primary">
          Cập nhật
        </button>
      </form>
    </>
  );
};
export default EditProductForm;