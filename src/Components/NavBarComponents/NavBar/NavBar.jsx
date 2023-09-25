import NavBarLogo from "../NavBarLogo/NavBarLogo";
import NavLinks from "../NavLinks/NavLinks";

const NavBar = () => {
   return (
      <section className="container mx-auto px-5 relative">
         <nav className="flex justify-between items-center py-5 absolute w-full inset-x-0 px-3 sm:px-5">
            <NavBarLogo></NavBarLogo>
            <NavLinks></NavLinks>
         </nav>
      </section>
   );
};

export default NavBar;