import { Card, Image, Form, Button, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";


const CardDetails = ({artisans}) => {
    
    return (
    <>
        <div className="mt-5 pt-5">
            <div className="container fluid">
                <Row>
                    <Col>
                    <Card className="mb-3" style={{ width: '18rem' }}>
                    <Card.Body>
                    <p>Nom: {artisans.nom}</p>
                    <Image src= {`/img/${artisans.nom}.jpg`} fluid/>
                    <p>Note: <Rating initialValue={artisans.note} allowFraction size={25}/></p>
                    <p>Sapécialité: {artisans.specialite}</p>
                    <p>Localisation: {artisans.ville}</p>
                    <p>A propos: {artisans.apropos}</p>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <h4>Formulaire de contact</h4>
                    <Form action={`mailto:${artisans.email}`} id="form">
                        <Form.Group className="mb-3">
                            <Form.Label>Entrez votre nom</Form.Label>
                            <Form.Control type="text" placeholder="Nom" id="nom"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>L'objet de votre message</Form.Label>
                            <Form.Control type="text" placeholder="Objet" controlId="Objet" id="objet"/>
                        </Form.Group>
                            <Form.Group className="mb-3">
                            <Form.Label>Entrez votre e-mail</Form.Label>
                            <Form.Control type="email" placeholder="email" id="email"/>
                        </Form.Group>
                            <Form.Group className="mb-3">
                            <Form.Label>Entrez votre messagel</Form.Label>
                            <Form.Control as='textarea' placeholder="Votre message" id="message"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Envoyer
                        </Button><br></br><br></br>
                    </Form>
                    <p>Notre site internet:</p>
                    <a href={artisans.site} target="blank">{artisans.site}</a>
                </Col>
                </Row>
            </div>
        </div>
        

    </>

)}

export default CardDetails;