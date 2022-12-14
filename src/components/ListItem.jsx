import { Container, Text, Pagination, Image, Center } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function ListItem({ item }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/coin/${item.id}`);
  };

  return (
    <>
      <Container style={{ marginTop: "5px" }}>
        <Container
          onClick={handleClick}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "0px",
            border: "1px solid #e6e6e6",
          }}
        >
          <Container
            style={{
              marginLeft: "0",
              display: "flex",
              alignItems: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <Image
              src={item.image}
              alt={item.name}
              style={{ width: "40px", height: "40px" }}
            />
            <Container
              style={{
                marginLeft: "10px",
                marginRight: "200px",
                paddingRight: "0px",
                maxWidth: "10px",
              }}
            >
              <Text>{item.name}</Text>
            </Container>
            <Container
              style={{
                borderLeft: "1px solid #e6e6e6",
                maxWidth: "10px",
                marginLeft: "10px",
                marginRight: "100px",
                paddingRight: "0px",
              }}
            >
              <Text>{item.price_change_percentage_24h}%</Text>
            </Container>
            <Container
              style={{
                borderLeft: "1px solid #e6e6e6",
                marginRight: "100px",
                maxWidth: "10px",
              }}
            >
              <Text>{item.current_price}$</Text>
            </Container>
            <Container
              style={{
                borderLeft: "1px solid #e6e6e6",
                marginRight: "100px",
                maxWidth: "10px",
              }}
            >
              <Text>{item.high_24h}$</Text>
            </Container>
            <Container
              style={{
                borderLeft: "1px solid #e6e6e6",
                marginRight: "100px",
                maxWidth: "10px",
              }}
            >
              <Text>{item.low_24h}$</Text>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default ListItem;
