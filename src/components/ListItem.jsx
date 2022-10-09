import { Container, Text, Pagination, Image, Center } from "@mantine/core";

function ListItem({ item }) {
  return (
    <>
      <Container style={{display:"flex"}}>


        <Image
          src={item.image}
          alt={item.name}
          style={{ width: "30px", height: "30px" }}
          />

        <Text>{item.name}</Text>
      </Container>
    </>
  );
}

export default ListItem;
