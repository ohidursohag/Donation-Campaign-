
import PropTypes from 'prop-types';
import { SaveDonationData, getStoredDonationData } from '../../utilities/saveDonationDataToLocalStorage';

const DonationCardDetails = ({ targetDonationCardData }) => {
   const {id, Picture, Donation_Amount, Text_color, Title, Description } = targetDonationCardData || {}
   
   const handleDonation = () => {
      const savedDonatedDataId = getStoredDonationData()

      const isExist = savedDonatedDataId.find(savedId => savedId === id);

      if (isExist) {
         alert('You Alredy Donated here')
      } else {
         SaveDonationData(id)        
         alert('Donation Successfull')
      }
   }

   return (
      <section className='container mx-auto px-2'>
         <div className='pt-[100px] md:pt-[130px] mb-[100px] '>
            <div className='relative '>
               <figure >
                  <img className='w-full rounded-md md:rounded-lg object-cover max-h-[800px]' src={Picture} alt="" />
               </figure>
               <div className='bg-black  absolute h-[70px] md:h-[130px] w-full rounded-b-md md:rounded-b-lg bottom-0 opacity-50 '>
               </div>
               <button onClick={handleDonation}
                  style={{ backgroundColor: `${Text_color}` }} className={`px-3 py-1 md:py-3 md:px-5 lg:px-7 lg:py-4 rounded-md text-white ml-9 my-9 absolute -bottom-6 -left-6 md:bottom-0 md:left-0  md:text-xl font-semibold`}>Donate ${Donation_Amount}</button>
            </div>
            <h2 className='md:mt-14 mt-5 text-3xl sm:text-[40px] font-bold mb-2 sm:mb-5'>{Title}</h2>
            <p className='text-justify leading-8 px-1'>{Description}</p>
         </div>
      </section>
   );
};

DonationCardDetails.propTypes = {
   targetDonationCardData: PropTypes.object
};

export default DonationCardDetails;