import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"



const Addproduct = (props) =>{
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) =>{
       const newProducts = {
           ...data
       }
       console.log(newProducts);
       props.onAdd(newProducts);
       navigate("/admin");
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name", { required: true })} placeholder="tên sản phẩm" />
                {errors.name && <span>bắt buộc phải nhập trường hợp này</span>}
                <br />
                <input type="number" {...register("price", {required: true})} placeholder="giá" />
                {errors.price && <span>bắt buộc phải nhập trường hợp này</span>}
                <br />  
                <input type="text" {...register("img", { required: true })} placeholder="ảnh" />
                {errors.img && <span>bắt buộc phải nhập trường hợp này</span>}
                <br />
                <div className="mb-3">
                    <label className="form-label">CateId</label>
                        <select className="form-control" {...register("cateId")}>
                            <option value="61911c5b3219c8a1090433f9" >Danh mục 1</option>
                            <option value="61914c8eaeaa15a5f467ad78">Danh mục 2</option>
                            <option value="61915352767fa24e68c240db">Danh mục 3</option>
                            <option value="6191c27e10e0b42a96dc7e87">Danh mục 4</option>
                        </select>
                {errors.name && <span className="d-block mt-2 text-danger">
                    Bắt buộc phải ấy link nhập trường này</span>}
          
                </div>
                <button >Thêm</button>
            </form>
        </div>
    )
}
export default Addproduct;