import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationData } from "../../utilities/saveDonationDataToLocalStorage";
import StatisticsPiChart from "../../Components/StatisticsPiChart/StatisticsPiChart";

const StatisticsPage = () => {

   const [totalDonatedData,setTotalDonatedData] = useState(0)
   const allDonationData = useLoaderData().length
   useEffect(() => {
      const getSavedDonationIds = getStoredDonationData()
      setTotalDonatedData(getSavedDonationIds.length);
   }, [])
   
   return (
      <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
         <StatisticsPiChart totalDonatedData={totalDonatedData} allDonationData={allDonationData}></StatisticsPiChart>
         <div className=" space-y-3 sm:space-y-0 sm:flex gap-10 items-center justify-center mt-5">
            <div className="flex gap-3 items-center justify-center">
               <p className="font-medium">Your Donation</p>
               <div className="w-14 h-4 bg-[#00C49F] rounded-lg"></div>
            </div>
            <div className="flex gap-3 items-center justify-center">
               <p className="font-medium ">Total Donation</p>
               <div className="w-14 h-4 bg-[#FF444A] rounded-lg"></div>
            </div>

         </div>
      </div>
   );
};

export default StatisticsPage;