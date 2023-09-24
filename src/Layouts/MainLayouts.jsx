import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBarComponents/NavBar/NavBar";

const MainLayouts = () => {
   return (
      <div className="font-[Inter,sans-serif] ">
         <NavBar></NavBar>
         <Outlet></Outlet>
      </div>
   );
};

export default MainLayouts;