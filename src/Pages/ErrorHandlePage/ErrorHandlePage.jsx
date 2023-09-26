import { useRouteError } from "react-router-dom";

const ErrorHandlePage = () => {

   const error = useRouteError()
   console.log(error);
   return (
      <div className="container mx-auto min-h-screen flex justify-center items-center">
         <div className="flex flex-col justify-center items-center space-y-5">
            <div className="text-7xl font-bold ">{error.status}</div>
            <div className="text-3xl font-medium  ">{error.statusText || error.error.message}</div>
            <div className="text-3xl font-medium  ">{error.data}</div>
         </div>
      </div>
   );
};

export default ErrorHandlePage;

