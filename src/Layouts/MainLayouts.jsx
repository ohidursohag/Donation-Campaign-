import { Outlet, useLocation, useNavigation } from "react-router-dom";
import NavBar from "../Components/NavBarComponents/NavBar/NavBar";
import LoadingAnimation from "../Components/LoadingAnimation/LoadingAnimation";
import { useEffect } from "react";
import toSentenceCase from "../utilities/stringToSentenceCase";

const MainLayouts = () => {
   const navigation = useNavigation()

   const loc = useLocation()

   useEffect(() => {
      if (loc.pathname === '/') {
         document.title = `Donation Campaign | Home`
      } else if (loc.state) {
         document.title = loc.state
      }
      else {
         document.title = `${toSentenceCase(loc.pathname.replace('/', ''))}`
      }
   }, [loc.pathname, loc.state])

   return (
      <div className="font-[Inter,sans-serif] ">
         <NavBar></NavBar>
         <div >
            {
               navigation.state === 'loading' ? <LoadingAnimation /> : <Outlet></Outlet>
            }
         </div>
      </div>
   );
};

export default MainLayouts;