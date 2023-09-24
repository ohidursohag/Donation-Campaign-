import HomePageBanner from "../../Components/HomePageBanner/HomePageBanner";
import DonationCards from "../../Components/HomePageCards/DonationCards/DonationCards";

const HomePage = () => {

   return (
      <div>
         <HomePageBanner></HomePageBanner>
         <div className="container mx-auto px-2">
            <DonationCards></DonationCards>
         </div>
      </div>
   );
};

export default HomePage;