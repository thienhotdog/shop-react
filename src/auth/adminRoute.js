import { isAuthenticated } from "../auth";
import {Route} from "react-router-dom";
import { Navigate } from "react-router";
const AdminRoute = (props) => {

  if (isAuthenticated() && isAuthenticated().user.role == 1) {
    return props.children;
  }

  return <Navigate to="/signin" />;
}
 
export default AdminRoute;
