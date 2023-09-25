
import PropTypes from 'prop-types';

const DonationCardDetails = ({ targetDonationCardData }) => {
   console.log(targetDonationCardData);
   const { Picture, Donation_Amount, Text_color, Title, Description } = targetDonationCardData || {}
   return (
      <section className='container mx-auto px-2'>
         <div className='pt-[100px] md:pt-[150px] mb-[100px]'>
            <div className='relative'>
               <figure className=''>
                  <img className='w-full rounded-md md:rounded-lg object-cover' src={Picture} alt="" />
               </figure>
                  <div className='bg-black  absolute h-[70px] md:h-[130px] w-full rounded-b-md md:rounded-b-lg bottom-0 opacity-50 '>
                  </div>
               <button style={{ backgroundColor: `${Text_color}` }} className={`px-3 py-1 md:py-3 md:px-5 lg:px-7 lg:py-4 rounded-lg text-white ml-9 my-9 absolute -bottom-6 -left-6 md:bottom-0 md:left-0  md:text-xl font-semibold`}>Donate ${Donation_Amount}</button>
            </div>
            <h2 className='mt-14 text-[40px] font-bold mb-5'>{Title}</h2>
            <p className='text-justify leading-8'>{Description}</p>
         </div>
      </section>
   );
};

DonationCardDetails.propTypes = {
   targetDonationCardData: PropTypes.object
};

export default DonationCardDetails;