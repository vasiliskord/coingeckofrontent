import { Center, Container, Text, Button, Pagination } from "@mantine/core";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "../components/ListItem";
import { getList, reset } from "../features/list/listSlice";
import Paginate from "../components/Pagination";
import useGetAllCoins from "../components/UseGetAllCoins";

function LandingPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageUrl, setPageUrl] = useState(`http://localhost:5000/api`);

  const {status,data}=useGetAllCoins(pageUrl)
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

    setPageUrl(`/api?page=${currentPage}`)
    dispatch(getList());
  }, [dispatch, error, currentPage]);


  return (
    <>
        <Container style={{ height: "100vh" }}>
          {data?.map((item) => {
            return <ListItem item={item} />;
          })}

          <Pagination total={data?.length} onChange={handlePageChange}/>
        </Container>;
    </>
  );
}

export default LandingPage;
