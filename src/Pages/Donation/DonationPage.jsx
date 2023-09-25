import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredDonationData } from "../../utilities/saveDonationDataToLocalStorage";
import DonatedCard from "../../Components/DonationPageCards/DonatedCard/DonatedCard";

const DonationPage = () => {
   const [showDonatedData, setShowDonatedData] = useState([]);
   const [isShow,setIsShow] = useState(false)
   const allDonationData = useLoaderData()

   useEffect(() => {
      const getSavedDonationIds = getStoredDonationData()

      if (getSavedDonationIds.length) {
         const donatedData = allDonationData.filter(donationData => getSavedDonationIds.includes(donationData.id))
         setShowDonatedData(donatedData)
         console.log(allDonationData, getSavedDonationIds, donatedData);
      }     
   }, [allDonationData])

   const handleShowAll = (isShow) => {
      setIsShow(isShow)
   }

   return (
      <div className="pt-[100px] container mx-auto px-3 flex flex-wrap gap-5 mb-[100px]">
         {
            isShow
               ? showDonatedData.map((donatedData) => <DonatedCard key={donatedData.id} donatedData={donatedData}></DonatedCard>)
               : showDonatedData.slice(0,4).map((donatedData) => (<DonatedCard key={donatedData.id} donatedData={donatedData}></DonatedCard>))
         }
         <div className="mx-auto">
            <button onClick={()=>handleShowAll(!isShow)}
               type="submit" className={`text-white  bg-[#009444] hover:bg-[#009444] font-medium rounded-lg md:text-lg  h-full px-4 md:px-8 py-2`}>
               {isShow ? 'Show Less' : 'Show All'}
            </button>
         </div>
      </div>
   );
};

export default DonationPage;