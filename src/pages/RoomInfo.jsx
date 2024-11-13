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
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios(`${import.meta.env.VITE_API_URL}/review`);
                setReview(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    // Assuming data is an object with properties like _id, title, image, and room_description
    const { _id, title, banner_image, room_description, room_images, price_per_night, room_size, features_paragraph, availability, special_offers, max_guests, beds } = room;

    useEffect(() => {
        setRoom(data);
    }, [data]);
    const filteredReview = review.filter(reviews => reviews.room_title === title);

    const date = startDate;
    const email = user?.email;
    const name = user?.displayName;
    const photourl = user?.photoURL;
    console.log(user)



    const handleClick = async e => {
        e.preventDefault();
        const bookingData = {
            date,
            availability: 'unAvailable',
            email,
            name,
            photourl,
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
        }
        console.log(bookingData);
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/booking`, bookingData)
            console.log(data)

            const { newData } = await axios.put(`${import.meta.env.VITE_API_URL}/rooms/${_id}`);
            console.log(newData)

            const updateData = await axios.get(`${import.meta.env.VITE_API_URL}/rooms/${_id}`);
            setRoom(updateData.data);
            //   console.log(room)
            Swal.fire({
                icon: 'success',
                title: 'Booking successful',
                showConfirmButton: false,
                timer: 1500,
            });


        } catch (err) {
            console.log(err);
        }

    }

    return (


        <div>
            <div className=' text-[#158260] flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto  bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-100 to-90% '>
                <div className='max-w-2xl overflow-hidden rounded-lg shadow-md dark:bg-gray-800  bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-100 to-90%' >
                    <img className="object-cover w-full h-64" data-aos="fade-right" src={banner_image} alt="Room" />

                    <div className="p-6">
                        <div >
                            <a href="#" className="block mt-2 text-xl font-semibold text-[#158260] duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{title}</a>

                            <p className="mt-2 text-xl dark:text-gray-400"><span className="text-[#158260] font-bold">Description of the Room:</span>
                                <span className="text-[#2ccb99] pl-2 text-xl">{room_description}</span>
                            </p>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">

                                    <h1 className="px-2 text-xl"> | Max Guest:{max_guests}</h1>
                                </div>
                                <div className="flex items-center">

                                    <h1 className="px-2 text-xl"> | Beds: {beds}</h1>
                                </div>
                                <div className="flex items-center">

                                    <h1 className="px-2 text-xl"> | Size :{room_size}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <h1 className="px-2 text-xl"> Available : {availability}</h1>
                                </div>
                            </div>
                            <div className="flex items-center flex-col">
                                <h1 className="px-2 text-xl">Reviews:</h1>
                                {filteredReview.length > 0 ? (
                                    filteredReview.map((review, index) => (
                                        <div key={index} className="review-item py-2">
                                            {review.comment_text}
                                        </div>
                                    ))
                                ) : (
                                    <div>No reviews available for this room.</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="py-2 dark:bg-gray-100">
                        <h1 className="text-center block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">Our {room_description} images</h1>
                        <div className="container flex flex-col justify-center p-4 mx-auto">
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                                {room_images.map((roomImage, index) => (
                                    <img key={index} className="object-cover w-full dark:bg-gray-500 aspect-square" src={roomImage} alt={`Room ${index}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="p-5">
                            <form onSubmit={handleClick}>
                                {
                                    availability === 'unAvailable' ?
                                        <button disabled type="button" className="btn bg-blue-700 text-white w-full mt-5 mb-5 ml-3" >Book Now</button>
                                        :
                                        <button type="button" className="btn bg-blue-700 text-white w-full mt-5 mb-5 ml-3" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Now</button>
                                }

                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <div className='flex flex-col gap-2 ml-3 mt-5'>
                                            <label className='text-gray-700'>Deadline</label>
                                            <DatePicker
                                                className='border p-2 w-full rounded-md'
                                                selected={startDate}
                                                onChange={date => setStartDate(date)} />
                                        </div>
                                        <button
                                            type='submit'
                                            className='bg-blue-700 text-white btn mt-5'>
                                            Confirm
                                        </button>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </div>
        // <div className=' text-[#158260] flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto  bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-100 to-90%'>
        //     <div className="max-w-2xl overflow-hidden rounded-lg shadow-md dark:bg-gray-800  bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-100 to-90%">

        //         <div className="relative ">
        //             <img className="object-cover w-full h-64" data-aos="fade-right" src={banner_image} alt="Room" />

        //         </div>


        //         <div className="p-6" data-aos="fade-left">
        //             <div >
        //                 <a href="#" className="block mt-2 text-xl font-semibold text-[#158260] duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{title}</a>

        //                 <p className="mt-2 text-xl dark:text-gray-400"><span className="text-[#158260] font-bold">Description of the Room:</span>
        //                     <span className="text-[#2ccb99] pl-2 text-xl">{room_description}</span>
        //                 </p>
        //             </div>

        //             <div className="mt-4">
        //                 <div className="flex justify-between">
        //                     <div className="flex items-center">

        //                         <h2 className=" text-xl font-bold text-[#2ccb99]">Price: <span className="text-[#158260] pl-2">${price_per_night}</span></h2>

        //                         <a href="#" className="mx-2 ml-3 font-semibold text-xl text-[#2ccb99]" tabIndex="0" role="link">Room Size: <span className="text-[#158260] pl-2">{room_size}</span></a>
        //                         <div href="#" className="mx-2 text-xl font-semi  text-[#2ccb99] dark:text-gray-200" tabIndex="0" role="link"> Availability: <span className="font-bold text-[#158260] pl-2">  {availability}</span>
        //                         </div>
        //                     </div>


        //                 </div>
        //                 <a href="#" className=" mt-3 font-semibold lg:text-xl   text-[#2ccb99]  dark:text-gray-200" tabIndex="0" role="link"> special_offers: <span className="font-bold pl-2 text-[#158260]">  {special_offers}</span>
        //                 </a>

        //             </div>
        //         </div>


        //         <section className="py-6 dark:bg-gray-100 " data-aos="fade-right">
        //             <div className="container flex flex-col justify-center p-4 mx-auto">
        //                 <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
        //                     {
        //                         room_images.map((room_image, idx) => (
        //                             <img key={idx} className="object-cover w-full dark:bg-gray-500 aspect-square" src={room_image} />

        //                         ))
        //                     }


        //                 </div>
        //             </div>
        //         </section>
        //         <div className="relative flex justify-center">
        //             <div className="p-5">
        //                 <button onClick={() => {
        //                     if (availability === 'unAvailable') {
        //                         // Show alert
        //                         Swal.fire({
        //                             icon: 'error',
        //                             title: 'Room not available',
        //                             text: 'Sorry, this room is boooked',
        //                         });
        //                         return;
        //                     }
        //                     setIsOpen(true);
        //                 }} className="w-full bg-[#158260] text-white px-6 py-2 mx-auto tracking-wide capitalize transition-colors duration-300 transform  rounded-md hover:bg-white hover:text-black">
        //                     Confirm Booking
        //                 </button>
        //             </div>

        //             {isOpen && (
        //                 <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        //                     <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        //                         <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


        //                         <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
        //                             <div>
        //                                 <h2 className="text-[#2ccb99]">{title}</h2>
        //                             </div>
        //                             <div>
        //                                 <div className="flex flex-col">
        //                                     <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Maximum number of guest:
        //                                         <span className="text-[#2ccb99]"> {max_guests}</span></p>
        //                                     <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Numer of bed:
        //                                         <span className="text-[#2ccb99]"> {beds}</span></p>
        //                                 </div>
        //                                 <div className="flex items-center justify-between">
        //                                     <div className='flex flex-col '>
        //                                         <label className='text-gray-700'>date</label>
        //                                         <div className=''>
        //                                             <DatePicker
        //                                                 className='border p-2 w-full rounded-md'
        //                                                 selected={startDate}
        //                                                 onChange={date => setStartDate(date)} />
        //                                         </div>
        //                                     </div>

        //                                 </div>

        //                                 <div className="mt-2 text-center">
        //                                     <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title"></h3>
        //                                     <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">

        //                                     </p>
        //                                 </div>
        //                             </div>

        //                             <div className="mt-5 sm:flex sm:items-center sm:justify-between">


        //                                 <div className="sm:flex sm:items-center ">
        //                                     <button onClick={handleClick} className="w-full px-4 py-2 mt-2 text-sm font-medium bg-[#158260] tracking-wide text-white capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
        //                                         Book Now

        //                                     </button>

        //                                     <button onClick={() => setIsOpen(false)} className="w-full px-4 py-2 mt-2 text-sm font-medium bg-[#158260] tracking-wide text-white capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
        //                                         Cancel
        //                                     </button>


        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             )}
        //         </div>

        //     </div>






        // </div>
    );
};

export default RoomInfo;