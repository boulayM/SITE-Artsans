import {useState, useEffect } from "react";
import CardAlimentation from "./CardAlimentation";

export default function ArtisanAlimentation() {

  const [artisans, setArtisans] = useState([]);

  const getArtisan = async () => {
    const res = await fetch ("https://mabdev.alwaysdata.net/node/alimentation");
    const json = await res.json();
    setArtisans (json);
  }

  
  useEffect (() => {
    getArtisan();
  },[])

return (
    <>
        <div className="mt-5 pt-5">
          <br></br>
          <h3 className="titreSections">Les artisans du secteur de l'alimentation</h3>
          <div className="container">
            <CardAlimentation artisans={artisans}/>
          </div>
        </div>
    </>

)
}