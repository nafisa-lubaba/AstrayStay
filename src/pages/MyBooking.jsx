// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import { AuthContext } from "../authProvider/AuthProvider";
// import { Link } from "react-router-dom";
// import { IoMdPerson } from "react-icons/io";
// import 'react-datepicker/dist/react-datepicker.css'


// const MyBooking = () => {
//     const [items, setItems] = useState([]);
//     const [selectedRoomTitle, setSelectedRoomTitle] = useState('');
//     const [isOpen, setIsOpen] = useState(false);
//     const [Id, setId] = useState('');


//     const { user } = useContext(AuthContext);
//     const name = user?.displayName;
//     const email = user?.email;
//     const image = user?.photoURL;

//     useEffect(() => {
//         if (user) {
//             getData();
//         }
//     }, [user]);

//     const getData = async () => {
//         try {
//             const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/myBooking/${user.email}`);
//             setItems(data);
//         } catch (error) {
//             console.error('Error fetching booking data:', error);
//         }
//     }
//     const handleCancle = async (id, bookingId) => {
//         console.log(id, bookingId);
//         const bookingData = {
//             availability: 'unAvailable',
//         }
//         try {
//             const confirmation = await Swal.fire({
//                 title: "Are you sure?",
//                 text: "You won't be able to revert this!",
//                 icon: "warning",
//                 showCancelButton: true,
//                 confirmButtonColor: "#3085d6",
//                 cancelButtonColor: "#d33",
//                 confirmButtonText: "Yes, delete it!"
//             });
//             if (confirmation.isConfirmed) {

//                 const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/myBooking/${id}`)
//                 console.log(data)
//                 const { data: update } = await axios.put(`${import.meta.env.VITE_API_URL}/roomsDlt/${bookingId}`, bookingData)
//                 console.log(update);
//                 Swal.fire({
//                     title: 'Success!',
//                     text: 'Cancel Successfully',
//                     icon: 'success',
//                     confirmButtonText: 'Cool'
//                 });
//             }

//             //refresh ui
//             getData()
//         } catch (err) {
//             console.log(err.message)
//             // toast.error(err.message)
//         }
//     }

//     const handleReviewSubmit = async e => {
//         e.preventDefault();
//         const form = e.target;
//         const comment_text = form.comment_text.value;
//         const rating = form.rating.value;
//         const timestamp = new Date().toISOString();

//         const reviewData = {
//             comment_text,
//             rating,
//             timestamp,
//             name,
//             email,
//             image,
//             title: selectedRoomTitle,
//         };

//         try {
//             const { data } = await axios.post(
//                 `${import.meta.env.VITE_API_URL}/review`,
//                 reviewData
//             );
//             console.log(data)

//             Swal.fire({
//                 title: 'Success!',
//                 text: ' Review Posted Successfully',
//                 icon: 'success',
//                 confirmButtonText: 'Cool'
//             });
//             setIsOpen(false);
//         } catch (err) {
//             console.error('Error posting review:', err);
//             Swal.fire('Error', 'An error occurred while posting the review', 'error');
//         }
//     };


//     const handleButtonClick = (list) => {
//         setIsOpen(true);
//         setSelectedRoomTitle(list.title);
//         setId(list.bookingId);
//     }


//     return (
//         <div>
//             <div className=" bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-100 to-90%">
//                 <h1 className="text-3xl text-center text-[#2ccb99] py-5">My booking room</h1>
//                 {items.map((list) => (
//                     <div key={list._id} className="flex lg:w-full rounded-2xl border border-dashed p-2">
//                         <div className="lg:w-[50%]">
//                             <img src={list.banner_image} alt="" />
//                         </div>
//                         <div className="lg:w-[50%] space-y-6 pl-5">
//                             <h1 className="text-4xl pt-5">{list.title}</h1>
//                             <p className="font-semibold">
//                                 f: <span className="font-bold ml-3">{list.features_paragraph}</span>
//                             </p>

//                             <div className="flex items-center">
//                                 <IoMdPerson className="text-3xl" />
//                                 <div className="text-xl">
//                                     Max Guests : {list.max_guests}
//                                 </div>
//                             </div>
//                             <p className="text-xl">Room Status : {list.availability}</p>
//                             <p className="text-xl">Date : {list.date}</p>
//                             <div  className="flex items-center">
//                                 <button onClick={() => handleButtonClick(list)} className="btn btn-outline border border-[#aae0aa] hover:bg-[#aae0aa] hover:outline-none hover:text-white text-[#aae0aa]">
//                                     Review
//                                 </button>

//                                 <div className="relative flex justify-center">
//                                     <div className="p-5">
//                                         <Link to={`/updates/${list._id}`}>
//                                             <button className="btn btn-outline ">Update Now</button>
//                                         </Link>
//                                     </div>
//                                 </div>
//                                 <button onClick={() => handleCancle(list._id, list.bookingId)} className="btn btn-outline border border-[#aae0aa] hover:bg-[#aae0aa] hover:outline-none hover:text-white text-[#aae0aa]">
//                                     Cancel
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}


//                 {/* Modal for Review Form */}
//                 {isOpen && (
//                     <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
//                         <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
//                             <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
//                             <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
//                                 <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
//                                     Review Room
//                                 </h3>
//                                 <form onSubmit={handleReviewSubmit} className="mt-4" action="#">
//                                     <label className="block mt-3" htmlFor="userName">User Name</label>
//                                     <input type="text" name="userName" id="userName" placeholder="User Name" value={name} className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

//                                     <label className="block mt-3" htmlFor="commentText">Write A Comment</label>
//                                     <textarea
//                                         name="comment_text"
//                                         id="commentText"
//                                         placeholder="Write Comment"
//                                         className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
//                                     />

