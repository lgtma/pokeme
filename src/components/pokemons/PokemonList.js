import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import * as Icon from "react-feather";

const PokemonList = (props) => {
  // console.log("PokemonList.props ", props.pokemons);
  return (
    <Row>
      {props.pokemons.map((pokemon) => (
        <Col sm={6} md={4} xl={3} key={pokemon.id}>
          <PokemonCard pokemon={pokemon} />
        </Col>
      ))}
    </Row>
  );
};

const PokemonCard = ({ pokemon }) => {
  return (
    <Card className="mb-4">
      <Card.Header className="text-uppercase">
        <strong>
          #{pokemon.id} {pokemon.name}
        </strong>
      </Card.Header>
      <Link to={`${pokemon.id}`}>
        <Card.Img
          src={pokemon.sprites["front_default"]}
          className="d-block m-auto"
          width="120"
        />
      </Link>
      <Card.Body className="border-top">
        <Card.Title className="text-capitalize">
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
        <div className="d-flex justify-content-end">
          <button className="btn btn-transparent" onClick={toggleSaveFavorites}>
            <Icon.Heart />
          </button>
        </div>
      </Card.Footer>
    </Card>
  );
};

const renderPokeType = (types) => {
  // console.log("renderPokeType ", types);
  const temp = [];
  types.map((item) => temp.push(item.type.name));
  return temp.join(", ");
};

const toggleSaveFavorites = (event) => {
  console.log('save to favorites', event);
}
export default PokemonList;
