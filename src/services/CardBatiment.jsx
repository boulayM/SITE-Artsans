import { Card } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

const CardBatiment = ({artisans}) => {
    
    return (
    <>
        <div className="mt-5 pt-5">
            <div className="container">
            {artisans.map(artisan => (
                <Link to = {`/artisans/${artisan.id}`} className="linkCard">
                <Card className="mb-3" style={{ width: '18rem' }}>
                <Card.Body>
                <p>Nom: {artisan.nom}</p>
                <p>Note: <Rating initialValue={artisan.note} allowFraction size={25}/></p>
                <p>Sapécialité: {artisan.specialite}</p>
                <p>Localisation: {artisan.ville}</p>
                </Card.Body>
                </Card>
                </Link>

            ))}
        </div>
        </div>
        

    </>

)
}
export default CardBatiment;