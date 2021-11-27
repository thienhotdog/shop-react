import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import AdminRoute from "./auth/adminRoute";
import AdminLayout from "./layouts/AdminLayout";
import WebsiteLayout from "./layouts/Website";
import Addproduct from "./pages/admin/add";
import EditProductForm from "./pages/admin/edit";
import ListProduct from "./pages/admin/list";
import HomePage from "./pages/website";
import ProductDetailPage from "./pages/website/product_detail";
import Shop from "./pages/website/shop";
import Signin from "./pages/website/signin";
import Signup from "./pages/website/signup";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Routes >
        
        {/* Layout Website*/}

        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage {...props} />} />
          <Route path="shop" element={<Shop  />} />
          <Route path="product/:id/detail" element={<ProductDetailPage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Route>

        {/* Layout Admin */}
            
        <Route path="/admin/*" element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<ListProduct {...props} />} />
            <Route path="addproduct" element={<Addproduct {...props} />} />
            <Route path="products/:id/edit" element={<EditProductForm {...props} />} />
        </Route>   
      </Routes>
    </BrowserRouter>
  );
};



export default Router;