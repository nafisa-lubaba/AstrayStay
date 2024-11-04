import { FaArrowRight } from "react-icons/fa";
import { RiPriceTag2Line } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

const Card = ({card}) => {
    const { _id, room_id, room_images, title, room_description, availability, category, rating, price_per_night } = card
    const cardStyle = {
        backgroundImage: `url(${room_images})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    return (
        <div className="card mb-10" style={cardStyle}>

        <div className="card-details p-5" >
            <div className="hero-overlay bg-opacity-10 rounded-lg">
                <div  className="pt-40 px-5">
                  
                    <h2 className="text-2xl text-white font-bold">{title}</h2>
                </div>
                <div className="bottom flex items-center justify-between px-1">
                    <div data-aos="fade-up-right" data-aos-duration="3000">
                        <div className="flex items-center gap-2">
                            <TbListDetails className="text-white text-5xl mb-5" />
                            <h6 className="text-xl text-white">{room_description}</h6>
                        </div>
                        <div className="flex items-center gap-2">
                            <RiPriceTag2Line className="text-white" />
                            <h6 className="text-xl text-white">{price_per_night}</h6>
                        </div>
                    </div>
                   
                 
                </div>
                
                    <Link to={`/rooms/${card._id}`} className="px-2 flex items-center py-1 text-xs font-semibold  uppercase transition-colors duration-300 transform  text-[#158260] rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none" data-aos="zoom-in">
                   <div className=" bg-[#158260] text-white p-3 flex gap-2 rounded-lg">
                   <p className="">book now</p>
                        <FaArrowRight className="text-white" />
                   </div>
                    </Link>
            </div>
        </div>


    </div>
    );
};

export default Card;