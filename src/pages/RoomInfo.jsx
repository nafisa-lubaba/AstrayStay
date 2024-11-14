// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import { AuthContext } from "../authProvider/AuthProvider";
// import { useLoaderData } from "react-router-dom";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";


// const RoomInfo = () => {
//     const { user } = useContext(AuthContext);
//     const data = useLoaderData();
//     const [room, setRoom] = useState(data);
//     const [startDate, setStartDate] = useState(new Date());
//     const [review, setReview] = useState([]);
//     const [isOpen, setIsOpen] = useState(false);
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



//     const { _id, title, banner_image, room_description, room_images, price_per_night, room_size, features_paragraph, availability, special_offers, max_guests, beds } = room;

//     useEffect(() => {
//         setRoom(data);
//     }, [data]);
//     const filteredReview = review.filter(reviews => reviews.room_title === title);

//     const deadline = startDate;
//     const email = user?.email;
//     const name = user?.displayName;
//     const photourl = user?.photoURL;
//     console.log(user)



//     const handleClick = async e => {
//         e.preventDefault();
//         const bookingData = {
//             deadline,
//             availability: 'unAvailable',
//             email,
//             name,
//             photourl,
//             bookingId: _id,
//             title,
//             banner_image,
//             room_description,
//             price_per_night,
//             room_size,
//             room_images,
//             special_offers,
//             max_guests,
//             beds,
//             features_paragraph,
//         }
//         console.log(bookingData);
//         try {
//             const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/booking`, bookingData)
//             console.log(data)

//             const { newData } = await axios.put(`${import.meta.env.VITE_API_URL}/rooms/${_id}`);
//             console.log(newData)

//             const updateData = await axios.get(`${import.meta.env.VITE_API_URL}/rooms/${_id}`);
//             setRoom(updateData.data);
//             //   console.log(room)
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Booking successful',
//                 showConfirmButton: false,
//                 timer: 1500,
//             });


//         } catch (err) {
//             console.log(err);
//         }

//     }

//     return (


//         <div>
//             <div className=' text-[#158260] flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto  bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-100 to-90% '>
//                 <div className='max-w-2xl overflow-hidden rounded-lg shadow-md dark:bg-gray-800  bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-100 to-90%' >
//                     <img className="object-cover w-full h-64" data-aos="fade-right" src={banner_image} alt="Room" />

//                     <div className="p-6">
//                         <div >
//                             <a href="#" className="block mt-2 text-2xl font-semibold text-[#158260] duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{title}</a>

//                             <p className="mt-2 text-xl dark:text-gray-400"><span className="text-[#158260] font-bold">Description of the Room:</span>
//                                 <span className="text-[#2ccb99] pl-2 text-xl">{room_description}</span>
//                             </p>
//                         </div>
//                         <div className="mt-2">
//                             <div className="">
//                             <a href="#" className=" text-xl font-semibold text-[#158260]  dark:text-gray-200" tabIndex="0" role="link"> Availability: <span className="font-bold  text-[#2ccb99] pl-2">  {availability}</span>
//                             </a>
//                                 <div className="flex items-center justify-between mx-4">

//                                     <h2 className=" text-xl font-bold  text-[#158260]">Price: <span className=" pl-2 text-[#2ccb99]">${price_per_night}</span></h2>

//                                     <a href="#" className="mx-2 ml-3 font-semibold text-xl text-[#158260] " tabIndex="0" role="link">Room Size: <span className=" pl-2 text-[#2ccb99]">{room_size}</span></a>
                                  

//                                 </div>
                                
//                             </div>
//                             <div className="mt-2 pr-10">
//                             <a href="#" className="font-semibold lg:text-xl text-[#158260]    dark:text-gray-200" tabIndex="0" role="link"> Special offers: <span className="font-bold pl-2 text-[#2ccb99]">  {special_offers}</span>
//                             </a>
//                             </div>
//                         </div>
//                         <div className="mt-4">
                            
//                             <div className="flex items-center flex-col">
//                                 <h1 className="px-2 text-xl text-[#158260] font-bold">Reviews:</h1>
//                                 {filteredReview.length > 0 ? (
//                                     filteredReview.map((review, index) => (
//                                         <div key={index} className="review-item py-2">
//                                             {review.comment_text}
//                                         </div>
//                                     ))
//                                 ) : (
//                                     <div className="text-[#2ccb99] text-xl">No reviews available for this room.</div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="py-2">

//                         <div className="container flex flex-col justify-center p-4 mx-auto">
//                             <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
//                                 {room_images.map((roomImage, index) => (
//                                     <img key={index} className="object-cover w-full dark:bg-gray-500 aspect-square" src={roomImage} alt={`Room ${index}`} />
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="relative flex justify-center">
//                         <div className="p-5">
//                             <form onSubmit={handleClick}>
//                                 {
//                                     availability === 'unAvailable' ?
//                                         <button disabled type="button" className="btn bg-blue-700 text-white w-full mt-5 mb-5 ml-3">
//                                             Booked</button>
//                                         :
//                                         <button type="button" className="w-full bg-[#158260] text-white px-6 py-2 mx-auto tracking-wide capitalize transition-colors duration-300 transform  rounded-md hover:bg-white hover:text-black" onClick={() =>  setIsOpen(true)} >Confirm Booking</button>
//                                 }

//                                 {isOpen && (
//                                     <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
//                                         <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
//                                             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


//                                             <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
//                                                 <div>
//                                                     <h2 className="text-[#2ccb99]">{title}</h2>
//                                                 </div>
//                                                 <div>
//                                                     <div className="flex flex-col">
//                                                         <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Maximum number of guest:
//                                                             <span className="text-[#2ccb99]"> {max_guests}</span></p>
//                                                         <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Numer of bed:
//                                                             <span className="text-[#2ccb99]"> {beds}</span></p>
//                                                     </div>
//                                                     <div className="flex items-center justify-between">
//                                                         <div className='flex flex-col '>
//                                                             <label className='text-gray-700'>date</label>
//                                                             <div>

