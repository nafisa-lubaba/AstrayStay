
import Slider from '../components/Slider';
import Cards from '../components/Cards';
import Maps from '../components/Maps';
import NewsLetter from '../components/NewsLetter';
import Testimonial from '../components/Testimonial'
import { useState } from 'react';

const Home = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        
       <div>
          <div className="relative flex justify-center">
                <button onClick={() => setIsOpen(true)} className="px-6 py-2 mx-auto tracking-wide duration-300 transform rounded-md ">
                </button>

                {isOpen && (
                    <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
                                style={{ backgroundImage: "url('https://i.ibb.co/4s34XXV/economy-class-room-1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="sm:flex sm:items-center justify-end items-end mb-5">
                                    <button onClick={() => setIsOpen(false)} className="w-full px-4 py-2 mt-2 text-sm font-medium bg-[#158260] text-white tracking-wide capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                        X
                                    </button>
                                </div>
                                <div className="bg-white bg-opacity-75 p-4 rounded-lg">
                                    <div className="mt-2 text-center">
                                        <h3 className="text-lg font-medium leading-6 text-red-700 capitalize dark:text-white" id="modal-title">Last-Minute Deals: Save up to 30% on bookings made within 48 hours</h3>
                                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                            Grab your chance to save big on your next trip by booking last-minute deals!
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 sm:flex sm:items-center sm:justify-between">

                                    {/* <div className="sm:flex sm:items-center">
                                <button onClick={() => setIsOpen(false)} className="w-full px-4 py-2 mt-2 text-sm font-medium bg-[#158260] text-white tracking-wide capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                    Cancel
                                </button>
                            </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        
         <div className=' container mx-auto w-[90%] '>
            <Slider></Slider>
            <Cards></Cards>
            <Maps></Maps>
            <NewsLetter></NewsLetter>
            <Testimonial></Testimonial>


          
            
        </div>
       </div>
    );
};

export default Home;