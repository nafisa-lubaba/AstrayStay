// import axios from "axios";
// import { useEffect, useState } from "react";

// import { Link } from "react-router-dom";

// const Rooms = () => {
//     const [rooms, setRooms] = useState([])
//     const [minPrice, setMinPrice] = useState('');
//     const [maxPrice, setMaxPrice] = useState('');
//     const [loading, setLoading] = useState(false);
//     useEffect(() => {
//         const getData = async () => {
//             setLoading(true);
//             try {

//                 const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/rooms`, {
//                     params: {
//                         minPrice,
//                         maxPrice
//                     }
//                 });
//                 setRooms(data);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         getData();
//     }, [minPrice, maxPrice]);

//     console.log(rooms);

//     return (
       
//         <div className="bg-[#ebefeb] min-h-screen">
//         <div className="container px-4 py-10 mx-auto">
//             <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
//                 <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
//                     <label className="text-gray-700">
//                         Min Price:
//                     </label>
//                     <input
//                         className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                         type="number"
//                         value={minPrice}
//                         onChange={(e) => setMinPrice(e.target.value)}
//                     />
//                 </div>
//                 <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
//                     <label className="text-gray-700">
//                         Max Price:
//                     </label>
//                     <input
//                         className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                         type="number"
//                         value={maxPrice}
//                         onChange={(e) => setMaxPrice(e.target.value)}
//                     />
//                 </div>
//             </div>
//             {loading ? (
//                 <div className="flex justify-center mt-8">
//                     <p className="text-gray-700">Loading...</p>
//                 </div>
//             ) : (
//                 <div className="grid grid-rows-1 lg:grid-cols-3 gap-8 h-full mt-5  ">
//                     {rooms
//                         .filter(room => room.availability === "Available")
//                         .map(room => (
//                             <Link
//                                 key={room._id}
//                                 to={`/rooms/${room._id}`}
//                                 className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
//                             >
//                                 <figure className="">
//                 <img className="rounded-xl px-5 pt-5" src={room.room_images} alt={`image for the tourist_spot_name ${room.category}`} />
//               </figure>
//               <div className="card-body" data-aos="fade-left">
//                 <hr className="border-dotted my-2 border-[#158260]" />
//                 <h1 className="text-3xl font-bold lg:text-xl lg:font-bold">{room.title}</h1>
//                 <div className="mb-3">
//                   <p className="font-semibold">
//                     category: <span className="font-bold ml-3">{room.category}</span>
//                   </p>
//                   <p className="font-semibold">
//                     Description: <span className="font-bold ml-3">{room.room_description}</span>
//                   </p>
//                   <p className="font-semibold">
//                     price_per_night: <span className="font-bold ml-3">${room.price_per_night}</span>
//                   </p>
//                 </div>
//                 <hr className="border-dotted my-2 border-[#158260]" />
//                 <div className="flex justify-between mb-3"></div>
//               </div>
//                             </Link>
//                         ))}
//                 </div>
//             )}
//         </div>
//     </div>
      
    
//     );
// };

// export default Rooms;


import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
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

    return (
        <div className="bg-[#ebefeb] min-h-screen">
            <div className="container px-4 py-10 mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex items-center space-x-2">
                        <label className="text-gray-700">Min Price:</label>
                        <input
                            className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            type="number"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label className="text-gray-700">Max Price:</label>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {rooms
                            .filter(room => room.availability === "Available")
                            .map(room => (
                                <Link
                                    key={room._id}
                                    to={`/rooms/${room._id}`}
                                    className="relative max-w-sm bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg shadow-xl rounded-lg p-4 transition-transform transform hover:scale-105"
                                >
                                    {/* Room Image */}
                                    <figure className="relative h-48 w-full overflow-hidden rounded-lg">
                                        <img
                                            src={room.room_images}
                                            alt={room.category}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                        />
                                        {/* Price Badge */}
                                        <span className="absolute top-2 right-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                            ${room.price_per_night} / night
                                        </span>
                                    </figure>

                                    {/* Card Body */}
                                    <div className="mt-4 space-y-2">
                                        <h1 className="text-2xl font-bold text-gray-900">{room.title}</h1>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold">Category:</span> {room.category}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold">Description:</span> {room.room_description}
                                        </p>
                                    </div>

                                    {/* Book Now Button */}
                                    <div className="flex justify-end mt-4">
                                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-md transition-transform transform hover:scale-105 hover:bg-green-700">
                                            Book Now
                                        </button>
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