//                                                                 <DatePicker className='border p-2 w-full rounded-md' selected={startDate}
//                                                   onChange={deadline => setStartDate(deadline)}>

//                                                                 </DatePicker>
//                                                             </div>
//                                                         </div>
                                                       
                                                            


                                                        
                                                           
                                                        

//                                                     </div>

//                                                     <div className="mt-2 text-center">
//                                                         <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title"></h3>
//                                                         <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">

//                                                         </p>
//                                                     </div>
//                                                 </div>

//                                                 <div className="mt-5 sm:flex sm:items-center sm:justify-between">


//                                                     <div className="sm:flex sm:items-center ">
//                                                         <button onClick={handleClick} className="w-full px-4 py-2 mt-2 text-sm font-medium bg-[#158260] tracking-wide text-white capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
//                                                             Book Now

//                                                         </button>

//                                                         <button onClick={() => setIsOpen(false)} className="w-full px-4 py-2 mt-2 text-sm font-medium bg-[#158260] tracking-wide text-white capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
//                                                             Cancel
//                                                         </button>


//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )}
//                             </form>
//                         </div>
//                     </div>
//                 </div >
//             </div >
//         </div>
    
//     );
// };

// export default RoomInfo;

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../authProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RoomInfo = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    const [room, setRoom] = useState(data);
    const [startDate, setStartDate] = useState(new Date());
    const [review, setReview] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios(`${import.meta.env.VITE_API_URL}/review`);
                setReview(data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        setRoom(data);
    }, [data]);

    const filteredReview = review.filter(reviews => reviews.room_title === room.title);
    const { _id, title, banner_image, room_description, room_images, price_per_night, room_size, features_paragraph, availability, special_offers, max_guests, beds } = room;

    const handleBooking = async (e) => {
        e.preventDefault();

        const bookingData = {
            deadline: startDate,
            availability: 'unAvailable',
            email: user?.email,
            name: user?.displayName,
            photourl: user?.photoURL,
            bookingId: _id,
            title,
            banner_image,
            room_description,
            price_per_night,
            room_size,
            room_images,
            special_offers,
            max_guests,
            beds,
            features_paragraph,
        };

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/booking`, bookingData);
            await axios.put(`${import.meta.env.VITE_API_URL}/rooms/${_id}`);
            const updatedRoomData = await axios.get(`${import.meta.env.VITE_API_URL}/rooms/${_id}`);
            setRoom(updatedRoomData.data);

            Swal.fire({
                icon: 'success',
                title: 'Booking successful',
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            console.error('Booking error:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-sky-50 to-emerald-100">
            <div className="flex flex-col md:flex-row justify-around gap-5 items-center md:max-w-screen-xl mx-auto py-10">
                <div className="max-w-2xl bg-white rounded-lg shadow-md overflow-hidden">
                    <img className="object-cover w-full h-64" src={banner_image} alt="Room" />
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold text-[#158260]">{title}</h2>
                        <p className="mt-2 text-xl text-[#2ccb99]">{room_description}</p>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <span className="text-xl font-semibold text-[#158260]">Availability: <span className="text-[#2ccb99]">{availability}</span></span>
                                <span className="text-xl font-semibold text-[#158260]">Price: <span className="text-[#2ccb99]">${price_per_night}</span></span>
                            </div>
                            <div className="mt-2">
                                <span className="text-xl font-semibold text-[#158260]">Room Size: <span className="text-[#2ccb99]">{room_size}</span></span>
                            </div>
                            <div className="mt-2">
                                <span className="text-xl font-semibold text-[#158260]">Special Offers: <span className="text-[#2ccb99]">{special_offers}</span></span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-xl font-bold text-[#158260]">Reviews:</h3>
                            {filteredReview.length > 0 ? (
                                filteredReview.map((rev, index) => (
                                    <div key={index} className="text-gray-600">{rev.comment_text}</div>
                                ))
                            ) : (
                                <div className="text-[#2ccb99]">No reviews available for this room.</div>
                            )}
                        </div>
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl font-bold text-[#158260]">Room Images</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                            {room_images.map((image, index) => (
                                <img key={index} className="object-cover w-full h-48 rounded-lg" src={image} alt={`Room Image ${index}`} />
                            ))}
                        </div>
                    </div>

                    <div className="p-6">
                        {availability === 'unAvailable' ? (
                            <button disabled className="w-full bg-gray-500 text-white py-2 rounded-md">Room Booked</button>
                        ) : (
                            <button onClick={() => setIsOpen(true)} className="w-full bg-[#158260] text-white py-2 rounded-md">Confirm Booking</button>
                        )}
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                        <h2 className="text-[#2ccb99]">{title}</h2>
                        <div className="mt-2">
                            <p className="text-sm text-gray-600">Max Guests: <span className="text-[#2ccb99]">{max_guests}</span></p>
                            <p className="text-sm text-gray-600">Beds: <span className="text-[#2ccb99]">{beds}</span></p>
                        </div>
                        <div className="mt-4">
                            <label className="text-gray-700">Select Date</label>
                            <DatePicker selected={startDate} onChange={setStartDate} className="border p-2 w-full rounded-md" />
                        </div>

                        <div className="mt-4 flex justify-between">
                            <button onClick={handleBooking} className="bg-[#158260] text-white px-4 py-2 rounded-md">Book Now</button>
                            <button onClick={() => setIsOpen(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RoomInfo;