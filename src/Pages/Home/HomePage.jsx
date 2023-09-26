import Swal from 'sweetalert2'
import { useEffect, useState } from "react";
import HomePageBanner from "../../Components/HomePageBanner/HomePageBanner";
import DonationCards from "../../Components/HomePageCards/DonationCards/DonationCards";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
   const [diplayCardData, setDiplayCardData] = useState()
   const [query, setQuery] = useState("")
   const allAardsData = useLoaderData()

   useEffect(() => {
      setDiplayCardData(allAardsData)
   }, [allAardsData])

   const handleSearch = () => {
      if (query) {
         const searchedItems = allAardsData.filter(data => data.Category.toLowerCase().includes(query.toLowerCase()))

         if (searchedItems.length >0) {
            setDiplayCardData(searchedItems)
            setQuery('')
         } else {
            Swal.fire({
               position: 'center',
               icon: 'error',
               title: 'No data found! \n Please enter correct keyword',
               showConfirmButton: false,
               timer: 1500
            })
            setQuery('')
         }
      } else {
         setDiplayCardData(allAardsData)
      }
   }

   const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
         handleSearch();
      }
   }

   return (
      <div>
         <HomePageBanner query={query} setQuery={setQuery} handleSearch={handleSearch} handleKeyDown={handleKeyDown}></HomePageBanner>
         <div className="container mx-auto px-2">
            <DonationCards diplayCardData={diplayCardData} ></DonationCards>
         </div>
      </div>
   );
};

export default HomePage;