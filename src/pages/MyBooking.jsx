import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../authProvider/AuthProvider";


const MyBooking = () => {
    const [items, setItems] = useState([]);
  const [selectedRoomTitle, setSelectedRoomTitle] = useState('');
  const [isOpen, setIsOpen] = useState(false);
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
    } catch (error) {
      console.error('Error fetching booking data:', error);
    }
  }

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
          const { data } = await axios.post(
            `${import.meta.env.VITE_API_URL}/review`,
            reviewData
          );
          console.log(data)
    
          Swal.fire({
            title: 'Success!',
            text: ' Review Posted Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          });
          setIsOpen(false);
        } catch (err) {
          console.error('Error posting review:', err);
          Swal.fire('Error', 'An error occurred while posting the review', 'error');
        }
      };
    
 
    return (
        <div>
          <div className=" bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-100 to-90%">
      <h1 className="text-3xl text-center text-[#2ccb99] py-5">My booking room</h1>
      <div className="overflow-x-auto">
        <table className="table w-full mx-auto">
          {/* Table header */}
          <thead>
            <tr>
              <th className="hidden md:table-cell">No.</th>
              <th className="w-full md:w-auto">Room title</th>
              <th className="w-full md:w-auto">Price</th>
              <th className="w-full md:w-auto">Guest limit</th>
              <th className="w-full md:w-auto">Beds</th>
              <th className="w-full md:w-auto">Booking Date</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {items.map((list, index) => (
              <tr key={list._id}>
                <td className="hidden md:table-cell">{index + 1}.</td>
                <td className="w-full md:w-auto">{list.title}</td>
                <td className="w-full md:w-auto">{list.price_per_night}</td>
                <td className="w-full md:w-auto">{list.max_guests}</td>
                <td className="w-full md:w-auto">{list.beds}</td>
                <td className="w-full md:w-auto text-center">{list.bookingFrom} <br /> to <br /> {list.bookingTo}</td>
                <td>
                  <button onClick={() => { setIsOpen(true); setSelectedRoomTitle(list.title); }} className="btn btn-outline border border-[#2ccb99]  bg-[#2ccb99] text-white px-6 py-2 mx-auto tracking-wide capitalize transition-colors duration-300 transform  rounded-md hover:bg-white hover:text-black ">
                    Review
                  </button>
                </td>
                <td>
                  <button className="btn btn-outline border border-[#2ccb99]  bg-[#2ccb99] text-white px-6 py-2 mx-auto tracking-wide capitalize transition-colors duration-300 transform  rounded-md hover:bg-white hover:text-black">
                    Update Now
                  </button>
                </td>
                <td>
                  {/* <button onClick={() => handleCancle(list._id, list.bookingId)} className="btn btn-outline border border-[#2ccb99]  bg-[#2ccb99] text-white px-6 py-2 mx-auto tracking-wide capitalize transition-colors duration-300 transform  rounded-md hover:bg-white hover:text-black">
                    Cancel
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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