// import axios from "axios";
// import { useEffect, useState } from "react";
// import Slide from "./Slide";

// import { Autoplay, Mousewheel, Pagination } from "swiper/modules";

// import { Swiper, SwiperSlide } from 'swiper/react';


// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// export default function Carousel() {
//     // useEffect(() => {
//     //     Aos.init();

//     // }, [])
//     const [review, setReview] = useState([]);
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const { data } = await axios(`${import.meta.env.VITE_API_URL}/review`);
//                 setReview(data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, []);
//     console.log(review);
  
//     return (
//         <div className='container px-6 py-10 mx-auto' data-aos='fade-right'>
//             <Swiper
//              slidesPerView={1}
//              onSlideChange={() => console.log('slide change')}
//              onSwiper={(swiper) => console.log(swiper)}
//              modules={[  Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
             
               
    
//                 autoplay={{
//                     delay: 2000,
//                     disableOnInteraction: false,
//                 }}
//                 navigation={true}
//                 pagination={true}
//                 mousewheel={true}
//                 keyboard={true}
//                 cssMode={true}
//                 className="mySwiper"
//             >{
//                     review.map(reviews => (<SwiperSlide key={reviews._id}>
//                         <Slide
//                             image={reviews?.image}
//                             name={reviews?.name}
//                             comment_text={reviews?.comment_text}
//                             rating={reviews?.rating}
//                             text3='Best Hotel Deals In Town'
//                         />
//                     </SwiperSlide>))
//                 }
//             </Swiper>
//         </div>
//     );
// };

import { useEffect, useState } from "react";
import Slide from "./Slide";
import { Autoplay, Mousewheel, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Carousel() {
    const [review, setReview] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/review`);
                const data = await response.json();
                setReview(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
  
    return (
        <div className='container px-6 py-10 mx-auto' data-aos='fade-right'>
            <Swiper
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Autoplay, Navigation, Pagination, Mousewheel]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={{ clickable: true }}
                mousewheel={true}
                keyboard={true}
                className="mySwiper"
            >
                {
                    review.map(reviews => (
                        <SwiperSlide key={reviews._id}>
                            <Slide
                                image={reviews.image}
                                name={reviews.name}
                                comment_text={reviews.comment_text}
                                rating={reviews.rating}
                                text3='Best Hotel Deals In Town'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};
