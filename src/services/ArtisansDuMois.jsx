import  {useState, useEffect} from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

export default function Atdm() {

  const [artisans, setArtisans] = useState([]);

  const getArtisan = async () => {
    const res = await fetch ("https://mabdev.alwaysdata.net/node/atdm");
    const json = await res.json();
    setArtisans (json);
  }
  
  useEffect (() => {
    getArtisan();
  },[])

return (

    <>
        <Row>
            {artisans.map(artisan => (        
                <Col key={artisan.id}>
                <Card className="mb-3">
                <Card.Body>
                <p>Nom: {artisan.nom}</p>
                <p>Note: <Rating initialValue={artisan.note} allowFraction size={25}/></p>
                <p>Sapécialité: {artisan.specialite}</p>
                <p>Localisation: {artisan.ville}</p>
                </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>   
    </>
)}