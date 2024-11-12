import axios from 'axios';
import { useEffect, useState } from 'react';

const Reviews = () => {
    const [cards, setCards] = useState([])
	useEffect(() => {
		const getData = async () => {
			const { data } = await axios(`${import.meta.env.VITE_API_URL}/review`)
			setCards(data)
		}
		getData()
	}, [])
    return (
		<div className="bg-[#2ccb99]">
    <section className="my-8 text-[#2ccb99] dark:text-gray-800">
        <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
            <h1 className="p-4 text-4xl font-semibold leading-none text-center">What our customers are saying about us</h1>
        </div>
        <div className="container card-body text-[#2ccb99] flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
            {cards.map((review, index) => (
                <div key={index} className="flex flex-col max-w-sm mx-4 my-6 shadow-lg bg-white">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                        <p className="relative px-6 py-1 text-lg italic text-center text-[#2ccb99]">
                            {review.rating}
                        </p>
                        <p className="relative px-6 py-1 text-lg italic text-center text-[#2ccb99]">
                            {review.comment_text}
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                        <img src={review.imageUrl} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500" />
                        <p className="text-xl font-semibold leading-tight">{review.name}</p>
                        <p className="text-sm uppercase">{review.email}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
</div>
       
    );
};

export default Reviews;