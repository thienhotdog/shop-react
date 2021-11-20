import { Outlet } from "react-router-dom";
import Header from "../compoments/website/header";

const WebsiteLayout = (props) =>{
    return(
        <div>
          <Header />
          <Outlet />
        </div>
    )
}

export default WebsiteLayout;