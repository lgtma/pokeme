import { Routes, Route, Link } from "react-router-dom";

import CardsPage from "./pages/CardsPage";
import LogoV from "./pokemeLogoV.png";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<WelcomeScreen />} />
      <Route path="/cards/*" element={<CardsPage />} />
    </Routes>
  );
};

const WelcomeScreen = () => {
  return (
    <section className="bg-secondary">
      <Container>
        <div
          style={{height: "100vh"}}
          className="d-flex justify-content-center align-items-center flex-column"
        >
          <img src={LogoV} alt="pokeme" style={{ maxWidth: "120px" }} />
          <div className="text-center text-light mt-4">
            <h1 className="display-6 text-uppercase text-center mb-4">
              Welcome to Pokeme
            </h1>
            <p className="mb-3">
              <span className="lead">A collectible Pokemon cards app</span>
              <br />
              Find and collect your favourite pokemon
            </p>
            <Link to="/cards">
              <Button variant="primary" className="text-light">
                Browse Cards
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default App;

// domain/ => Welcome screen component
// domain/cards => Cards listing component
// domain/cards/:cardId => Card detail component
