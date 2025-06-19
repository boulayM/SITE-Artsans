import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardDetails from "./CardDetails";

function ArtisanProfile() {

const { id } = useParams();
  
    const [artisans, setArtisans] = useState([]);
  
    const getArtisan = async () => {
      const res = await fetch (`http://localhost:3000/artisans/${id}`);
      const json = await res.json();
      setArtisans (json);
    }
  
    
    useEffect (() => {
      getArtisan();

    }, [])
  
  return (
  

    <>
        <div className="mt-5 pt-5">
            <br></br>
            <div className="container">
                <CardDetails artisans={artisans}/>
            </div>
        </div>
    </>
)}

export default ArtisanProfile;
