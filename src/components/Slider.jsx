import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css/autoplay'; 
import { Link } from 'react-router-dom';
const Slider = () => {
    return (
        <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[  Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        cssMode={true}
    >
        <SwiperSlide className="relative ">
            <div>
                <img className="w-full " src="https://i.ibb.co/HrCGtmB/banner1-1.png" />
            </div>
            <div className="absolute inset-0 flex flex-col text-center items-center justify-center bg-black bg-opacity-60 rounded-lg">
                <h2 className="text-2xl lg:text-5xl pb-5 font-bold">Celestial hospitality awaits:<span className='text-white'> AstraStay</span></h2>
                <div className="flex w-[350px] lg:w-[650px] text-center">
                    <p className="sm:block hidden lg:text-xl mb-4 text-white font-bold">Discover unparalleled comfort and seamless booking experiences, redefining hospitality with every stay.</p>
                  
                   
                    
                </div>
                <Link to='/rooms' className="w-full px-4 py-2  font-medium bt glass tracking-wide text-white capitalize transition-colors duration-300 transform border border-gray-800  rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 flex justify-center items-center dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                             Explore All Rooms ->
                                            </Link>
              
               
            
            </div>
            
        </SwiperSlide>
        <SwiperSlide className="relative">
            <div>
                <img className="w-full" src="https://i.ibb.co/nCdnpx3/banner-3-2.png" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 rounded-lg">
            <h2 className="text-2xl lg:text-5xl pb-5 font-bold">Celestial hospitality awaits:  <span className='text-white'> AstraStay</span></h2>
                <div className="flex w-[350px] lg:w-[650px] text-center">
                    <p className="sm:block hidden lg:text-xl mb-4 text-white font-bold">Discover unparalleled comfort and seamless booking experiences, redefining hospitality with every stay.</p>
                </div>
                <Link to='/rooms' className="w-full px-4 py-2  font-medium bt glass tracking-wide text-white capitalize transition-colors duration-300 transform border border-gray-800  rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 flex justify-center items-center dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                             Explore All Rooms ->
                                            </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
            <div>
                <img className="w-full" src="https://i.ibb.co/1mnPNZS/banner-4.png" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 rounded-lg">
            <h2 className="text-2xl lg:text-5xl pb-5 font-bold">Celestial hospitality awaits:  <span className='text-white'> AstraStay</span></h2>
              
                <div className="flex w-[350px] lg:w-[650px] text-center">
                    <p className="sm:block hidden lg:text-xl mb-4 text-white font-bold">Discover unparalleled comfort and seamless booking experiences, redefining hospitality with every stay.</p>
                </div>
                <Link to='/rooms' className="w-full px-4 py-2  font-medium bt glass tracking-wide text-white capitalize transition-colors duration-300 transform border border-gray-800  rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 flex justify-center items-center dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                             Explore All Rooms ->
                                            </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
            <div>
                <img className="w-full " src="https://i.ibb.co/1ZFrH1k/banner-5.png" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 rounded-lg">
            <h2 className="text-2xl lg:text-5xl pb-5 font-bold">Celestial hospitality awaits:  <span className='text-white'> AstraStay</span></h2>
                <div className="flex w-[350px] lg:w-[650px] text-center">
                    <p className="sm:block hidden lg:text-xl mb-4 text-white font-bold">Discover unparalleled comfort and seamless booking experiences, redefining hospitality with every stay.</p>
                </div>
                <Link to='/rooms' className="w-full px-4 py-2  font-medium bt glass tracking-wide text-white capitalize transition-colors duration-300 transform border border-gray-800  rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 flex justify-center items-center dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                             Explore All Rooms ->
                                            </Link>
            </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
            <div>
                <img className="w-full" src="https://i.ibb.co/f2XYLYY/banner-6.png" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-60 rounded-lg">
            <h2 className="text-2xl lg:text-5xl pb-5 font-bold">Celestial hospitality awaits:  <span className='text-white'> AstraStay</span></h2>
                <div className="flex w-[350px] lg:w-[650px] text-center">
                    <p className="sm:block hidden lg:text-xl mb-4 text-white font-bold">Discover unparalleled comfort and seamless booking experiences, redefining hospitality with every stay.</p>
                </div>
                <Link to='/rooms' className="w-full px-4 py-2  font-medium bt glass tracking-wide text-white capitalize transition-colors duration-300 transform border border-gray-800  rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 flex justify-center items-center dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                             Explore All Rooms ->
                                            </Link>
            </div>
        </SwiperSlide>
    </Swiper>
    );
};

export default Slider;