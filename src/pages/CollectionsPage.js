import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import FavoritesContext from "../context/favorite-context";
import PokemonList from "../components/pokemons/PokemonList";

const CollectionsPage = () => {

  const favoritesCtx = useContext(FavoritesContext);
  let content;

  console.log('collections favoriteCtx ', favoritesCtx.favorites);

  if (favoritesCtx.totalFavorites === 0) {
    content = <div>
      <p>You don't have any collection yet.</p>
      <Link to="/cards">
        <Button variant="primary" className="text-light">
          Browse Cards!
        </Button>
      </Link>
    </div>
  } else {
    content = <PokemonList pokemons={favoritesCtx.favorites} />
  }

  return (
    <section className="py-4">
      <Container>
        <h1 className="mb-4 text-uppercase fw-bold">My Collections</h1>
        { content }
      </Container>
    </section>
  );
};

export default CollectionsPage;
