import { isAuthenticated } from "../auth";
import { Route } from "react-router-dom";
import { Navigate } from "react-router";
const AdminRoute = (props) => {
//   console.log(isAuthenticated());
  console.log(props);

  return (
    <Route
      render={() =>
        isAuthenticated() && isAuthenticated().user.role == 1 ? (
          props.children
        ) : (
            <Navigate to="/signup" />
        )
      }
    />

  );
};
export default AdminRoute;
