import {useState, useEffect } from "react";
import CardBatiment from "./CardBatiment";
import { useParams } from "react-router-dom";

export default function ArtisanBatiment() {

  const { ArtisanProfile } = useParams();
  const [artisans, setArtisans] = useState([]);

  const getArtisan = async () => {
    const res = await fetch ("https://mabdev.alwaysdata.net/node/batiment");
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
            <CardBatiment artisans={artisans}/>
          </div>
        </div>
    </>

)
}