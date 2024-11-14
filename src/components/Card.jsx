// import { FaArrowRight } from "react-icons/fa";
// import { RiPriceTag2Line } from "react-icons/ri";
// import { TbListDetails } from "react-icons/tb";
// import { Link } from "react-router-dom";


// const Card = ({card}) => {
//     const { _id, room_id, room_images, title, room_description, availability, category, rating, price_per_night } = card
//     const cardStyle = {
//         backgroundImage: `url(${room_images})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center'
//     };
//     return (
//         <div className="card mb-10" style={cardStyle}>

//         <div className="card-details p-5" >
//             <div className="hero-overlay bg-opacity-10 rounded-lg">
//                 <div  className="pt-40 px-5">
                  
//                     <h2 className="text-2xl text-white font-bold">{title}</h2>
//                 </div>
//                 <div className="bottom flex items-center justify-between px-1">
//                     <div data-aos="fade-up-right" data-aos-duration="3000">
//                         <div className="flex items-center gap-2">
//                             <TbListDetails className="text-white text-5xl mb-5" />
//                             <h6 className="text-xl text-white">{room_description}</h6>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <RiPriceTag2Line className="text-white" />
//                             <h6 className="text-xl text-white">{price_per_night}</h6>
//                         </div>
//                     </div>
                   
                 
//                 </div>
                
//                     <Link to={`/rooms/${card._id}`} className="px-2 flex items-center py-1 text-xs font-semibold  uppercase transition-colors duration-300 transform  text-[#158260] rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none" data-aos="zoom-in">
//                    <div className=" bg-[#158260] text-white p-3 flex gap-2 rounded-lg">
//                    <p className="">book now</p>
//                         <FaArrowRight className="text-white" />
//                    </div>
//                     </Link>
//             </div>
//         </div>


//     </div>
//     );
// };

// export default Card;



import { FaArrowRight } from "react-icons/fa";
import { RiPriceTag2Line } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const { _id, room_images, title, room_description, price_per_night } = card;

    // Card background style
    const cardStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${room_images})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '15px',
        overflow: 'hidden',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    };

    return (
        <div
            className="card mb-10 shadow-lg hover:shadow-2xl transform hover:scale-105"
            style={cardStyle}
        >
            {/* Card content with gradient overlay */}
            <div className="card-details p-5 text-white h-full">
                <div className="flex flex-col justify-between h-full">
                    <div className="pt-40 pb-5">
                        {/* Title */}
                        <h2 className="text-2xl font-bold mb-2">{title}</h2>

                        {/* Description */}
                        <div className="flex items-center gap-2 mb-4">
                            <TbListDetails className="text-white text-3xl" />
                            <p className="text-lg leading-tight">{room_description}</p>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-2">
                            <RiPriceTag2Line className="text-white text-2xl" />
                            <p className="text-xl font-semibold">${price_per_night} / night</p>
                        </div>
                    </div>

                    {/* Button to book now */}
                    <Link
                        to={`/rooms/${_id}`}
                        className="self-end mt-4 transform transition-transform duration-300 hover:scale-105"
                    >
                        <div className="bg-[#158260] text-white flex items-center gap-2 px-4 py-2 rounded-lg shadow-md hover:bg-[#0f6750]">
                            <p className="text-sm font-semibold uppercase">Book now</p>
                            <FaArrowRight />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;