import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredDonationData } from "../../utilities/saveDonationDataToLocalStorage";
import DonatedCard from "../../Components/DonationPageCards/DonatedCard/DonatedCard";

const DonationPage = () => {
   const [showDonatedData, setShowDonatedData] = useState([])
   const allDonationData = useLoaderData()

   useEffect(() => {
      const getSavedDonationIds = getStoredDonationData()

      if (getSavedDonationIds.length) {
         const donatedData = allDonationData.filter(donationData => getSavedDonationIds.includes(donationData.id))
         setShowDonatedData(donatedData)
         console.log(allDonationData, getSavedDonationIds, donatedData);
      }     
   }, [allDonationData])

   return (
      <div className="pt-[150px] container mx-auto px-3 flex flex-wrap gap-5 mb-[100px]">
         {
            showDonatedData.map(donatedData => <DonatedCard key={donatedData.id} donatedData={donatedData}></DonatedCard>)
         }
      </div>
   );
};

export default DonationPage;