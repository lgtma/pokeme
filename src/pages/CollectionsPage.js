import {Link} from "react-router-dom";

import Container from "react-bootstrap/Container";

const CollectionsPage = () => {
  return (
    <section className="my-4">
      <Container>
        <h1 className="mb-4 text-uppercase">My Collections</h1>
        <ul>
          <li>
            <Link to="/cards/detail/poke1">Poke1</Link>
          </li>
          <li>
            <Link to="/cards/detail/poke3">Poke3</Link>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default CollectionsPage;
