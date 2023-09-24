import { Link } from 'react-router-dom';
import campaignLogo from '../../../assets/Logo/Logo.png'
const NavBarLogo = () => {
   return (
      <figure>
         <Link to='/'>
            <img className='w-[150px] sm:w-[200px] xl:w-full' src={campaignLogo} alt="" />
         </Link>
      </figure>
   );
};

export default NavBarLogo;