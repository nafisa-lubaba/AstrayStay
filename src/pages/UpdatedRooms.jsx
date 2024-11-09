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
    const { _id, date } = roomsInfo || {};

    useEffect(() => {
        if (user) {
            Data();
        }
    }, [user]);
    const Data = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/myBooking/${user?.email}`);
            setItems(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        if (date) {
            setStartDate(new Date(date));
        }
    }, [date]);
    const handleSubmit = async (event) => {
        event.preventDefault();

        const BookData = {
            deadline: startDate,
            email: user?.email,
        };

        try {
            const { data } = await axios.put(
                `${import.meta.env.VITE_API_URL}/updateData/${id}`,
                BookData
            );
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    icon: 'success',
                    title: 'Booking Date Updated',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (err) {
            console.error('Error updating booking date:', err);
        }
    };

    return (
        <div>
            <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Booking Details</h1>
            {roomsInfo && (
                <form onSubmit={handleSubmit}>
                    <div>
                        <p>Room Description: {roomsInfo.room_description}</p>
                        <p>Room Size: {roomsInfo.room_size}</p>
                        <p>Per Night: {roomsInfo.price_per_night}</p>
                        
                        <DatePicker
                            className='border p-2 w-full rounded-md mt-4'
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
                    </div>
                    <button type="submit" className="bg-blue-700 text-white btn mt-4">
                        Update Booking Date
                    </button>
                </form>
            )}
        </div>
        </div>
    );
};

export default UpdatedRooms;