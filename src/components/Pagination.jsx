import { Container, Pagination, Button, Center } from "@mantine/core";

function Paginate({ totalPosts, postsPerPage, setCurrentPage }) {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Center >
      {pageNumbers.map((number) => {
        return <Button onClick={() => setCurrentPage(number)} style={{marginRight:"5px",backgroundColor:"black"}}>{number}</Button>;
      })}
    </Center>
  );
}

export default Paginate;
