import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";


const EmailForm = () => {
    const [formData, setFormData] = useState({
        senderEmail: {artisans.email},
        recipientEmail: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/send-email', formData);
            alert(response.data);
        } catch (error) {
            console.error(error);
            alert('Erreur lors de l\'envoi de l\'email.');
        }
    };

    return (
        <Form onSubmit={handleSubmit} id="form">
    <Form.Control 
    type="email"
    name="senderEmail"
    value={formData.senderEmail}
    onChange={handleChange}
    required
    hidden
    />
    <Form.Group className="mb-3">
        <Form.Label>Entrez votre nom</Form.Label>
        <Form.Control type="text" placeholder="Nom" id="nom"/>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>L'objet de votre message</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Objet" 
        controlId="Objet" 
        id="objet"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
        />
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>Entrez votre e-mail</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="email" 
        id="email"
        type="email"
        name="senderEmail"
        value={formData.senderEmail}
        onChange={handleChange}
        required/>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>Entrez votre messagel</Form.Label>
        <Form.Control 
        as='textarea' 
        placeholder="Votre message" 
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        />
    </Form.Group>
    <Button variant="primary" type="submit">
        Envoyer
    </Button><br></br><br></br>
    </Form>
    );
};

export default EmailForm;


