// import { useContext, useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
// import { useParams } from "react-router-dom";
// import { AuthContext } from "../authProvider/AuthProvider";
// import axios from "axios";
// import Swal from "sweetalert2";


// const UpdatedRooms = () => {
//     const { id } = useParams();
//     const { user } = useContext(AuthContext);
//     const [items, setItems] = useState([]);
//     const [startDate, setStartDate] = useState(new Date());

//     const roomsInfo = items.find(item => item._id === id);
//     const { _id, date } = roomsInfo || {};

//     useEffect(() => {
//         if (user) {
//             Data();
//         }
//     }, [user]);
//     const Data = async () => {
//         try {
//             const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/myBooking/${user?.email}`);
//             setItems(data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };
//     useEffect(() => {
//         if (date) {
//             setStartDate(new Date(date));
//         }
//     }, [date]);
//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const BookData = {
//             deadline: startDate,
//             email: user?.email,
//         };

//         try {
//             const { data } = await axios.put(
//                 `${import.meta.env.VITE_API_URL}/updateData/${id}`,
//                 BookData
//             );
//             console.log(data);
//             if (data.modifiedCount > 0) {
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Booking Date Updated',
//                     showConfirmButton: false,
//                     timer: 1500,
//                 });
//             }
//         } catch (err) {
//             console.error('Error updating booking date:', err);
//         }
//     };

//     return (
//         <div>
//             <div className="container mx-auto mt-8">
//             <h1 className="text-2xl font-bold mb-4">Booking Details</h1>
//             {roomsInfo && (
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <p>Room Description: {roomsInfo.room_description}</p>
//                         <p>Room Size: {roomsInfo.room_size}</p>
//                         <p>Per Night: {roomsInfo.price_per_night}</p>
                        
//                         <DatePicker
//                             className='border p-2 w-full rounded-md mt-4'
//                             selected={startDate}
//                             onChange={(date) => setStartDate(date)}
//                         />
//                     </div>
//                     <button type="submit" className="bg-blue-700 text-white btn mt-4">
//                         Update Booking Date
//                     </button>
//                 </form>
//             )}
//         </div>
//         </div>
//     );
// };

// export default UpdatedRooms;



import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useParams } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const UpdatedRooms = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [startDate, setStartDate] = useState(new Date());

    const roomsInfo = items.find(item => item._id === id);
    console.log(roomsInfo)
    const { _id, deadline } = roomsInfo || {};

    useEffect(() => {
        if (user) {
            fetchData();
        }
    }, [user]);

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/myBooking/${user?.email}`);
            setItems(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (deadline) {
            setStartDate(new Date(deadline));
        }
    }, [deadline]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const BookData = {
            deadline: startDate, // Ensure date is in ISO format
            email: user?.email,
        };

        try {
            const response = await axios.put(
                `${import.meta.env.VITE_API_URL}/updateData/${id}`,
                BookData
            );

            const data = response.data;
            console.log("Update response:", data);

            if (data.modifiedCount > 0) {
                Swal.fire({
                    icon: 'success',
                    title: 'Booking Date Updated',
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Failed to Update Booking Date',
                    text: 'No changes were made.',
                });
            }
        } catch (err) {
            console.error('Error updating booking date:', err);
            Swal.fire({
                icon: 'error',
                title: 'Update Failed',
                text: 'There was an issue updating the booking date.',
            });
        }
    };

    return (
        // <div className="container mx-auto mt-8">
        //     <h1 className="text-2xl font-bold mb-4">Booking Details</h1>
        //     {roomsInfo ? (
        //         <form onSubmit={handleSubmit}>
        //             <div>
        //                 <p>Room Description: {roomsInfo.room_description}</p>
        //                 <p>Room Size: {roomsInfo.room_size}</p>
        //                 <p>Per Night: {roomsInfo.price_per_night}</p>

        //                 <DatePicker
        //                     className="border p-2 w-full rounded-md mt-4"
        //                     selected={startDate}
        //                     onChange={(deadline) => setStartDate(deadline)}
        //                 />
        //             </div>
        //             <button className="bg-green-600 text-white mt-4 mb-4 px-4 py-2 rounded-lg font-semibold text-sm shadow-md transition-transform transform hover:scale-105 hover:bg-green-700">
        //                                     Update Booking Date
        //                                 </button>
                    
        //         </form>
        //     ) : (
        //         <p>Loading room details...</p>
        //     )}
        // </div>


        <div className="container mx-auto mt-10 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Booking Details</h1>
        {roomsInfo ? (
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 items-center bg-white rounded-lg shadow-lg p-6"
            >
                <div className="w-full">
                <p className="text-lg font-medium">
                        <span className="font-semibold text-[#158260]">Room Title:</span>{" "}
                        {roomsInfo.title}
                    </p>
                    <p className="text-lg font-medium">
                        <span className="font-semibold text-[#158260]">Room Description:</span>{" "}
                        {roomsInfo.room_description}
                    </p>
                    <p className="text-lg font-medium mt-2">
                        <span className="font-semibold text-[#158260]">Room Size:</span>{" "}
                        {roomsInfo.room_size}
                    </p>
                    <p className="text-lg font-medium mt-2">
                        <span className="font-semibold text-[#158260]">Price Per Night:</span>{" "}
                        ${roomsInfo.price_per_night}
                    </p>
                </div>

                <div className="w-full">
                    <label className="block font-semibold mb-2 text-[#158260]">
                        Select New Booking Date
                    </label>
                    <DatePicker
                        className="w-full border border-blue-300 p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        selected={startDate}
                        onChange={(deadline) => setStartDate(deadline)}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-green-600 text-white mt-4 mb-4 px-4 py-2 rounded-lg font-semibold text-sm shadow-md transition-transform transform hover:scale-105 hover:bg-green-700"
                >
                    Update Booking Date
                </button>
            </form>
        ) : (
            <div className="flex justify-center items-center">
                <div className="radial-progress animate-spin text-blue-600" style={{ "--value": 70 }}></div>
                <p className="text-blue-500 ml-4 text-lg">Loading room details...</p>
            </div>
        )}
    </div>
    );
};

export default UpdatedRooms;
