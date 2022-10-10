import { useParams } from "react-router-dom";
import useGetCoin from "../components/useGetCoin";
import { Container, Text } from "@mantine/core";

function CoinById() {
  const { id } = useParams();
  const { status, data } = useGetCoin(id);

  return <>{data && <GetCoin coin={data} />}</>;
}

function GetCoin({ coin }) {
  return (
    <Container>
      <Text>{coin.name}</Text>
    </Container>
  );
}


export default CoinById;