import { Link } from "react-router-dom";
import "../../assets/website.css";

const Header = () =>{
    return(
       <header className="header">
           <nav className="header_navbar">
                <ul className="navbar-list">
                    <Link to="">
                        <img src="https://snh.vn/wp-content/uploads/2016/01/logo-adidas.png" className="navbar-list-img" />
                    </Link>
                </ul>

                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link to="/shop" className="navbar-item-link">Shop</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="" className="_navbar-item-link">Tin Tức</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="" className="navbar-item-link">Bản Đồ</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="" className="navbar-item-link">Liên hệ</Link>
                    </li>
                </ul>

                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link to="" className="navbar-item-link">Đăng Ký</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/admin" className="navbar-item-link">Đăng nhập</Link>
                    </li>
                </ul>

           </nav>
       </header>
    )
}
export default Header;