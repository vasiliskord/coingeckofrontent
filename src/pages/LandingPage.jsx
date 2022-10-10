import { Center, Container, Text, Button, Pagination } from "@mantine/core";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "../components/ListItem";
import { getList, reset } from "../features/list/listSlice";
import useGetAllCoins from "../components/UseGetAllCoins";
import Header from "../components/Header";

function LandingPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageUrl, setPageUrl] = useState(`http://localhost:5000/api`);

  const { status, data } = useGetAllCoins(pageUrl);
  console.log(data);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const { coins, success, error, loading } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      console.log(error);
    }

    setPageUrl(`/api?page=${currentPage}`);
    dispatch(getList());
  }, [dispatch, error, currentPage]);

  return (
    <>
      <Container style={{ height: "100vh" }}>
        <Header />
        {data?.map((item) => {
          return <ListItem item={item} />;
        })}
        <Center>
          <Pagination total={data?.length} onChange={handlePageChange} style={{marginTop:"20px"}}/>
        </Center>
      </Container>
    </>
  );
}

export default LandingPage;
