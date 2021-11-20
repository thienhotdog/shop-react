import { Link } from "react-router-dom";
import '../../assets/website.css';
const ListProduct = (props) =>{
    return(
      <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Quản lý sản phẩm</h2>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link to="/admin/addproduct" className="btn btn-sm btn-outline-primary">
            Thêm sản phẩm
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table style={{"width":"100%"}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên</th>
              <th scope="col">ảnh</th>
              <th scope="col">Giá</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, index) => (
              <tr className="table" key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td><img src={item.img} className="shop-img" /></td>
                <td>{item.price}</td>
                <td style={{"textAlign":"center"}}>
                    <button onClick={() => props.onRemove(item._id)} style={{"margin":"0px 10px 0px 0px"}}>delete </button>
                    <Link to={`/admin/products/${item._id}/edit`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}

export default ListProduct;