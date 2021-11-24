import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import * as Icon from "react-feather";

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
    <section className="my-4">
      <Container>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          pokemon && <CardDetailItem pokemon={pokemon} />
        )}
      </Container>
    </section>
  );
};

const CardDetailItem = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="card-header text-uppercase position-relative">
        <h1 className="fw-bold">
          <span className="badge bg-secondary rounded-0 rounded-end d-flex align-items-center position-absolute top-0 bottom-0 end-0">
            #{pokemon.id}
          </span>{" "}
          {pokemon.name}
        </h1>
      </div>
      <div className="card-body p-0">
        <div className="row g-0">
          <div className="col-md-4">
            <div className="card-img p-5 d-flex justify-content-center align-items-center rounded-0 rounded-start h-100">
              <img
                src={pokemon.sprites.front_default}
                className="rounded-start"
                alt={pokemon.name + " front"}
                width="180"
              />
              <img
                src={pokemon.sprites.back_default}
                className="rounded-start"
                alt={pokemon.name + " back"}
                width="180"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body border-start">
              <h5 className="card-title text-capitalize">
                <strong>{pokemon.name}</strong>
              </h5>

              <div className="card-text">
                <span className="d-block">
                  <span>Type(s):</span>{" "}
                  <span className="text-capitalize">
                    {renderPokeType(pokemon.types)}
                  </span>
                </span>

                <span className="d-block">Height: {pokemon.height}</span>
                <span className="d-block">Weight: {pokemon.weight}</span>

                <div className="my-2">
                  <span className="fw-bold">Base Stats:</span>
                  {pokemon.stats.map((item, index) => {
                    return (
                      <div key={index}>
                        <span className="text-capitalize">
                          {item.stat.name}:
                        </span>{" "}
                        <span>{item.base_stat}</span>
                      </div>
                    );
                  })}
                  <span>Experience:</span>{" "}
                  <span className="text-warning fw-bold">
                    {pokemon.base_experience}
                  </span>
                </div>

              </div>
              <p className="card-text">
                <span className="d-block fw-bold">Moves:</span>
                <small className="text-muted fst-italic">
                  {renderPokeMoves(pokemon.moves)}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-end">
          <button className="btn btn-transparent">
            <Icon.Heart />
          </button>
        </div>
      </div>
    </div>
  );
};

const renderPokeType = (types) => {
  const temp = [];
  types.map((item) => temp.push(item.type.name));
  return temp.join(", ");
};

const renderPokeMoves = (moves) => {
  const temp = [];
  moves.map((item) => temp.push(item.move.name));
  return temp.join(", ");
};

export default CardDetailPage;
