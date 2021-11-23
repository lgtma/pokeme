import { Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Layout from "../components/Layout";
import CardDetailPage from "./CardDetailPage";
import CollectionsPage  from "./CollectionsPage";

const CardsPage = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CardsListing />} />
        <Route path="/detail/:cardId" element={<CardDetailPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
      </Routes>
    </Layout>
  );
};

const CardsListing = () => {
  return (
    <section>
      <Container>
      <h1>Browse Pokemon Cards</h1>
      <ul>
        <li>
          <Link to="detail/poke1">Poke1</Link>
        </li>
        <li>
          <Link to="detail/poke2">Poke2</Link>
        </li>
        <li>
          <Link to="detail/poke3">Poke3</Link>
        </li>
      </ul>
      </Container>
    </section>
  );
};

export default CardsPage;
