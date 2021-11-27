import { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import * as Icon from "react-feather";

import FavoritesContext from "../../context/favorite-context";

const PokemonCard = ({ pokemon }) => {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsfavorite(pokemon.id);

  const renderPokeType = (types) => {
    const temp = [];
    types.map((item) => temp.push(item.type.name));
    return temp.join(", ");
  };

  const addToFavoriteHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(pokemon.id);
    } else {
      favoritesCtx.addFavorite(pokemon);
    }
  };

  return (
    <Card className="mb-4 bg-light">
      <Card.Header className="text-uppercase">
        <strong>
          #{pokemon.id} {pokemon.name}
        </strong>
      </Card.Header>
      <Link to={`${pokemon.id}`}>
        <Card.Img
          src={pokemon.sprites["front_default"]}
          className="d-block m-auto"
          width="100"
          style={{maxWidth: '100px'}}
        />
      </Link>
      <Card.Body className="border-top">
        <Card.Title className="text-capitalize h6">
          <strong>{pokemon.name}</strong>
        </Card.Title>
        <Card.Text>
          <span className="d-block">
            Type(s):{" "}
            <span className="text-capitalize">
              {renderPokeType(pokemon.types)}
            </span>
          </span>
          <span className="d-block">
            Experience:{" "}
            <span className="text-warning fw-bold">
              {pokemon.base_experience}
            </span>
          </span>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="border-top">
        <button
          className={`btn btn-transparent w-100 p-0 ${
            itemIsFavorite ? "is-favorite" : ""
          }`}
          onClick={addToFavoriteHandler}
        >
          <div className="d-flex justify-content-between">
            <small className="text-muted">
              {itemIsFavorite
                ? "Remove from Collections"
                : "Add to Collections"}
            </small>{" "}
            <Icon.Heart className="icon" />
          </div>
        </button>
      </Card.Footer>
    </Card>
  );
};

export default PokemonCard;
