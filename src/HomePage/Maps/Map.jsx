import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
    return (
        <div className="pt-20">
             {/* Map Section */}
             <section>

<div className="flex justify-center items-center  ">
<div className=" w-full mx-auto h-[500px] rounded-lg overflow-hidden ">
<MapContainer center={[24.0129, 89.2333]} zoom={9} className="h-full w-full">
{/* OpenStreetMap Tile Layer */}
<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

{/* Marker with Popup */}
<Marker position={[24.0129, 89.2333]}>
<Popup> 📍 This is a sample location! </Popup>
</Marker>
</MapContainer>
</div>
</div>

</section>

        </div>
    );
};

export default Map;