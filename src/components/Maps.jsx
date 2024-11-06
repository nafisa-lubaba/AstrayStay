import { Map, Marker } from "pigeon-maps";


const Maps = () => {
    return (
        <div>
        <div>
          <h2 className="font-bold  text-5xl text-center mt-10 mb-8">
         Discover Our Location In Map
          </h2>
        </div>
      
      <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
            <Marker width={50} anchor={[50.879, 4.6997]} />
          </Map>
      </div>
    );
};

export default Maps;