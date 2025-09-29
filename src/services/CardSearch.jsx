import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardSearchDetails from "./CardSearchDetails";

function CardSearch() {

const { nom } = useParams();
  
    const [artisans, setArtisans] = useState([]);
  
    const getArtisan = async () => {
      const res = await fetch (`https://mabdev.alwaysdata.net/node/artisans/nom/${nom}`);
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
                <CardSearchDetails artisans={artisans}/>
            </div>
        </div>
    </>
)}

export default CardSearch;
