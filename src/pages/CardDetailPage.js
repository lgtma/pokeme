import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

const CardDetailPage = (cardId) => {
  const params = useParams();
  console.log('cardId', params.cardId);

  return (
    <section>
      <Container>
      <h1>Card Detail {params.cardId}</h1>
      </Container>
    </section>
  );
};

export default CardDetailPage;