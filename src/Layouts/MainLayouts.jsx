import { Outlet } from "react-router-dom";

const MainLayouts = () => {
   return (
      <div>
         <div>Main LayOut</div>
         <Outlet></Outlet>
      </div>
   );
};

export default MainLayouts;