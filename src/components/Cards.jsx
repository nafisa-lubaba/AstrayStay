import { useLoaderData } from "react-router-dom";
import Card from "./Card";


const Cards = () => {
    const cards = useLoaderData()

    return (
        
        <div>
             <div>
                <h2 className="font-bold  text-5xl text-center mt-10 mb-4">Uncover Our Premier Featured Rooms</h2>
                <p className="font-bold text-gray-600  text-2xl text-center mt-5 mb-6 px-24">Experience curated luxury escapes with breathtaking views and easy booking – start your rejuvenating journey today.</p>

            </div>
            <div className="grid grid-rows-1 lg:grid-cols-1 gap-8">
            {/* {
            cards.map(card => <Card key={card.room_id}
            card={card}></Card>)
           } */}
            </div>
            
        </div>
    );
};

export default Cards;