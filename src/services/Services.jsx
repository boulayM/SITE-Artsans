import {useState, useEffect } from "react";
import CardServices from "./CardServices";
import { useParams } from "react-router-dom";

export default function ArtisanServices() {

  const { ArtisanProfile } = useParams();
  const [artisans, setArtisans] = useState([]);

  const getArtisan = async () => {
    const res = await fetch ("http://localhost:3000/services");
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
            <CardServices artisans={artisans}/>
          </div>
        </div>
    </>

)
}