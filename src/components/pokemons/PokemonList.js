import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PokemonCard from "./PokemonCard";

const PokemonList = (props) => {
  // console.log('PokemonList props', props);
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

export default PokemonList;
