import { useLoaderData, useParams } from "react-router-dom";
import DonationCardDetails from "../../Components/DonationCardDetails/DonationCardDetails";


const DonationCardDetailsPage = () => {
   const donationCardsData = useLoaderData()
   const { id } = useParams()
   const targetDonationCardData = donationCardsData?.find(cardData => cardData?.id === Number(id)) 
   //    console.log(donationCardsData);
   // console.log(targetDonationCardData);
   return (
      <div>
         <DonationCardDetails targetDonationCardData={targetDonationCardData}></DonationCardDetails>
      </div>
   );
};

export default DonationCardDetailsPage;