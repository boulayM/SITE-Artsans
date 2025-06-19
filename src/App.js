import './App.css';
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Figure, Container, Row, Col } from 'react-bootstrap';
import Accueil from "./pages/Accueil";
import Alimentation from "./pages/Alimentation";
import Batiment from "./pages/Batiment";
import Fabrication from "./pages/Fabrication";
import Services from "./pages/Services";
import Error from "./pages/Error";
import Navigation from './components/Navigation';
import CardIndividual from './services/CardIndividual';
import CardSearch from './services/CardSearch';

document.body.addEventListener("click", function(){
    let navBar = document.getElementById("responsive-navbar-nav");
    navBar.classList.remove("show");
});

function topFunction() {
    
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


function App() {
  return (
    <>
      <header>
        <Navigation/>
      </header>
      <main>
      </main>
        <Routes>
          <Route path="/" element = {<Accueil/>}></Route>
          <Route path="Services" element = {<Services/>}></Route>
          <Route path="Alimentation" element = {<Alimentation/>}></Route>
          <Route path="Bâtiment" element = {<Batiment/>}></Route>
          <Route path="Fabrication" element = {<Fabrication/>}></Route>
          <Route path="/artisans/:id" element = {<CardIndividual/>}></Route>
          <Route path="Error" element = {<Error/>}></Route>
          <Route path="/artisans/nom/:nom" element = {<CardSearch/>}></Route>

        </Routes>

      <footer>
        <Container fluid>
          <Row>
            <Col className="mx-5 mb-4">
            <Figure>
              <a href='https://www.auvergnerhonealpes.fr/' target='blank'><Figure.Image src='logoARA.png'/></a>
            </Figure>
          </Col>
          <Col className="mx-5 mb-4" id='texteFooter'>
            <p>
              101 cours Charlemagne <br></br>
              CS 20033 <br></br>
              69269 LYON CEDEX 02 <br></br>
              FRANCE <br></br>
              +33 (0) 4 26 73 40 00
            </p>
            <br></br>
          </Col>
          <Col className="mx-5 mb-4" id='linksFooter'>
            <ul>
              <li>
                <Link to="Error" onClick={topFunction}>Données personnelles</Link>
              </li>
              <li>
                <Link to="Error" onClick={topFunction}>Accessibilité  </Link>
              </li>
              <li>
                <Link to="Error" onClick={topFunction}>Presse  </Link>
              </li>
              <li>
                <Link to="Error" onClick={topFunction}>Marchés publics  </Link>
              </li>
              <li>
                <Link to="Error" onClick={topFunction}>Venir à la région  </Link>
              </li>
              <li>
                <Link to="Error" onClick={topFunction}>Contacts  </Link>
              </li>
              <li>
                <Link to="Error" onClick={topFunction}>Politique des cookies  </Link>
              </li>
              <li>
                <Link to="Error" onClick={topFunction}>Gestion des cookies</Link>
              </li>
            </ul>
            
            </Col>
            </Row>
        </Container>
      </footer>

    </>

  );
}

export default App;
