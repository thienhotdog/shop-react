import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable  } from '@firebase/storage';
import '../../firebase/firebase';



const Addproduct = (props) =>{
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) =>{
        console.log(data);
        const storage = getStorage();
        const img = data.img;
        const file = img[0];
        console.log(file);
        const storageRef = ref(storage, `images/${file.name}`);
        const UploadTask = uploadBytesResumable(storageRef, file);
        uploadBytes(storageRef, file).then(() => {
            getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) =>{
                console.log(downloadURL);
               const newProducts = {
                  name: data.name,
                  price: data.price,
                  img: downloadURL,
                  cateId : data.cateId
               }
               console.log(newProducts);
               props.onAdd(newProducts);
               navigate("/admin");
            })
        })

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
                <input type="file" {...register("img", { required: true })} placeholder="ảnh" />
                {errors.img && <span>bắt buộc phải nhập trường hợp này</span>}
                <br />
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
                <button >Thêm</button>
            </form>
        </div>
    )
}
export default Addproduct;