import PropTypes from 'prop-types';

const DonationCard = ({ cardData }) => {
   const { Picture, Text_color, Title, Card_bg, Category, Category_bg ,} = cardData || {}
   console.log(cardData);
   return (
      <div style={{ backgroundColor: `${Card_bg}`, color: `${Text_color}`}}
         className='max-w-[360px] sm:w-[300px] md:w-[350px] lg:w-[315px] xl:w-[300px] 2xl:w-[355px]  rounded-xl'>
         <figure >
            <img className='rounded-t-xl sm:h-[200px] 2xl:h-[220px] w-full  object-cover' src={Picture} alt="" />
         </figure>
         <div className='p-5 space-y-3'>
            <p style={{ backgroundColor: `${Category_bg}` }} className={`px-3 py-1 w-max rounded-md font-medium`}>{Category}</p>

            <h2 className='text-xl font-bold'>{Title}</h2>
         </div>
      </div>
   );
};

DonationCard.propTypes = {
   cardData: PropTypes.object
};

export default DonationCard;