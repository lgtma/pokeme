import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import pokemeLogo from "../pokemeLogo.png";

const MainNavigation = () => {
  return (
    <Navbar bg="secondary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={pokemeLogo} alt="pokeme!" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link href="/cards">Browse Cards</Nav.Link>
            <Nav.Link href="/cards/collections">Collections</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
