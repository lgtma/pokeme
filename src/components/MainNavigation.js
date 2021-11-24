import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import { LinkContainer } from "react-router-bootstrap";  

import pokemeLogo from "../pokemeLogo.png";

const MainNavigation = () => {
  return (
    <Navbar bg="secondary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={pokemeLogo} alt="pokeme!" height="60" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ms-auto">
            <Link to="/cards" className="nav-link">Browse Pokemons</Link>
            <Link to="/cards/collections" className="nav-link">Collections</Link>
            {/* <Nav.Link href="#">Browse Pokemons</Nav.Link>
            <Nav.Link href="#">Collections</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
