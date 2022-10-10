import { Container, Text } from "@mantine/core";

function Header() {
  return (
    <>
      <Container style={{ marginBottom: "5px",marginTop:"20px" }}>
        <Container
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
            <Container
              style={{
                marginLeft: "50px",
                marginRight: "200px",
                paddingRight: "0px",
                maxWidth: "10px",
              }}
            >
              <Text size="l">Coins</Text>
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
              <Text size="">Price Change</Text>
            </Container>
            <Container
              style={{
                borderLeft: "1px solid #e6e6e6",
                marginRight: "100px",
                maxWidth: "10px",
              }}
            >
              <Text>Current Price</Text>
            </Container>
            <Container
              style={{
                borderLeft: "1px solid #e6e6e6",
                marginRight: "100px",
                maxWidth: "10px",
              }}
            >
              <Text>Highest 24h</Text>
            </Container>
            <Container
              style={{
                borderLeft: "1px solid #e6e6e6",
                marginRight: "100px",
                maxWidth: "10px",
              }}
            >
              <Text>Lowest 24h</Text>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
}


export default Header;