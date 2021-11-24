import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

import PokemonCardDetail from "../components/pokemons/PokemonCardDetail";

const CardDetailPage = (cardId) => {
  
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.cardId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPokemon(data);
        setIsLoading(false);
      });
  }, [params.cardId]);

  // console.log("pokemon detail ", pokemon);
  // console.log("isLoading ", isLoading);

  return (
    <section className="py-4 bg-light">
      <Container>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          pokemon && <PokemonCardDetail pokemon={pokemon} />
        )}
      </Container>
    </section>
  );
};

export default CardDetailPage;
