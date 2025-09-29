import {useState, useEffect } from "react";
import CardFabrication from "./CardFabrication";
import { useParams } from "react-router-dom";

export default function ArtisanFabrication() {

  const { ArtisanProfile } = useParams();
  const [artisans, setArtisans] = useState([]);

  const getArtisan = async () => {
    const res = await fetch ("https://mabdev.alwaysdata.net/node/fabrication");
    const json = await res.json();
    setArtisans (json);
  }

  
  useEffect (() => {
    getArtisan();
  },[ArtisanProfile])

return (
    <>
        <div className="mt-5 pt-5">
          <br></br>
          <h3 className="titreSections">Les artisans du secteur de l'alimentation</h3>
          <div className="container">
            <CardFabrication artisans={artisans}/>
          </div>
        </div>
    </>

)
}