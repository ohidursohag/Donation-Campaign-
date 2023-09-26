import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../Components/NavBarComponents/NavBar/NavBar";
import LoadingAnimation from "../Components/LoadingAnimation/LoadingAnimation";
const MainLayouts = () => {
   const navigation = useNavigation()
   return (
      <div className="font-[Inter,sans-serif] ">
         <NavBar></NavBar>
         <div className="flex justify-center items-center -z-20">
            {
               navigation.state === 'loading' ? <LoadingAnimation /> : <Outlet></Outlet>
            }
         </div>
      </div>
   );
};

export default MainLayouts;