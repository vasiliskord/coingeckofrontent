import { useParams } from "react-router-dom";
import useGetCoin from "../components/useGetCoin";
import { Center, Container, Text, Table } from "@mantine/core";

function CoinById() {
  const { id } = useParams();
  const { status, data } = useGetCoin(id);

  return <>{data && <GetCoin coin={data} />}</>;
}

function GetCoin({ coin }) {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Center
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "0px",
          border: "1px solid #e6e6e6",
        }}
      >
        <Text size="xl" style={{ fontWeight: "700" }}>
          {coin.name}
        </Text>
        <Text style={{ marginTop: "10px" }}>
          Price : {coin.market_data.current_price.usd}$
        </Text>
        <Text style={{ marginTop: "10px" }}>
          Low 24H : {coin.market_data.low_24h.usd}$
        </Text>
        <Text style={{ marginTop: "10px" }}>
          High 24H : {coin.market_data.high_24h.usd}$
        </Text>
        {/* <Text>Price Changes</Text>{" "} */}
        <Text style={{ marginTop: "10px" }}>Price Changes</Text>
        <Center>
          <Table withBorder withColumnBorders>
            <thead>
              <tr>
                <th>24H</th>
                <th>7D</th>
                <th>14D</th>
                <th>1M</th>
                <th>2M</th>
                <th>200D</th>
                <th>1Y</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}$
                </td>
                <td>
                  {coin.market_data.price_change_percentage_7d.toFixed(2)}$
                </td>
                <td>
                  {coin.market_data.price_change_percentage_14d.toFixed(2)}$
                </td>
                <td>
                  {coin.market_data.price_change_percentage_30d.toFixed(2)}$
                </td>
                <td>
                  {coin.market_data.price_change_percentage_60d.toFixed(2)}$
                </td>
                <td>
                  {coin.market_data.price_change_percentage_200d.toFixed(2)}$
                </td>
                <td>
                  {coin.market_data.price_change_percentage_1y.toFixed(2)}$
                </td>
              </tr>
            </tbody>
          </Table>
        </Center>

        <Text dangerouslySetInnerHTML={{ __html: coin.description.en }}></Text>
      </Center>
    </Container>
  );
}

export default CoinById;
