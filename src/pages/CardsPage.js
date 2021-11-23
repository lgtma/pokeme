import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import Layout from "../components/Layout";
import CardDetailPage from "./CardDetailPage";
import CollectionsPage from "./CollectionsPage";
import PokemonList from "../components/pokemons/PokemonList";

const CARDS_LIMIT = 12;

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

  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedPokemons, setLoadedPokemons] = useState([]);
  const hasFetchedData = useRef(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);

      const responseData = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${CARDS_LIMIT}&offset=${offset}`
      ).then((response) => response.json());

      const pokemons = [];

      responseData.results.forEach((pokemon) => {
        fetch(pokemon.url)
          .then((response) => response.json())
          .then((pokedata) => {
            pokemons.push(pokedata);
            setLoadedPokemons(pokemons.sort( (a, b) => a.id - b.id));
            if (pokemons.length === CARDS_LIMIT) {
              setIsLoading(false);
            }
          });
      });

      hasFetchedData.current = true;
    };

    fetchPokemons();
  }, [offset]);

  const getNextOffset = () => {
    setOffset(offset+CARDS_LIMIT);
  }

  const getPrevOffset = () => {
    if (offset > 0) {
      setOffset(offset-CARDS_LIMIT);
    }
  }

  const handleLoadNext = () => {
    getNextOffset();
    console.log("load more offset", offset);
  };

  const handleLoadPrev = () => {
    getPrevOffset();
    console.log("load less offset", offset);
  }

  return (
    <section className="my-4">
      <Container>
        <h1>Pokemon Cards</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <PokemonList pokemons={loadedPokemons} />
            <div className="d-flex justify-content-end">
              <Button
                variant="primary"
                className="text-light"
                size="lg"
                onClick={handleLoadPrev}
                disabled={offset < 1}
              >
                Prev
              </Button>
              <Button
                variant="primary"
                className="text-light ms-2"
                size="lg"
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
