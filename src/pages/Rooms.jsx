import axios from "axios";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {

                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/rooms`, {
                    params: {
                        minPrice,
                        maxPrice
                    }
                });
                setRooms(data);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [minPrice, maxPrice]);

    console.log(rooms);

    return (
        // <div className="grid grid-rows-1 lg:grid-cols-3 gap-8 h-full  ">
        //     {rooms.map((card) => (
        //         <Link to={`/rooms/${card._id}`} key={card._id} className="card bg-[#767676] bg-opacity-20 backdrop-blur-base rounded-lg text-[#158260]  bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-100 to-90%" data-aos="fade-right">
        //             <figure className="">
        //                 <img className="rounded-xl px-5 pt-5" src={card.room_images} alt={`image for the tourist_spot_name ${card.category}`} />
        //             </figure>
        //             <div className="card-body" data-aos="fade-left">
        //                 <hr className="border-dotted my-2 border-[#158260]" />
        //                 <h1 className="text-3xl font-bold lg:text-xl lg:font-bold">{card.title}</h1>
        //                 <div className="mb-3">
        //                     <p className="font-semibold">
        //                         category: <span className="font-bold ml-3">{card.category}</span>
        //                     </p>
        //                     <p className="font-semibold">
        //                         Description: <span className="font-bold ml-3">{card.room_description}</span>
        //                     </p>
                           
        //                     <p className="font-semibold">
        //                         price_per_night: <span className="font-bold ml-3">${card.price_per_night}</span>
        //                     </p>
        //                 </div>
        //                 <hr className="border-dotted my-2 border-[#158260]" />
        //                 <div className="flex justify-between mb-3"></div>
        //             </div>
        //         </Link>
        //     ))}
        // </div>


        <div className="bg-[#ebefeb] min-h-screen">
        <div className="container px-4 py-10 mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
                    <label className="text-gray-700">
                        Min Price:
                    </label>
                    <input
                        className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                </div>
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
                    <label className="text-gray-700">
                        Max Price:
                    </label>
                    <input
                        className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </div>
            </div>
            {loading ? (
                <div className="flex justify-center mt-8">
                    <p className="text-gray-700">Loading...</p>
                </div>
            ) : (
                <div className="grid grid-rows-1 lg:grid-cols-3 gap-8 h-full mt-5  ">
                    {rooms
                        .filter(room => room.availability === "Available")
                        .map(room => (
                            <Link
                                key={room._id}
                                to={`/rooms/${room._id}`}
                                className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
                            >
                                <figure className="">
                <img className="rounded-xl px-5 pt-5" src={room.room_images} alt={`image for the tourist_spot_name ${room.category}`} />
              </figure>
              <div className="card-body" data-aos="fade-left">
                <hr className="border-dotted my-2 border-[#158260]" />
                <h1 className="text-3xl font-bold lg:text-xl lg:font-bold">{room.title}</h1>
                <div className="mb-3">
                  <p className="font-semibold">
                    category: <span className="font-bold ml-3">{room.category}</span>
                  </p>
                  <p className="font-semibold">
                    Description: <span className="font-bold ml-3">{room.room_description}</span>
                  </p>
                  <p className="font-semibold">
                    price_per_night: <span className="font-bold ml-3">${room.price_per_night}</span>
                  </p>
                </div>
                <hr className="border-dotted my-2 border-[#158260]" />
                <div className="flex justify-between mb-3"></div>
              </div>
                            </Link>
                        ))}
                </div>
            )}
        </div>
    </div>
      
    
    );
};

export default Rooms;