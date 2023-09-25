import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import DonationPage from "../Pages/Donation/DonationPage";
import StatisticsPage from "../Pages/Statistics/StatisticsPage";
import MainLayouts from "../Layouts/MainLayouts";
import DonationCardDetailsPage from "../Pages/DonationCardDetailsPage/DonationCardDetailsPage";

const myCreatedRoutes = createBrowserRouter([
   {
      path: '/',
      element: <MainLayouts></MainLayouts>,
      children: [
         {
            path: '/',
            element: <HomePage></HomePage>,
         },
         {
            path: '/donation-details/:id',
            element: <DonationCardDetailsPage></DonationCardDetailsPage>,
            loader: () => fetch('/donationData.json')
         },
         {
            path: '/donation',
            element:<DonationPage></DonationPage>
         },
         {
            path: '/statistics',
            element:<StatisticsPage></StatisticsPage>
         },
      ]
   }
])

export default myCreatedRoutes