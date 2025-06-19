import { Link } from "react-router-dom";
import { Nav, Navbar, Container, Image, Row, Col } from "react-bootstrap";
import  {useState, useEffect} from "react";
import Form from "../services/Form";

export default function Navigation() {

  const [users,setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch ("http://localhost:3000/categories");
    const json = await res.json();
    setUsers (json);
  }
  
  useEffect (() => {
    getUsers();
  },[])

  return(
    

            <Navbar collapseOnSelect bg='white' expand="lg" fixed="top" className="shadow-sm">
              <Container>
                <Row>
                  <Col>
                  <br></br>
                    <Navbar.Brand as={Link} to ='/' id="logo"><Image src="logo_tta.JPG" fluid/></Navbar.Brand>
                  </Col>
                  <Col>
                    <Form/>
                  </Col>
                  <Col><br></br>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" id="toggle"/>
                  <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto text-uppercase" variant="underline">
                    <Nav.Link as={Link} to="/" eventKey="20" id='accueil'>ACCUEIL</Nav.Link>
                      {users.map(user => (
                      <Nav.Link as={Link} to={user.categorie} key = {user.id}>
                      {user.categorie + ' '}
                      </Nav.Link>
                      ))}

                  </Nav>
                  </Navbar.Collapse>
                  </Col>
                  </Row>
              </Container>
            </Navbar>
    

      
  )
  
}

