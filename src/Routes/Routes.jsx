import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import DonationPage from "../Pages/Donation/DonationPage";
import StatisticsPage from "../Pages/Statistics/StatisticsPage";
import MainLayouts from "../Layouts/MainLayouts";
import DonationCardDetailsPage from "../Pages/DonationCardDetailsPage/DonationCardDetailsPage";
import ErrorHandlePage from "../Pages/ErrorHandlePage/ErrorHandlePage";

const myCreatedRoutes = createBrowserRouter([
   {
      path: '/',
      element: <MainLayouts></MainLayouts>,
      errorElement: <ErrorHandlePage></ErrorHandlePage>,
      children: [
         {
            path: '/',
            element: <HomePage></HomePage>,
            loader: () => fetch('/donationData.json'),
            
         },
         {
            path: '/donation-details/:id',
            element: <DonationCardDetailsPage></DonationCardDetailsPage>,
            loader: () => fetch('/donationData.json'),
         },
         {
            path: '/donation',
            element: <DonationPage></DonationPage>,
            loader: () => fetch('/donationData.json'),
         },
         {
            path: '/statistics',
            element: <StatisticsPage></StatisticsPage>,
            loader: () => fetch('/donationData.json'),
         },
      ]
   }
])

export default myCreatedRoutes