import { FaRegStar, FaStar } from "react-icons/fa";


const Slide = ({ image, name, comment_text, rating, text3 }) => {
    return (
        <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg p-10">
            <h1 className="text-2xl font-semibold text-center text-gray-600 capitalize lg:text-3xl dark:text-white">
            Hear What Our Guests Are Saying
            </h1>
            <div className="flex justify-center mx-auto mt-6">
                {/* <span className="inline-block w-40 h-1 bg-blue-500 rounded-full">{name}</span> */}
                {/* <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span> */}
                {/* <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span> */}
                <div className="flex justify-center mx-auto mt-6">
                {[...Array(5)].map((_, index) => (
                    // Render filled or empty star icons based on the rating
                    rating >= index + 1 ? 
                        <button key={index} className='text-xl text-yellow-500'><FaStar /></button> :
                        <button key={index} className='text-xl text-yellow-500'><FaRegStar /></button>
                ))}
                {/* <p className='ml-2'>{rating}</p> */}
            </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-8">
                <img className="object-cover rounded-full w-24 h-24" src={image} alt="" />

                <div className="mt-4 text-center">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">{name}</h1>
                </div>

                <div className="w-[700px] mt-4 mb-16 text-center">
                    <h1 className="font-semibold text-gray-800 dark:text-white">{comment_text}</h1>
                </div>

            </div>

        </div>
    );
};

export default Slide;