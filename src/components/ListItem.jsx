import { Container, Text, Pagination, Image, Center } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function ListItem({ item }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/coin/${item.id}`);
  };

  return (
    <>
      <Container style={{ marginBottom: "20px" }}>
        <Container
          onClick={handleClick}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "13px",
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
              style={{ width: "50px", height: "50px" }}
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
              <Text>{item.symbol}</Text>
            </Container>
            <Container style={{ borderLeft: "1px solid #e6e6e6" }}>
              <Text>{item.current_price}</Text>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default ListItem;
