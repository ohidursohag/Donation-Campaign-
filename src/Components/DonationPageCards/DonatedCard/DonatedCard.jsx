import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonatedCard = ({ donatedData }) => {
   const {id, Picture, Text_color, Title, Card_bg, Category, Category_bg, Donation_Amount } = donatedData || {}

   return (
      <div  style={{ backgroundColor: `${Card_bg}` }}
         className='sm:flex items-center sm:w-full lg:w-[490px] xl:w-[618px] 2xl:w-[746px]  rounded-lg'>
         <figure className='sm:h-full'>
            <img className='rounded-t-lg sm:rounded-tr-none sm:rounded-l-lg  sm:h-[220px] md:h-[240px] lg:h-full  xl:h-[250px] 2xl:h-[280px]  sm:w-[280px] md:w-[320px] lg:w-[190px] xl:w-[280px] 2xl:w-[320px] object-cover' src={Picture}  />
         </figure>
         <div className='p-5 space-y-3 sm:space-y-4'>
            <p style={{ backgroundColor: `${Category_bg}`, color: `${Text_color}` }} className={`px-3 py-1 w-max rounded-md font-medium`}>{Category}</p>
            <h2 className='text-2xl font-bold'>{Title}</h2>
            <p style={{ color: `${Text_color}` }} className='font-semibold'>${parseFloat(Donation_Amount).toFixed(2)}</p>

            <Link to={`/donation-details/${id}`} state={Title}>
            <button 
               style={{ backgroundColor: `${Text_color}` }} className={`px-3 py-2 md:py-3 md:px-5 xl:px-7 xl:py-4 rounded-md text-white   md:text-xl font-semibold mt-5`}>View Details</button>
            </Link>
         </div>
      </div>
   );
};


DonatedCard.propTypes = {
   donatedData: PropTypes.object
};

export default DonatedCard;