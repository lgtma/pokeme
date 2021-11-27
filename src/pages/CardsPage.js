import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import Layout from "../components/Layout";
import CardDetailPage from "./CardDetailPage";
import CollectionsPage from "./CollectionsPage";
import PokemonList from "../components/pokemons/PokemonList";
import { getAllPokemon, getPokemon } from "../services/pokemon";

const CardsPage = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<CardsListing />} />
        <Route path=":cardId" element={<CardDetailPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
      </Routes>
    </Layout>
  );
};

const CardsListing = () => {
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=12`
  );
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPokemons, setLoadedPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      let response = await getAllPokemon(currentPageUrl);

      setPrevUrl(response.previous);
      setNextUrl(response.next);

      let pokemons = await Promise.all(
        response.results.map((pokemon) => getPokemon(pokemon.url))
      );

      setLoadedPokemons(pokemons);
      setIsLoading(false);

      // console.log("response.results ", response);
    };

    fetchPokemons();
  }, [currentPageUrl]);

  const handleLoadNext = () => {
    setIsLoading(true);
    setCurrentPageUrl(nextUrl);
  };

  const handleLoadPrev = () => {
    setIsLoading(true);
    setCurrentPageUrl(prevUrl);
  };

  return (
    <section className="py-4">
      <Container>
        <h1 className="mb-4 text-uppercase fw-bold">Pokemon Cards</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <PokemonList pokemons={loadedPokemons} />
            <div className="d-flex justify-content-end">
              <Button
                variant="primary"
                className="text-light"
                onClick={handleLoadPrev}
                disabled={!prevUrl}
              >
                Prev
              </Button>
              <Button
                variant="primary"
                className="text-light ms-1"
                onClick={handleLoadNext}
              >
                Next
              </Button>
            </div>
          </>
        )}
      </Container>
    </section>
  );
};

export default CardsPage;
