import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const NavLinks = () => {
   const [isShowNavLinks, setIsShowNavLinks] = useState(false)

   return (
      <div className=" ">
         <div className="relative">
            
            <button onClick={() => setIsShowNavLinks(!isShowNavLinks)}
               className="text-3xl text-[#FF444A] font-bold md:hidden">               
               {
                     isShowNavLinks ? <AiOutlineClose /> : <AiOutlineMenu />
               }
            </button>          
         </div>     
         <ul className={`text-lg xl:text-xl rounded-l-lg bg-[#FF444A] md:bg-transparent font-medium absolute md:static duration-[1500ms]  ${isShowNavLinks ? 'top-14 sm:top-16 right-0' : '-top-[300px] right-0'}  space-y-2 md:space-y-0  text-right md:text-start z-50 px-6 py-7  md:p-0 md:flex md:gap-5 lg:gap-10`}>
         <li>
            <NavLink className={({isActive}) => isActive ? 'text-white md:text-[#FF444A] underline ': '' } to='/'>Home</NavLink>
         </li>
         <li>
            <NavLink className={({isActive}) => isActive ? 'text-white md:text-[#FF444A] underline ': '' } to='/donation'>Donation</NavLink>
         </li>
         <li>
            <NavLink className={({isActive}) => isActive ? 'text-white md:text-[#FF444A] underline ': '' } to='/statistics'>Statistics</NavLink>
         </li>
         </ul>
      </div>
   );
};

export default NavLinks;