//                                     <label htmlFor="rating" className="text-sm text-gray-700 dark:text-gray-200">
//                                         Rating (1-5)
//                                     </label>
//                                     <input
//                                         type="number"
//                                         name="rating"
//                                         id="rating"
//                                         min="1"
//                                         max="5"
//                                         required
//                                         className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
//                                     />

//                                     <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
//                                         <button type="button" onClick={() => setIsOpen(false)} className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
//                                             Cancel
//                                         </button>

//                                         <input type="submit" value="Submit Comment" className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>

//         </div>
//     );
// };

// export default MyBooking;

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../authProvider/AuthProvider";
import { Link } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import 'react-datepicker/dist/react-datepicker.css';

const MyBooking = () => {
    const [items, setItems] = useState([]);
    const [selectedRoomTitle, setSelectedRoomTitle] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [Id, setId] = useState('');

    const { user } = useContext(AuthContext);
    const name = user?.displayName;
    const email = user?.email;
    const image = user?.photoURL;

    useEffect(() => {
        if (user) {
            getData();
        }
    }, [user]);

    const getData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/myBooking/${user.email}`);
            setItems(data);
            console.log("Fetched booking data:", data); // Debug log
        } catch (error) {
            console.error('Error fetching booking data:', error);
        }
    };

    const handleCancle = async (id, bookingId) => {
        const bookingData = { availability: 'unAvailable' };
        try {
            const confirmation = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            });
            if (confirmation.isConfirmed) {
                const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/myBooking/${id}`);
                console.log("Delete response:", data); // Debug log

                const { data: update } = await axios.put(`${import.meta.env.VITE_API_URL}/roomsDlt/${bookingId}`, bookingData);
                console.log("Update response for room availability:", update); // Debug log

                Swal.fire({
                    title: 'Success!',
                    text: 'Cancel Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });

                // Refresh the list to show the latest data
                getData();
            }
        } catch (err) {
            console.error('Error while canceling:', err.message);
            Swal.fire('Error', 'An error occurred while canceling the booking', 'error');
        }
    };

    const handleReviewSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const comment_text = form.comment_text.value;
        const rating = form.rating.value;
        const timestamp = new Date().toISOString();

        const reviewData = {
            comment_text,
            rating,
            timestamp,
            name,
            email,
            image,
            title: selectedRoomTitle,
        };

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/review`, reviewData);
            console.log("Review response:", data); // Debug log

            Swal.fire({
                title: 'Success!',
                text: 'Review Posted Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            });
            setIsOpen(false);
        } catch (err) {
            console.error('Error posting review:', err);
            Swal.fire('Error', 'An error occurred while posting the review', 'error');
        }
    };

    const handleButtonClick = (list) => {
        setIsOpen(true);
        setSelectedRoomTitle(list.title);
        setId(list.bookingId);
    };

    return (
        <div>
            <div className="bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-100 to-90%">
                <h1 className="text-3xl text-center text-[#2ccb99] py-5">My booking room</h1>
                {items.map((list) => (
                    <div key={list._id} className="flex lg:w-full rounded-2xl border border-dashed p-2">
                        <div className="lg:w-[50%]">
                            <img src={list.banner_image} alt="Room" />
                        </div>
                        <div className="lg:w-[50%] space-y-6 pl-5">
                            <h1 className="text-4xl pt-5">{list.title}</h1>
                            <p className="font-semibold">
                                Features: <span className="font-bold ml-3">{list.features_paragraph}</span>
                            </p>

                            <div className="flex items-center">
                                <IoMdPerson className="text-3xl" />
                                <div className="text-xl">Max Guests: {list.max_guests}</div>
                            </div>
                            <p className="text-xl">Room Status: {list.availability}</p>
                            <p className="text-xl">Date: {list.date}</p> {/* Confirm if this is the updated date */}
                            <div className="flex items-center">
                                <button onClick={() => handleButtonClick(list)} className="btn btn-outline border border-[#aae0aa] hover:bg-[#aae0aa] hover:outline-none hover:text-white text-[#aae0aa]">
                                    Review
                                </button>

                                <div className="relative flex justify-center">
                                    <div className="p-5">
                                        <Link to={`/updates/${list._id}`}>
                                            <button className="btn btn-outline">Update Now</button>
                                        </Link>
                                    </div>
                                </div>
                                <button onClick={() => handleCancle(list._id, list.bookingId)} className="btn btn-outline border border-[#aae0aa] hover:bg-[#aae0aa] hover:outline-none hover:text-white text-[#aae0aa]">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Modal for Review Form */}
                {isOpen && (
                    <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
                            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                                <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                                    Review Room
                                </h3>
                                <form onSubmit={handleReviewSubmit} className="mt-4" action="#">
                                    <label className="block mt-3" htmlFor="userName">User Name</label>
                                    <input type="text" name="userName" id="userName" placeholder="User Name" value={name} className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                                    <label className="block mt-3" htmlFor="commentText">Write A Comment</label>
                                    <textarea
                                        name="comment_text"
                                        id="commentText"
                                        placeholder="Write Comment"
                                        className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                    />

                                    <label htmlFor="rating" className="text-sm text-gray-700 dark:text-gray-200">
                                        Rating (1-5)
                                    </label>
                                    <input
                                        type="number"
                                        name="rating"
                                        id="rating"
                                        min="1"
                                        max="5"
                                        required
                                        className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                    />

                                    <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                                        <button type="button" onClick={() => setIsOpen(false)} className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                            Cancel
                                        </button>

                                        <input type="submit" value="Submit Comment" className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyBooking;
