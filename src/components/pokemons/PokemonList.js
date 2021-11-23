import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const PokemonList = (props) => {
  console.log("PokemonList.props ", props.pokemons);
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
      {/* <Card.Header className="text-capitalize">
        <strong>{pokemon.name}</strong>
      </Card.Header> */}
      <Card.Img
        variant="top"
        src={pokemon.sprites["front_default"]}
        className="border-bottom bg-light"
      />
      <Card.Body>
        <Card.Title className="text-capitalize">
          <strong>#{pokemon.id} {pokemon.name}</strong>
        </Card.Title>
        <Card.Text>
          <span className="d-block text-capitalize">Species: {pokemon.species.name}</span>
          <span className="d-block text-capitalize">
            Type: {renderPokeType(pokemon.types)}
          </span>
          <span className="d-block">Height: {pokemon.height}</span>
          <span className="d-block">Weight: {pokemon.weight}</span>
        </Card.Text>
      </Card.Body>
      <Card.Footer><i className="bi bi-heart"></i></Card.Footer>
    </Card>
  );
};

const renderPokeType = (types) => {
  console.log("renderPokeType ", types);
  const temp = [];
  types.map( item => temp.push(item.type.name));
  return temp.join(", ");
};

export default PokemonList;
