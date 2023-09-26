import PropTypes from 'prop-types';


const HomePageBanner = ({ query, setQuery, handleSearch, handleKeyDown }) => {
   return (
      <section className='min-h-screen banner flex justify-center items-center mb-[50px] lg:mb-[100px]'>
         <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center px-2">I Grow By <br className="md:hidden" /> Helping People In Need</h1>

            <div className="px-2">
               <div className="relative max-w-[500px] mx-auto my-10">
                  <div onClick={handleSearch}
                     className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer">
                     <svg className="w-5 h-5 text-[#FF444A] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                     </svg>
                  </div>
                  <div>
                     <input value={query} onChange={e => setQuery(e.target.value)} onKeyDown={handleKeyDown}
                        type="search" className=" w-full outline-none p-4 pl-10   text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-[#FF444A]  " placeholder="Search here..." required />
                     <button onClick={handleSearch}
                        type="submit" className="text-white absolute right-0 bottom-0 bg-[#ff444ae9] hover:bg-[#ff272e] font-medium rounded-r-lg md:text-lg  h-full px-4 md:px-8 py-2 ">Search</button>
                  </div>
               </div>
            </div>

         </div>
      </section>
   );
};

HomePageBanner.propTypes = {
   query: PropTypes.string,
   setQuery: PropTypes.func,
   handleSearch: PropTypes.func,
   handleKeyDown: PropTypes.func,
};

export default HomePageBanner;