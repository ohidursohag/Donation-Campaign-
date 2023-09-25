import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const DonationCards = () => {
   const [cardsData, setCardsData] = useState([])

   useEffect(() => {
      fetch('/donationData.json').then(res => res.json()).then(data => setCardsData(data))
   }, [])

   return (
      <div className="flex flex-wrap gap-6 sm:gap-5 xl:gap-4 2xl:gap-6 justify-center mb-[50px] lg:mb-[100px]">
         {
            cardsData?.map(cardData => <DonationCard key={cardData.id} cardData={cardData}></DonationCard>)
         }
         
      </div>
   );
};

export default DonationCards;