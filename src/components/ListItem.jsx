import { Container, Text, Pagination, Image, Center } from "@mantine/core";

function ListItem({ item }) {
  return (
    <>
      <Container>
        {item.map((coin, index) => {
          return (
            <Container
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "13px",
                border: "1px solid #e6e6e6",
              }}
              key={index}
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
                  src={coin.image}
                  alt={coin.name}
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
                  <Text>{coin.name}</Text>
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
                  <Text>{coin.symbol}</Text>
                </Container>
                <Container style={{ borderLeft: "1px solid #e6e6e6" }}>
                  <Text>{coin.current_price}</Text>
                </Container>
              </Container>
            </Container>
          );
        })}
      </Container>
    </>
  );
}

export default ListItem;
