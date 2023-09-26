import PropTypes from 'prop-types';
import DonationCard from "../DonationCard/DonationCard";

const DonationCards = ({ diplayCardData }) => {
  
   return (
      <div className="flex flex-wrap gap-6 sm:gap-5 xl:gap-4 2xl:gap-6 justify-center mb-[50px] lg:mb-[100px]">
         {
            diplayCardData?.map(cardData => <DonationCard key={cardData.id} cardData={cardData}></DonationCard>)
         }
         
      </div>
   );
};

DonationCards.propTypes = {
   diplayCardData: PropTypes.array
};

export default DonationCards;